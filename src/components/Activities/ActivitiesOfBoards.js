import styled from 'styled-components';
import useLocals from '../../hooks/api/useLocals';
import { useState, useEffect } from 'react';
import ActivityLocals from './ActivityLocals';

export default function ActivitiesOfBoards({ selectedDate }) {
  const [locals, setLocals] = useState([]);
  const { getLocals } = useLocals();

  function formatDateContent(date) {
    const dateArray = date.split(', ');
    return dateArray[1].replaceAll('/', '-');
  }

  const date = formatDateContent(selectedDate);
  // eslint-disable-next-line space-before-function-paren
  useEffect(async () => {
    const response = await getLocals(date);
    setLocals(response);
  }, [selectedDate]);

  return (
    <StyledActivitiesLocals>{locals.length > 0 ? <ActivityLocals locals={locals} /> : <></>}</StyledActivitiesLocals>
  );
}

const StyledActivitiesLocals = styled.div`
  display: flex;
`;
