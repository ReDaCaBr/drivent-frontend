import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

export default function Hotels() {
  return (
    <>
      <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
      Em breve!
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
