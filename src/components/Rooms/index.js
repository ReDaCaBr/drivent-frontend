import Room from './Room';
import styled from 'styled-components';
import { useState, useRef, useEffect } from 'react';
import useRooms from '../../hooks/api/useRooms';

export default function Rooms({ listOfRooms }) {
  const selectedId = useRef(0);
  const [selectedRoomId, setSelectedRoomId] = useState(0);
  const { getRooms } = useRooms(1); //TODO hotelId
  const [rooms, setRooms] = useState(listOfRooms);

  function handleClick(roomId) {
    selectedId.current = roomId;
    setSelectedRoomId(roomId);
  }
  useEffect(() => {
    getRooms().then((res) => setRooms(res));
    setSelectedRoomId(0);
  }, [2]); //TODO hotelId
  return (
    <>
      <PageSubTitle variant="caption">Ótima pedida! Agora escolha seu quarto:</PageSubTitle>
      <RoomsContainer>
        {rooms?.map((room, index) => (
          <Room
            //prettier-ignore
            name={room.name}
            capacity={room.capacity}
            bookings={1}
            roomId={room.id}
            handleClick={handleClick}
            selectedId={selectedId.current}
            hotelId={2} //TODO hotelId
            key={index}
          />
        ))}
      </RoomsContainer>
    </>
  );
}

export const PageSubTitle = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  line-height: 23px;
  color: #8e8e8e;
  margin-bottom: 15px;
`;

const RoomsContainer = styled.div`
  width: 100%;
  height: 212px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
