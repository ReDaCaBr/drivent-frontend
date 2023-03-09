import { BsPerson, BsPersonFill } from 'react-icons/bs';
import styled from 'styled-components';

const VacancyOccupied = styled(BsPerson)`
  color: #000;
  font-size: 21px;
`;
const VacancySelected = styled(BsPersonFill)`
  font-size: 21px;
  color: #ff4791;
  cursor: pointer;
`;
const VacancyFree = styled(BsPersonFill)`
  color: #000;
  font-size: 21px;
  cursor: pointer;
`;

export { VacancyOccupied, VacancyFree, VacancySelected };
