import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import useEnrollment from '../../hooks/api/useEnrollment';
import { useEffect, useState } from 'react';
import { IoCheckmarkCircleSharp } from 'react-icons/io5';

export default function TicketAndPayment() {
  const [renderization, setRenderization] = useState(<></>);
  const { enrollment } = useEnrollment();
  const [isRemote, setIsRemote] = useState(false);
  const [includesHotel, setIncludesHotel] = useState(false);
  const [summary, setSummary] = useState(false);

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
      <span>Yes it is working :p</span>
    </>
  );

  const noIncludesHotelChoiceRenderization = (
    <>
      <StyledTypography variant="h4">Ingresso e Pagamento</StyledTypography>
      <span>hotel</span>
    </>
  );

  const paymentRenderization = (
    <>
      <StyledTypography variant="h4">Ingresso e Pagamento</StyledTypography>
      <ChoiceTicketBox>
        <ChoiceTicketText>
          Ingresso escolhido
        </ChoiceTicketText>
      </ChoiceTicketBox>
      <TicketSummaryBox>
        <TicketType>
          Tipo de ticket
        </TicketType>
        <TicketPrice>
          Valor do ticket
        </TicketPrice>
      </TicketSummaryBox>
    </>
  );

  const paymentConfirm = (
    <>
      <StyledTypography variant="h4">Ingresso e Pagamento</StyledTypography>
      <PaymentBox>
        <PaymentText>
          Pagamento
        </PaymentText>
      </PaymentBox>
      <Container>
        <Icon />
        <AlignText>
          <Title>Pagamento confirmado!</Title>
          <Subtitle>Prossiga para escolha de hospedagem e atividades</Subtitle>
        </AlignText>
      </Container>
    </>
  );

  useEffect(() => {
    renderizationHandler(enrollment);
  }, [enrollment]);

  function renderizationHandler(enrollment) {
    if (enrollment) {
      setRenderization(noEnrollmentRenderization);
    } else if (isRemote) {
      setRenderization(noIsRemoteChoiceRenderization);
    } else if (includesHotel) {
      setRenderization(noIncludesHotelChoiceRenderization);
    } else if (summary) {
      setRenderization(paymentRenderization);
    } else {
      setRenderization(paymentConfirm);
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

const ChoiceTicketBox = styled.div`
  width: 388px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  text-align: start;
  color: #8e8e8e;
`;

const ChoiceTicketText = styled.span`
  width: 388px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  color: #8e8e8e;
`;

const TicketSummaryBox = styled.div`
  width: 290px;
  height: 108px;
  border-radius: 20px;
  background-color: #ffeed2;
  border: 1px solid #ffeed2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  margin-top: 17px
`;

const TicketType = styled.span`
  font-size: 16px;
  color: #454545;
  line-height: 18.75px;
  font-weight: 400;
  margin-bottom: 8px;
`;

const TicketPrice = styled.span`
  font-size: 14px;
  color: #898989;
  line-height: 16.41px;
  font-weight: 400;
`;

const PaymentBox = styled.div`
  width: 388px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  text-align: start;
  color: #8e8e8e;
`;

const PaymentText = styled.span`
  width: 388px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  color: #8e8e8e;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 19px;
`;

const Icon = styled(IoCheckmarkCircleSharp)`
    font-size: 40.33px;
    color: #36B853;
    margin-right: 14px;
`;

const AlignText = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h6`
  color: #454545;
  font-size: 16px;
  font-weight: 700;
  line-height: 18.75px;
`;

const Subtitle = styled.h6`
  color: #454545;
  font-size: 16px;
  font-weight: 300;
  line-height: 18.75px;
`;
