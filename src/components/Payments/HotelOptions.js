import styled from 'styled-components';
import { hotelChoice } from '../../assets/constants/tickets.js';
import BoxChoice from './BoxChoice.js';
import { softYellow, white } from '../../assets/constants/colors.js';
import { useState } from 'react';

export default function HotelOptions() {
  const [selectedBox, setSelectedBox] = useState([]);

  function backgroundColorHandler(choiceId) {
    let newSelectedBox = [];
    if (!selectedBox.includes(choiceId)) {
      newSelectedBox = [choiceId];
    }
    setSelectedBox(newSelectedBox);
  }

  return (
    <>
      <Container>
        <PageSubTitle>Ótimo! Agora escolha sua modalidade de hospedagem</PageSubTitle>
        <div>
          {hotelChoice.map((choice) => {
            return selectedBox.includes(choice.id) ? (
              <BoxChoice
                key={choice.id}
                background={softYellow}
                name={choice.name}
                price={choice.price}
                onClick={() => backgroundColorHandler(choice.id)}
              />
            ) : (
              <BoxChoice
                key={choice.id}
                background={white}
                name={choice.name}
                price={choice.price}
                onClick={() => backgroundColorHandler(choice.id)}
              />
            );
          })}
        </div>
      </Container>
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

export const Container = styled.div`
  margin-top: 44px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  div {
    display: flex;
  }
`;
