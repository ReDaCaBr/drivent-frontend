import styled from 'styled-components';
import Button from '../Form/Button';

export default function OrderSummary(props) {
  return (
    <OrderStyled>
      <Box>
        <div>
          Fechado! O total ficou em <span>R$ {props.total}</span>. Agora é só confirmar:
        </div>
        <div>
          <Button onClick={props.onClick}>RESERVAR INGRESSO</Button>
        </div>
      </Box>
    </OrderStyled>
  );
}

export const OrderStyled = styled.div`
  color: #8e8e8e;
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 17px;
  margin-top: 17px;
  display: flex;

  & :first-child span {
    font-weight: 700;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
`;
