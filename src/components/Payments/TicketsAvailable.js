import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { softYellow, white } from '../../assets/constants/colors.js';
import { ticketsType } from '../../assets/constants/tickets.js';
import OrderSummary from './OrderSummary.js';
import BoxChoice from './BoxChoice.js';

export default function TicketsAvailable({ setIsRemote }) {
  const [selectedBox, setSelectedBox] = useState([]);
  const [total, setTotal] = useState(0);
  const [showOrderSummary, setShowOrderSummary] = useState(false);

  function backgroundColorHandler(ticket) {
    let newSelectedBox = [];
    if (!selectedBox.includes(ticket.id)) {
      newSelectedBox = [ticket.id];
    }
    setSelectedBox(newSelectedBox);
    totalHandler(ticket);
  }

  function totalHandler(choice) {
    setTotal(choice.price);
  }

  function confirmationHandler() {
    setIsRemote(true);
    setShowOrderSummary(false);
  }
  useEffect(() => {
    if (selectedBox.length !== 0) {
      setShowOrderSummary(true);
    } else {
      setShowOrderSummary(false);
    }
  }, [selectedBox]);

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
                onClick={() => backgroundColorHandler(ticket)}
              />
            ) : (
              <BoxChoice
                key={ticket.id}
                background={white}
                name={ticket.name}
                price={ticket.price}
                onClick={() => backgroundColorHandler(ticket)}
              />
            );
          })}
        </div>
        {showOrderSummary ? <OrderSummary total={total} onClick={() => confirmationHandler()} /> : null}
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
