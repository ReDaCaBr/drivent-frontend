import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useTicket from '../../hooks/api/useTicket';
import CreditCardSection from './CreditCard.js';
import PaymentConfirmed from './PaymentConfirmed.js';

export default function ChosenTicket() {
  const { ticket } = useTicket();
  const [ticketPrice, setTicketPrice] = useState(0);
  const [ticketType, setTicketType] = useState('');
  const [paymentFinished, setPaymentFinished] = useState(false);
  const [ticketId, setTicketId] = useState(0);
  const [body, setBody] = useState({});

  useEffect(() => {
    if (ticket) {
      setTicketId(ticket.id);
      setTicketPrice(ticket.TicketType.price);
      
      if (ticket.TicketType.isRemote === true) {
        setTicketType(ticket.TicketType.name);
      } else if (ticket.TicketType.isRemote === false && ticket.TicketType.includesHotel === true) {
        setTicketType(ticket.TicketType.name);
        setTicketPrice(ticket.TicketType.price);
      } else {
        setTicketType(ticket.TicketType.name);
      }

      if (ticket.TicketType.status === 'PAID') {
        setPaymentFinished(true);
      } else {
        setPaymentFinished(false);
      } 
    }
  }, [ticket, ticketPrice]);

  return (
    <>
      <Container>
        <PageSubTitle>Ingresso escolhido</PageSubTitle>
        <TicketSummaryBox>
          <TicketType>{ticketPrice}</TicketType>
          <TicketPrice>{ticketType}</TicketPrice>
        </TicketSummaryBox>
        {paymentFinished === false ? (
          <CreditCardSection setPaymentFinished={setPaymentFinished} ticketId={ticketId} setBody={setBody} />
        ) : (
          <PaymentConfirmed body={body} />
        )}
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
`;

const TicketSummaryBox = styled.div`
  width: 290px;
  height: 108px;
  border-radius: 20px;
  background-color: #ffeed2;
  border: 1px solid #ffeed2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  margin-top: 17px;
`;

const TicketType = styled.span`
  font-size: 16px;
  color: #454545;
  line-height: 18.75px;
  font-weight: 400;
  margin-bottom: 8px;
`;

const TicketPrice = styled.span`
  font-size: 14px;
  color: #898989;
  line-height: 16.41px;
  font-weight: 400;
`;
