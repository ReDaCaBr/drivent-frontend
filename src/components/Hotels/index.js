import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Rooms from '../Rooms';
import useRooms from '../../hooks/api/useRooms';

export default function Hotels() {
  const { rooms } = useRooms();
  console.log(rooms);

  return (
    <>
      <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
      <Rooms />
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
