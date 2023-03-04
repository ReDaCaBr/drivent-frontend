import styled from 'styled-components';
import Button from '../Form/Button';

export default function OrderSummary({ total }) {
  async function handleButton() {}
  return (
    <OrderStyled>
      Fechado! O total ficou em <span>R$ {total}</span>. Agora é só confirmar:
      <div>
        <Button onClick={() => handleButton()}>RESERVAR INGRESSO</Button>
      </div>
    </OrderStyled>
  );
}

export const OrderStyled = styled.div`
  color: #8e8e8e;
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 17px;
  margin-top: 17px;

  & :first-child span {
    font-weight: 700;
  }
  div: {
    display: flex;
  }
`;