import Room from './Room';
import styled from 'styled-components';
import { useState, useRef, useEffect } from 'react';
import useRooms from '../../hooks/api/useRooms';
import Button from '../Form/Button';
import useCreateBooking from '../../hooks/api/useCreateBooking';
import useUpdateBooking from '../../hooks/api/useUpdateBooking';
import { toast } from 'react-toastify';

export default function Rooms({ listOfRooms, hotelId, bookingId, reload, setReload, isChangeRoom, setIsChangeRoom, setFinalizedChoices }) {
  const selectedId = useRef(0);
  const [selectedRoomId, setSelectedRoomId] = useState(0);
  const { updateBooking } = useUpdateBooking();
  const { createBooking } = useCreateBooking();
  const { getRooms } = useRooms(hotelId);
  const [rooms, setRooms] = useState(listOfRooms);

  function handleClick(roomId) {
    selectedId.current = roomId;
    setSelectedRoomId(roomId);
  }
  useEffect(() => {
    getRooms().then((res) => setRooms(res));
    setSelectedRoomId(0);
  }, [hotelId]);

  async function putBooking() {
    try {
      if (bookingId) {
        const { UpdateBookingError } = await updateBooking(selectedRoomId, bookingId);
        setIsChangeRoom(false);
        toast('Informações alteradas com sucesso!');
        if (UpdateBookingError) throw UpdateBookingError;
        setReload((reload) => reload + 1);
        return;
      }
      const { bookingError } = await createBooking(selectedRoomId);
      toast('Informações salvas com sucesso!');
      if (bookingError) throw bookingError;
      setReload((reload) => reload + 1);
      setFinalizedChoices(true);
    } catch (error) {
      toast('Não foi possível salvar suas informações!');
    }
  }
  return (
    <>
      <PageSubTitle variant="caption">Ótima pedida! Agora escolha seu quarto:</PageSubTitle>
      <RoomsContainer>
        {rooms?.map((room, index) => (
          <Room
            //prettier-ignore
            name={room.name}
            capacity={room.capacity}
            bookings={1} //TODO pegar a contagem dos bookings do back-end
            roomId={room.id}
            handleClick={handleClick}
            selectedId={selectedId.current}
            hotelId={hotelId}
            key={index}
          />
        ))}
      </RoomsContainer>
      <div>
        {
          //prettier-ignore
          selectedRoomId === 0 ? '' : <Button onClick={async() => await putBooking()}>RESERVAR QUARTO</Button>
        }
      </div>
    </>
  );
}

export const PageSubTitle = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  line-height: 23px;
  color: #8e8e8e;
  margin-top: 10px;
  margin-bottom: 10px;
  button {
    outline: none;
    border: none;
    height: 37px;
    width: 182px;
    background-color: #e0e0e0;
    border-radius: 4px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }
`;

const RoomsContainer = styled.div`
  width: 100%;
  height: 212px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
