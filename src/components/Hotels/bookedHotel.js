import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Button from '../Form/Button';
import useToken from '../../hooks/useToken';
import axios from 'axios';

export default function BookedHotel() {
  const token = useToken();
  const url = process.env.REACT_APP_API_BASE_URL + '/booking';
  const config = { headers: { 'Authorization': 'Bearer ' + token } };
  const [selectedRoom, setSelectedRoom] = useState({});
  const [selectedHotel, setSelectedHotel] = useState({});
  const [numberOfRoommates, setNumberOfRoommates] = useState(0);

  useEffect(() => {
    axios
      .get(url, config)
      .then(({ data }) => {
        setSelectedRoom(data.Room);
        setSelectedHotel(data.Room.Hotel);
        setNumberOfRoommates(data.Room.Booking.length - 1);
      })
      .catch(console.log);
  }, []);

  function changeBooking() {

  }

  return (
    <HotelSelectedContainer>
      <h1>Escolha de hotel e quarto</h1>
      <h2>Você já escolheu seu quarto:</h2>
      <div>
        <img src={selectedHotel.image} alt='Seu hotel'/>
        <span>{selectedHotel.name}</span>
        <span>Quarto reservado</span>
        <span>{selectedRoom.name} ({['Single', 'Double', 'Triple'][selectedRoom.capacity - 1]})</span>
        <span>Pessoas no seu quarto</span>
        <span>Você e mais {numberOfRoommates}</span>
      </div>
      <Button onClick={changeBooking}>TROCAR DE QUARTO</Button>
    </HotelSelectedContainer>
  );
}

const HotelSelectedContainer = styled.div`
  h1 {
    margin-bottom: 36px;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
    color: #000000;
  };

  h2 {
    margin-bottom: 14px;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #8E8E8E;
  }

  div {
    margin-bottom: 38px;
    width: 196px;
    height: 264px;
    border-radius: 10px;
    padding: 14px;
    display: flex;
    flex-direction: column;
    background-color: #FFEED2;

    img {
      margin-bottom: 10px;
      width: 168px;
      height: 109px;
      border-radius: 5px;
      object-fit: cover;
    }

    span {
      font-family: 'Roboto';
    }

    span:nth-of-type(1) {
      margin-bottom: 10px;
      font-weight: 400;
      font-size: 20px;
      line-height: 23px;
      color: #343434;
    }

    span:nth-of-type(3) {
      margin-bottom: 14px;
    }

    span:nth-of-type(n + 2) {
      font-size: 12px;
      line-height: 14px;
      color: #3C3C3C;
    }

    span:nth-of-type(2n) {
      margin-bottom: 2px;
      font-weight: 700;
    }

    span:nth-of-type(2n + 1) {
      font-weight: 400;
    }
  }
`;
