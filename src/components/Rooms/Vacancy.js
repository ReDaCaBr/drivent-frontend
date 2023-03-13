import { useState, useEffect } from 'react';
import { VacancyFree, VacancySelected } from './Icons';

export default function Vacancy({
  setBackground,
  roomId,
  handleClick,
  selectedId,
  numberOfFree,
  hotelId,
  statusVacancy,
  setStatusVacancy,
}) {
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    if (selectedId !== 0 && selectedId !== roomId) {
      setIsSelected(false);
      setBackground('white');
    }
  }, [selectedId]);

  useEffect(() => {
    if (statusVacancy !== 0 && statusVacancy !== numberOfFree) {
      setIsSelected(false);
    }
  }, [statusVacancy]);

  useEffect(() => {
    setBackground('white');
    setStatusVacancy(0);
    setIsSelected(false);
  }, [hotelId]);
  return (
    <div
      onClick={() => {
        if (!isSelected) {
          handleClick(roomId);
          setIsSelected(true);
          setBackground('#FFEED2');
          setStatusVacancy(numberOfFree);
        } else {
          setIsSelected(false);
          setBackground('white');
          handleClick(0);
          setStatusVacancy(0);
        }
      }}
    >
      {isSelected ? <VacancySelected /> : <VacancyFree />}
    </div>
  );
}
