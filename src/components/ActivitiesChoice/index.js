import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import useTicket from '../../hooks/api/useTicket';
import { useEffect } from 'react';
import ChooseDate from '../Activities/ChooseDate';

export default function ActivitiesChoice() {
  const { ticket } = useTicket();
  const type = ticket?.TicketType;

  const noTicketPaidRenderization = (
    <>
      <StyledTypography variant="h4">Escolha de atividades</StyledTypography>
      <NoEnrollmentBox>
        <NoEnrollmentText>
          Você precisa ter confirmado pagamento antes de fazer a escolha de atividades
        </NoEnrollmentText>
      </NoEnrollmentBox>
    </>
  );

  const isRemoteRenderization = (
    <>
      <StyledTypography variant="h4">Escolha de atividades</StyledTypography>
      <NoEnrollmentBox>
        <NoEnrollmentText>
          Sua modalidade de ingresso não necessita escolher atividade. Você terá acesso a todas as atividades.
        </NoEnrollmentText>
      </NoEnrollmentBox>
    </>
  );

  const activitiesRenderization = (
    <>
      <StyledTypography variant="h4">Escolha de atividades</StyledTypography>
      <ChooseDate />
    </>
  );

  // eslint-disable-next-line space-before-function-paren
  useEffect(async () => {
    renderizationHandler();
  }, [ticket]);

  function renderizationHandler() {
    if (!ticket) {
      return noTicketPaidRenderization;
    }
    if (ticket?.status !== 'PAID') {
      return noTicketPaidRenderization;
    }

    if (type?.isRemote) {
      return isRemoteRenderization;
    }

    return activitiesRenderization;
  }

  return renderizationHandler();
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
