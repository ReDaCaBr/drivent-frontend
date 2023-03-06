import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import useEnrollment from '../../hooks/api/useEnrollment';
import { useEffect, useState } from 'react';
import TicketsAvailable from '../Payments/TicketsAvailable.js';
import HotelOptions from '../Payments/HotelOptions';
import OrderSummary from '../Payments/OrderSummary';
import ChosenTicket from '../Payments/ChosenTicket';
import PaymentConfirmed from '../Payments/PaymentConfirmed';
import CreditCardSection from '../Payments/creditCard';

export default function TicketAndPayment() {
  const [renderization, setRenderization] = useState(<></>);
  const { enrollment } = useEnrollment();
  const [isRemote, setIsRemote] = useState(true);
  const [includesHotel, setIncludesHotel] = useState(true);
  const [total, setTotal] = useState(0);
  const [paymentFinished, setPaymentFinished] = useState(false);

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
      <TicketsAvailable />
      <OrderSummary total={total} />
    </>
  );

  const noIncludesHotelChoiceRenderization = (
    <>
      <StyledTypography variant="h4">Ingresso e Pagamento</StyledTypography>
      <TicketsAvailable />
      <HotelOptions />
    </>
  );

  const paymentRenderization = (
    <>
      <StyledTypography variant="h4">Ingresso e Pagamento</StyledTypography>
      <ChosenTicket paymentFinished={paymentFinished} setPaymentFinished={setPaymentFinished}/>
    </>
  );

  useEffect(() => {
    renderizationHandler(enrollment);
  }, [enrollment]);

  function renderizationHandler(enrollment) {
    if (!enrollment) {
      setRenderization(noEnrollmentRenderization);
    } else if (!isRemote) {
      setRenderization(noIsRemoteChoiceRenderization);
    } else if (!includesHotel) {
      setRenderization(noIncludesHotelChoiceRenderization);
    } else {
      setRenderization(paymentRenderization);
    }
  }

  return renderization;
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
