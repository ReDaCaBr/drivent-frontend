import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import Button from '../Form/Button';
import cardIssuers from '../../assets/constants/cardIssuers';
import axios from 'axios';

export default function CreditCardSection({ setPaymentFinished, ticketId }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCVC] = useState('');
  const [focused, setFocused] = useState('');
  const [validName, setValidName] = useState(true);
  const [validNumber, setValidNumber] = useState(true);
  const [validExpiry, setValidExpiry] = useState(true);
  const [validCVC, setValidCVC] = useState(true);
  const [validForm, setValidForm] = useState(false);

  function handleNumberAndExpiry(e, step, separator, setState) {
    const newNumber = e.target.value;

    let numeric = '';

    const regex = new RegExp('[0-9]');

    for (const character of newNumber) {
      if (regex.test(character) === true) {
        numeric += character;
      }
    }

    const pieces = [];

    for (let i = 0; i < numeric.length; i += step) {
      pieces.push(numeric.slice(i, i + step));
    }

    const formatted = pieces.join(separator);
    setState(formatted);
  }

  function handleCVC(e) {
    const newNumber = e.target.value;

    let numeric = '';

    const regex = new RegExp('[0-9]');

    for (const character of newNumber) {
      if (regex.test(character) === true) {
        numeric += character;
      }
    }

    setCVC(numeric);
  }

  function toggleStates(setState) {
    setState(false);
    setValidForm(false);
  }

  function validateForm() {
    setValidName(true);
    setValidNumber(true);
    setValidExpiry(true);
    setValidCVC(true);
    setValidForm(true);

    if(name === '') {
      toggleStates(setValidName);
    }

    if (number.length !== 19) {
      toggleStates(setValidNumber);
    }

    const regex = new RegExp('^((0[1-9])|(1[0-2]))/[0-9]{2}$');

    const date = new Date();
    const year = date.getFullYear().toString().slice(2);
    const month = date.getMonth() + 1;

    const [insertedMonth, insertedYear] = expiry.split('/');

    const expiryInvalidConditions = [
      regex.test(expiry) === false,
      Number(insertedYear) < Number(year),
      Number(insertedMonth) < month,
      Number(insertedYear) === Number(year)
    ];

    if (expiryInvalidConditions[0] || expiryInvalidConditions[1] || (expiryInvalidConditions[2] && expiryInvalidConditions[3])) {
      toggleStates(setValidExpiry);
    }

    const cvcInvalidConditions = [
      cvc.length < 3,
      cvc.length === 4,
      cardIssuers[number.slice(0, 2)] !== 'American Express'
    ];

    if (cvcInvalidConditions[0] || (cvcInvalidConditions[1] && cvcInvalidConditions[2])) {
      toggleStates(setValidCVC);
    }
  }

  function submitPayment() {
    if (validForm === false) return;

    setPaymentFinished(true);

    const body = {
      ticketId,
      cardData: {
        issuer: cardIssuers[number.slice(0, 2)],
        number: number.split(' ').join(''),
        name,
        expirationDate: expiry,
        cvv: cvc
      }
    };

    axios.post(process.env.REACT_APP_API_BASE_URL + '/process', body);
  }

  useEffect(submitPayment, [validForm]);

  return (
    <>
      <SectionNameStyles>Pagamento</SectionNameStyles>
      <CCandFormContainerStyles>
        <Card
          number={number}
          name={name}
          expiry={expiry}
          cvc={cvc}
          focused={focused}
        />
        <Form
          validName={validName}
          validNumber={validNumber}
          validExpiry={validExpiry}
          validCVC={validCVC}
        >
          <input
            type='text'
            name='number'
            placeholder='Card Number'
            maxLength='19'
            required
            value={number}
            onChange={(e) => handleNumberAndExpiry(e, 4, ' ', setNumber)}
            onFocus={() => setFocused('number')}
          />
          <label htmlFor='number'>E.g.: 49..., 51..., 36..., 37...</label>
          <input
            type='text'
            name='name'
            placeholder='Name'
            maxLength='18'
            required
            value={name}
            onChange={(e) => setName(e.target.value.toUpperCase())}
            onFocus={() => setFocused('name')}
          />
          <div>
            <input
              type='text'
              name='expiry'
              placeholder='Valid Thru'
              maxLength='5'
              required
              value={expiry}
              onChange={(e) => handleNumberAndExpiry(e, 2, '/', setExpiry)}
              onFocus={() => setFocused('expiry')}
            />
            <input
              type='text'
              name='cvc'
              placeholder='CVC'
              maxLength='4'
              required
              value={cvc}
              onChange={handleCVC}
              onFocus={() => setFocused('cvc')}
            />
          </div>
        </Form>
      </CCandFormContainerStyles>
      <Button onClick={validateForm}>FINALIZAR PAGAMENTO</Button>
    </>
  );
}

const SectionNameStyles = styled.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  color: #8e8e8e;
`;

const CCandFormContainerStyles = styled.section`
  margin-top: 20px;
  margin-bottom: 60px;
  display: flex;
  column-gap: 30px;

  & > div {
    margin: 0;
  }
`;

function toggleBorder(validEntry) {
  return validEntry ? '#C9C9C9' : 'red';
}

const Form = styled.form`
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 315px;
  display: flex;
  flex-direction: column;

  input {
    padding-left: 7px;
    height: 45px;
    border: 1px solid;
    border-radius: 5px;
    font-size: 18px;
  }

  label {
    margin-bottom: 10px;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #a4a4a4;
  }

  & > input:nth-of-type(1) {
    border-color: ${({ validNumber }) => toggleBorder(validNumber)};
    outline: ${({ validNumber }) => toggleBorder(validNumber)};
  }

  & > input:nth-of-type(2) {
    margin-bottom: 15px;
    border-color: ${({ validName }) => toggleBorder(validName)};
    outline: ${({ validName }) => toggleBorder(validName)};
  }

  div {
    display: flex;
    justify-content: space-between;

    & > input:nth-of-type(1) {
      width: calc(3 / 5 * 100% - 20px);
      border-color: ${({ validExpiry }) => toggleBorder(validExpiry)};
      outline: ${({ validExpiry }) => toggleBorder(validExpiry)};
    }

    & > input:nth-of-type(2) {
      width: calc(2 / 5 * 100%);
      border-color: ${({ validCVC }) => toggleBorder(validCVC)};
      outline: ${({ validCVC }) => toggleBorder(validCVC)};
    }
  }
`;
