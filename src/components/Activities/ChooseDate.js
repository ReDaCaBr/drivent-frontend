import { useState, useEffect } from 'react';
import styled from 'styled-components';
import useActivitiesDates from '../../hooks/api/useActivitiesDates';

function formatDateContent(date) {
  const dateArray = date.split(',');
  const monthAndDay = dateArray[1].slice(1).split('/').slice(1);
  const month = monthAndDay[0];
  const day = monthAndDay[1];
  const content = `${dateArray[0]}, ${day}/${month}`;
  return content;
}

function Date({ date, index, selected, handleSelectDate }) {
  const content = formatDateContent(date);
  return (
    <>
      <DateContainer index={index} selected={selected} onClick={handleSelectDate}>
        <h3>{content}</h3>
      </DateContainer>
    </>
  );
}

export default function ChooseDate() {
  const [selectedDate, setSelectedDate] = useState('');
  const { activitiesDates } = useActivitiesDates();
  const dates = [...new Set(activitiesDates)];

  const handleSelectDate = (date) => {
    if (date === selectedDate) {
      setSelectedDate('');
    } else {
      setSelectedDate(date);
    }
  };

  return (
    <>
      <MenuHeader>Primeiro, filtre pelo dia do evento: </MenuHeader>
      <DateBrowser>
        {dates.map((date, index) => (
          <Date
            key={index}
            index={index}
            date={date}
            selected={date === selectedDate}
            handleSelectDate={() => handleSelectDate(date)}
          ></Date>
        ))}
      </DateBrowser>
    </>
  );
}

const MenuHeader = styled.div`
  color: #8e8e8e;
  font-size: 20px;
  margin-bottom: 18px;
`;
const DateBrowser = styled.div`
  display: flex;
  flex-direction: row;
  gap: 17px;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  flex-wrap: wrap;
  margin-bottom: 61px;
`;
const DateContainer = styled.div`
  width: 131px;
  height: 37px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.selected ? '#FFD37D' : '#E0E0E0')};
  border-radius: 4px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  font-size: 14px;
  color: black;
  line-height: 16.41px;
  cursor: pointer;
`;
