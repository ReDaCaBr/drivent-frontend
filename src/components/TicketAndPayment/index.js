import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import useEnrollment from '../../hooks/api/useEnrollment';
import { useContext, useEffect, useState } from 'react';
import TicketsAvailable from '../Payments/TicketsAvailable.js';
import HotelOptions from '../Payments/HotelOptions';
import ChosenTicket from '../Payments/ChosenTicket';
import useTicketTypes from '../../hooks/api/useTicketTypes';
import UserContext from '../../contexts/UserContext';
import useTicket from '../../hooks/api/useTicket';

export default function TicketAndPayment() {
  const [renderization, setRenderization] = useState(<></>);
  const { enrollment } = useEnrollment();
  const [isRemote, setIsRemote] = useState(false);
  const [includesHotel, setIncludesHotel] = useState(false);
  const { ticketTypes } = useTicketTypes();
  const { userData } = useContext(UserContext);
  const token = userData.token.toString();
  const { ticket } = useTicket();

  const noEnrollmentRenderization = (
    <>
      <StyledTypography variant="h4">Ingresso e Pagamento</StyledTypography>
      <NoEnrollmentBox>
        <NoEnrollmentText>
          Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso
        </NoEnrollmentText>
      </NoEnrollmentBox>
    </>
  );

  const noIsRemoteChoiceRenderization = (
    <>
      <StyledTypography variant="h4">Ingresso e Pagamento</StyledTypography>
      <TicketsAvailable
        setIsRemote={setIsRemote}
        setIncludesHotel={setIncludesHotel}
        token={token}
        ticketTypes={ticketTypes}
      />
    </>
  );

  const noIncludesHotelChoiceRenderization = (
    <>
      <StyledTypography variant="h4">Ingresso e Pagamento</StyledTypography>
      <TicketsAvailable
        setIsRemote={setIsRemote}
        setIncludesHotel={setIncludesHotel}
        token={token}
        ticketTypes={ticketTypes}
      />
      <HotelOptions setIncludesHotel={setIncludesHotel} token={token} ticketTypes={ticketTypes} />
    </>
  );

  const paymentRenderization = (
    <>
      <StyledTypography variant="h4">Ingresso e Pagamento</StyledTypography>
      <ChosenTicket />
    </>
  );

  useEffect(() => {
    renderizationHandler(enrollment);
  }, [enrollment, isRemote, includesHotel, ticketTypes, ticket]);

  function renderizationHandler(enrollment) {
    if (!enrollment) {
      setRenderization(noEnrollmentRenderization);
    } else if (!isRemote && !ticket) {
      setRenderization(noIsRemoteChoiceRenderization);
    } else if (!includesHotel && !ticket) {
      setRenderization(noIncludesHotelChoiceRenderization);
    } else {
      setRenderization(paymentRenderization);
    }
  }

  return ticketTypes && renderization;
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
  color: #8e8e8e;
`;
