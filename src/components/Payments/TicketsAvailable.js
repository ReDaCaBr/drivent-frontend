import { useState } from 'react';
import styled from 'styled-components';
import { softYellow, white } from '../../assets/constants/colors.js';
import { ticketsType } from '../../assets/constants/tickets.js';
import BoxChoice from './BoxChoice.js';

export default function TicketsAvailable() {
  const [selectedBox, setSelectedBox] = useState([]);

  function backgroundColorHandler(ticketId) {
    let newSelectedBox = [];
    if (!selectedBox.includes(ticketId)) {
      newSelectedBox = [ticketId];
    }
    setSelectedBox(newSelectedBox);
  }

  return (
    <>
      <Container>
        <PageSubTitle>Primeiro, escolha sua modalidade de ingresso</PageSubTitle>
        <div>
          {ticketsType.map((ticket) => {
            return selectedBox.includes(ticket.id) ? (
              <BoxChoice
                key={ticket.id}
                background={softYellow}
                name={ticket.name}
                price={ticket.price}
                onClick={() => backgroundColorHandler(ticket.id)}
              />
            ) : (
              <BoxChoice
                key={ticket.id}
                background={white}
                name={ticket.name}
                price={ticket.price}
                onClick={() => backgroundColorHandler(ticket.id)}
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
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  div {
    display: flex;
  }
`;
