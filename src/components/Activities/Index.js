import ChooseDate from './ChooseDate';
import useActivitiesDates from '../../hooks/api/useActivitiesDates';
import { useState } from 'react';
import ActivitiesOfBoards from './ActivitiesOfBoards';

export default function Activities() {
  const [selectedDate, setSelectedDate] = useState('');
  const { activitiesDates } = useActivitiesDates();
  const dates = [...new Set(activitiesDates)];

  return (
    <>
      <ChooseDate dates={dates} selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      {selectedDate === '' ? <></> : <ActivitiesOfBoards selectedDate={selectedDate} />}
    </>
  );
}
