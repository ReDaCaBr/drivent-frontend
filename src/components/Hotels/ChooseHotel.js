import styled from 'styled-components';
import Hotel from './HotelCard';

export default function ChooseHotelMenu({ hotels, selectedHotel, handleSelectHotel }) {
  return (
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
    </>
  );
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
