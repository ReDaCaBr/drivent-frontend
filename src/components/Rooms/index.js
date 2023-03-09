import Room from './Room';
import styled from 'styled-components';

export default function Rooms() {
  return (
    <>
      <PageSubTitle variant="caption">Ótima pedida! Agora escolha seu quarto:</PageSubTitle>
      <RoomsContainer>
        <Room />
      </RoomsContainer>
    </>
  );
}

export const PageSubTitle = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  line-height: 23px;
  color: #8e8e8e;
  margin-bottom: 15px;
`;

const RoomsContainer = styled.div`
  width: 100%;
  height: 212px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
