import { useState } from 'react';
import styled from 'styled-components';
import BoxChoice from './BoxChoice.js';
import { IoCheckmarkCircleSharp } from 'react-icons/io5';

export default function PaymentConfirmed() {
  return (
    <>
      <Container>
        <PageSubTitle>Pagamento</PageSubTitle>
        <Text>
          <Icon />
          <AlignText>
            <Title>Pagamento confirmado!</Title>
            <Subtitle>Prossiga para escolha de hospedagem e atividades</Subtitle>
          </AlignText>
        </Text>
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

const Text = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 19px;
`;

const Icon = styled(IoCheckmarkCircleSharp)`
    font-size: 40.33px;
    color: #36B853;
    margin-right: 14px;
`;

const AlignText = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h6`
  color: #454545;
  font-size: 16px;
  font-weight: 700;
  line-height: 18.75px;
`;

const Subtitle = styled.h6`
  color: #454545;
  font-size: 16px;
  font-weight: 300;
  line-height: 18.75px;
`;
