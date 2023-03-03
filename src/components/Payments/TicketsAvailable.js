import styled from 'styled-components';
import { BoxStyled, BoxNameStyled, BoxPriceStyled } from './BoxStyled.js';

export default function TicketsAvailable() {
  return (
    <>
      <PageSubTitle>Primeiro, escolha sua modalidade de ingresso</PageSubTitle>
      <div>
        <BoxStyled>
          <BoxNameStyled>Presencial</BoxNameStyled>
          <BoxPriceStyled>R$ 250</BoxPriceStyled>
        </BoxStyled>
        <BoxStyled>
          <BoxNameStyled>Online</BoxNameStyled>
          <BoxPriceStyled>R$ 100</BoxPriceStyled>
        </BoxStyled>
      </div>
    </>
  );
}

export const PageSubTitle = styled.div`
  font-size: 20px;
  line-height: 23px;
  color: #8e8e8e;
  margin-bottom: 10px;
`;
