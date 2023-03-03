import styled from 'styled-components';

export default function BoxChoice(props) {
  return (
    <BoxStyled background={props.background} onClick={props.onClick}>
      <BoxNameStyled>{props.name}</BoxNameStyled>
      <BoxPriceStyled>{props.price}</BoxPriceStyled>
    </BoxStyled>
  );
}

export const BoxStyled = styled.div`
  & {
    box-sizing: border-box;
    width: 145px;
    height: 145px;
    border: 1px solid #cecece;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-right: 24px;
    background-color: ${(props) => `${props.background}`};
  }
  &:hover {
    cursor: pointer;
  }
`;

export const BoxNameStyled = styled.div`
  & {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #454545;
  }
`;

export const BoxPriceStyled = styled.div`
  & {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #898989;
  }
`;
