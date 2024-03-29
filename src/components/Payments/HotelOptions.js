import styled from 'styled-components';
import { hotelChoice } from '../../assets/constants/tickets.js';
import BoxChoice from './BoxChoice.js';
import { softYellow, white } from '../../assets/constants/colors.js';
import { useState } from 'react';
import OrderSummary from './OrderSummary.js';
import { useEffect } from 'react';
import { postTicket } from '../../services/ticketApi.js';

export default function HotelOptions({ setIncludesHotel, token, ticketTypes }) {
  const [selectedBox, setSelectedBox] = useState([]);
  const [total, setTotal] = useState(0);
  const [showOrderSummary, setShowOrderSummary] = useState(false);
  const [choosenTicket, setChoosenTicket] = useState();

  function backgroundColorHandler(choice) {
    let newSelectedBox = [];
    if (!selectedBox.includes(choice.id)) {
      newSelectedBox = [choice.id];
    }
    setSelectedBox(newSelectedBox);
    setChoosenTicket(choice);
    totalHandler(choice);
  }

  function totalHandler(choice) {
    setTotal(`R$ ${250 + Number(choice.price.replace(/[^0-9]/g, ''))}`);
  }

  function createTicket(choosenTicket) {
    const ticketTypeUsed = ticketTypes.filter(
      (ticket) => Number(ticket.price) === Number(choosenTicket.price.replace(/[^0-9]/g, '')) + 250
    );
    const body = {
      ticketTypeId: ticketTypeUsed[0].id,
    };
    postTicket(body, token).then(() => {
      setIncludesHotel(true);
      setShowOrderSummary(false);
    });
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
        <PageSubTitle>Ótimo! Agora escolha sua modalidade de hospedagem</PageSubTitle>
        <div>
          {hotelChoice.map((choice) => {
            return selectedBox.includes(choice.id) ? (
              <BoxChoice
                key={choice.id}
                background={softYellow}
                name={choice.name}
                price={choice.price}
                onClick={() => backgroundColorHandler(choice)}
              />
            ) : (
              <BoxChoice
                key={choice.id}
                background={white}
                name={choice.name}
                price={choice.price}
                onClick={() => backgroundColorHandler(choice)}
              />
            );
          })}
        </div>
        {showOrderSummary ? <OrderSummary total={total} onClick={() => createTicket(choosenTicket)} /> : null}
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
