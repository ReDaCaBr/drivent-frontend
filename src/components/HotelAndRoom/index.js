import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import useTicket from '../../hooks/api/useTicket';
import { useEffect, useState } from 'react';
import ChooseHotel from '../Hotels/ChooseHotel';
import useHotels from '../../hooks/api/useHotels';
import BookedHotel from '../Hotels/bookedHotel';

export default function HotelAndRoom() {
  const { ticket } = useTicket();

  const [selectedHotel, setSelectedHotel] = useState(0);
  const [hotels, setHotels] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [finalizedChoices, setFinalizedChoices] = useState(false);
  const type = ticket?.TicketType;
  const { getHotels } = useHotels();

  const handleSelectHotel = (hotel) => {
    if (hotel.id === selectedHotel) {
      setSelectedHotel(0);
      setRooms([]);
    } else {
      setSelectedHotel(hotel.id);
      setRooms(hotel.rooms);
    }
  };

  const noTicketPaidRenderization = (
    <>
      <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
      <NoEnrollmentBox>
        <NoEnrollmentText>
          Você precisa ter confirmado pagamento antes de fazer a escolha de hospedagem
        </NoEnrollmentText>
      </NoEnrollmentBox>
    </>
  );

  const isRemoteRenderization = (
    <>
      <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
      <NoEnrollmentBox>
        <NoEnrollmentText>
          Sua modalidade de ingresso não inclui hospedagem. Prossiga para a escolha de atividades
        </NoEnrollmentText>
      </NoEnrollmentBox>
    </>
  );

  const hotelsRenderization = (
    <>
      <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
      <ChooseHotel hotels={hotels} selectedHotel={selectedHotel} handleSelectHotel={handleSelectHotel} />
    </>
  );

  const bookingRenderization = (
    <>
      <BookedHotel/>
    </>
  );

  // eslint-disable-next-line space-before-function-paren
  useEffect(async () => {
    const data = await getHotels();
    setHotels(data);
    renderizationHandler();
  }, [ticket]);

  function renderizationHandler() {
    if (!ticket) {
      return noTicketPaidRenderization;
    }
    if (ticket?.status !== 'PAID') {
      return noTicketPaidRenderization;
    }

    if (type.isRemote) {
      return isRemoteRenderization;
    }

    return hotelsRenderization;
  }

  // return hotels && renderizationHandler();
  return bookingRenderization;
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
const NoEnrollmentBox = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif;
`;
const NoEnrollmentText = styled.span`
  width: 388px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
`;
const HotelBox = styled.div`
  font-family: 'Roboto', sans-serif;
`;
const HotelText = styled.span`
  width: 240px;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  text-align: start;
  color: #8e8e8e;
`;
