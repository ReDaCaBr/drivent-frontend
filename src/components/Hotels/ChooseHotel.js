import { useState, useEffect } from 'react';
import useRooms from '../../hooks/api/useRooms';
import useBooking from '../../hooks/api/useBooking';
import styled from 'styled-components';
import Hotel from './HotelCard';
import Rooms from '../Rooms/index';
import BookedHotel from './bookedHotel';

export default function ChooseHotelMenu({ hotels, selectedHotel, handleSelectHotel, setSelectedHotel }) {
  const { rooms } = useRooms(); //16 rooms
  const { getBooking } = useBooking();
  const [reload, setReload] = useState(0);
  const [booking, setBooking] = useState({});
  const [isChangeRoom, setIsChangeRoom] = useState(false);
  const [finalizedChoices, setFinalizedChoices] = useState(false);
  useEffect(() => {
    const promisse = getBooking();
    promisse.then((p) => {
      if (p) setBooking(p);
    });
  }, [reload]);
  //TODO mudar hotelId

  const hotelsAndRoomsRenderization = (
    <>
      <MenuHeader>Primeiro, escolha seu hotel</MenuHeader>
      <HotelBrowser>
        {hotels ? (
          hotels.map((hotel, index) => (
            <Hotel
              key={index}
              index={index}
              name={hotel.name}
              image={hotel.image}
              rooms={hotel.rooms}
              selected={hotel.id === selectedHotel}
              handleSelectHotel={() => handleSelectHotel(hotel)}
            />
          ))
        ) : (
          <></>
        )}
      </HotelBrowser>
      {!selectedHotel ? (
        ''
      ) : (
        <Rooms
          listOfRooms={rooms}
          hotelId={selectedHotel}
          bookingId={booking?.id}
          reload={reload}
          setReload={setReload}
          isChangeRoom={isChangeRoom}
          setIsChangeRoom={setIsChangeRoom}
          setFinalizedChoices={setFinalizedChoices}
        />
      )}
    </>
  );

  const summaryRenderization = (
    <BookedHotel
      setFinalizedChoices={setFinalizedChoices}
      setSelectedHotel={setSelectedHotel}
    />
  );

  if (finalizedChoices === false) {
    return hotelsAndRoomsRenderization;
  } else {
    return summaryRenderization;
  }
}

const MenuHeader = styled.div`
  color: #8e8e8e;
  font-size: 20px;
  margin-bottom: 18px;
`;

const HotelBrowser = styled.div`
  display: flex;
  flex-direction: row;
  gap: 19px;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  flex-wrap: wrap;
`;
