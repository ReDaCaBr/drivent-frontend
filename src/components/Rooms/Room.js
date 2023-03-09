import { useState } from 'react';
import styled from 'styled-components';
import { VacancyFree, VacancyOccupied, VacancySelected } from './Icons';

export default function Room() {
  const [background, setBackground] = useState('#FFF');
  const freeVacancies = 2;

  return (
    <RoomStyled background={freeVacancies === 0 ? '#E9E9E9' : background}>
      <span>{101}</span>
      <div>
        <VacancyFree background={background} />
        <VacancyOccupied />
        <VacancySelected />
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
