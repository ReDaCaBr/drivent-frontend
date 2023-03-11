import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import useTicket from '../../hooks/api/useTicket';
import { useEffect, useState } from 'react';
import ChooseHotel from '../Hotels/ChooseHotel';
import useHotels from '../../hooks/api/useHotels';

export default function HotelAndRoom() {
  const { ticket } = useTicket();
  console.log(ticket?.status);

  const [selectedHotel, setSelectedHotel] = useState(0);
  const [hotels, setHotels ] = useState([]);
  const [rooms, setRooms] = useState([]);

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

  useEffect(async() => {
    const data = await getHotels();
    setHotels(data);
  }, []);

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
      <ChooseHotel 
        hotels={hotels}
        selectedHotel={selectedHotel}
        handleSelectHotel={handleSelectHotel}/>
    </>
  );

  useEffect(() => {
    renderizationHandler();
  }, [ticket]);

  function renderizationHandler() {
    /*if (ticket?.status !== 'PAID') {
      return noTicketPaidRenderization;
    }

    if (ticket?.ticketType.isRemote) {
      return isRemoteRenderization;
    }
    // } else if (!includesHotel) {
    //   setRenderization(noIncludesHotelChoiceRenderization);
    // } */

    if (ticket?.status === 'PAID') {
      return hotelsRenderization;
    }
  }

  return ticket && renderizationHandler();
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
  color: #8E8E8E;
`;
