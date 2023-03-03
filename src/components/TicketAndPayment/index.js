import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import useEnrollment from '../../hooks/api/useEnrollment';
// import { useEffect, useState } from 'react';
import TicketsAvailable from '../Payments/TicketsAvailable';

export default function TicketAndPayment() {
  // const [renderization, setRenderization] = useState(<></>);
  const { enrollment } = useEnrollment();
  // const [isRemote, setIsRemote] = useState(false);
  // const [includesHotel, setIncludesHotel] = useState(false);

  // const noEnrollmentRenderization = (
  //   <>
  //     <StyledTypography variant="h4">Ingresso e Pagamento</StyledTypography>
  //     <NoEnrollmentBox>
  //       <NoEnrollmentText>
  //         Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso
  //       </NoEnrollmentText>
  //     </NoEnrollmentBox>
  //   </>
  // );

  // const noIsRemoteChoiceRenderization = (
  //   <>
  //     <StyledTypography variant="h4">Ingresso e Pagamento</StyledTypography>
  //     <span>Yes it is working :p</span>
  //   </>
  // );

  // const noIncludesHotelChoiceRenderization = (
  //   <>
  //     <StyledTypography variant="h4">Ingresso e Pagamento</StyledTypography>
  //     <span>hotel</span>
  //   </>
  // );

  // const paymentRenderization = (
  //   <>
  //     <StyledTypography variant="h4">Ingresso e Pagamento</StyledTypography>
  //     <span>pagamentos</span>
  //   </>
  // );

  // useEffect(() => {
  //   renderizationHandler(enrollment);
  // }, [enrollment]);

  // function renderizationHandler(enrollment) {
  //   if (!enrollment) {
  //     setRenderization(noEnrollmentRenderization);
  //   } else if (!isRemote) {
  //     setRenderization(noIsRemoteChoiceRenderization);
  //   } else if (!includesHotel) {
  //     setRenderization(noIncludesHotelChoiceRenderization);
  //   } else {
  //     setRenderization(paymentRenderization);
  //   }
  // }

  return (
    <Container>
      <PageTitle>Ingresso e pagamento</PageTitle>
      {enrollment ? (
        <TicketsAvailable />
      ) : (
        <NoEnrollmentBox>
          <NoEnrollmentText>
            Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso
          </NoEnrollmentText>
        </NoEnrollmentBox>
      )}
    </Container>
  );
}

export const Container = styled.div`
  font-family: 'Arial';
  font-style: normal;
  font-weight: 400;
  div {
    display: flex;
  }
`;

export const PageTitle = styled.div`
  font-size: 34px;
  line-height: 40px;
  margin-bottom: 30px;
`;

// const StyledTypography = styled(Typography)`
//   margin-bottom: 20px !important;
// `;

const NoEnrollmentBox = styled.div`
  width: 388px;
  height: 46px;
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
  align-items: center;
  color: #8e8e8e;
`;
