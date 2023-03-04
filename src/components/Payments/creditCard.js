import React, { useState } from 'react';
import styled from 'styled-components';
import Card from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

export default function CreditCardSection() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCVC] = useState('');
  const [focused, setFocused] = useState('');

  function handleNumberAndExpiry(e, step, separator, setState) {
    let newNumber = e.target.value;

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
    let newNumber = e.target.value;

    let numeric = '';

    const regex = new RegExp('[0-9]');

    for (const character of newNumber) {
      if (regex.test(character) === true) {
        numeric += character;
      }
    }

    setCVC(numeric);
  }

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
        <Form>
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

const CCandFormContainerStyles = styled.div`
  display: flex;
  column-gap: 30px;

  & > div {
    margin: 0;
  }
`;

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
    border: 1px solid #c9c9c9;
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

  & > input:nth-of-type(2) {
    margin-bottom: 15px;
  }

  div {
    display: flex;
    justify-content: space-between;

    & > input:nth-of-type(1) {
      width: calc(3 / 5 * 100% - 20px);
    }

    & > input:nth-of-type(2) {
      width: calc(2 / 5 * 100%);
    }
  }
`;
