import { useState } from 'react';
import styled from 'styled-components';
import { VacancyOccupied } from './Icons';
import Vacancy from './Vacancy';

function createFreeVacancies(
  number,
  setBackground,
  roomdId,
  handleClick,
  selectedId,
  hotelId,
  statusVacancy,
  setStatusVacancy
) {
  const vacancies = [];
  for (let i = 1; i <= number; i++) {
    vacancies.push(
      <Vacancy
        setBackground={setBackground}
        roomId={roomdId}
        handleClick={handleClick}
        selectedId={selectedId}
        numberOfFree={i}
        statusVacancy={statusVacancy}
        setStatusVacancy={setStatusVacancy}
        hotelId={hotelId}
        key={i}
      />
    );
  }
  return vacancies;
}
function createVacanciesOccupied(number) {
  const vacancies = [];
  for (let i = 1; i <= number; i++) {
    vacancies.push(<VacancyOccupied key={i} />);
  }
  return vacancies;
}

export default function Room({
  //prettier-ignore
  name,
  capacity,
  bookings,
  roomId,
  handleClick,
  selectedId,
  hotelId,
}) {
  const [background, setBackground] = useState('#FFF');
  const freeVacancies = capacity - bookings;
  const [statusVacancy, setStatusVacancy] = useState(0);

  return (
    <RoomStyled background={freeVacancies === 0 ? '#E9E9E9' : background} opacity={freeVacancies === 0 ? '0.5' : '1'}>
      <span>{name}</span>
      <div>
        {createFreeVacancies(
          freeVacancies,
          setBackground,
          roomId,
          handleClick,
          selectedId,
          hotelId,
          statusVacancy,
          setStatusVacancy
        )}
        {createVacanciesOccupied(bookings)}
      </div>
    </RoomStyled>
  );
}

const RoomStyled = styled.div`
  width: 190px;
  height: 45px;
  border: 1px solid #cecece;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  padding-left: 16px;
  padding-right: 10px;
  background-color: ${(props) => props.background};
  opacity: ${(props) => props.opacity};
  margin: 0 17px 8px 0;
  span {
    font-size: 20px;
    font-weight: bold;
    line-height: 23px;
    text-align: center;
    color: #454545;
  }
  div {
    display: flex;
  }
`;
