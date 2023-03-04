import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ticketsType } from '../../assets/constants/tickets.js';
import BoxChoice from './BoxChoice.js';
import useTicket from '../../hooks/api/useTicket';

export default function ChosenTicket() {
  /*const { ticket } = useTicket();

  const [ticketPrice, setTicketPrice] = useState(0);
  const [ticketType, setTicketType] = useState('');

  const [ticketId, setTicketId] = useState(0);

  useEffect(() => {
    if(ticket) {
      setTicketId(2);
      setTicketPrice(ticket.TicketPrice.price);

      if (ticket.TicketType.isRemote === true) {
        setTicketType('Online');
      } else if (ticket.TicketType.isRemote === false && ticket.TicketType.includesHotel === true) {
        setTicketType('Presencial + Hotel');
        setTicketPrice(ticket.TicketType.price);
      } else {
        setTicketType('Presencial');
      }
    }
  }, []);*/

  return (
    <>
      <Container>
        <PageSubTitle>Ingresso escolhido</PageSubTitle>
        <TicketSummaryBox>
          <TicketType>
            assa
          </TicketType>
          <TicketPrice>
            sas
          </TicketPrice>
        </TicketSummaryBox>
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
  margin-top: 17px
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
