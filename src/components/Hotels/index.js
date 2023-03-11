import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Rooms from '../Rooms';
import useRooms from '../../hooks/api/useRooms';
import useBooking from '../../hooks/api/useBooking';

export default function Hotels() {
  const { rooms } = useRooms(); //16 rooms
  const { getBooking } = useBooking();
  const [reload, setReload] = useState(0);
  const [booking, setBooking] = useState({});
  const [isChangeRoom, setIsChangeRoom] = useState(false);

  useEffect(() => {
    const promisse = getBooking();
    promisse.then((p) => {
      if (p) setBooking(p);
    });
  }, [reload]);
  //TODO mudar hotelId
  return (
    <>
      <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
      <Rooms
        listOfRooms={rooms}
        hotelId={1}
        bookingId={booking?.id}
        reload={reload}
        setReload={setReload}
        isChangeRoom={isChangeRoom}
        setIsChangeRoom={setIsChangeRoom}
      />
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
