import styled from "styled-components";

export const Wrapper = styled.form`
      background-color: white;
  padding: 15px;
  border-radius: 9px;
  h2{
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 20px;
    letter-spacing: -0.015em;
    color: #000000;
    margin-bottom: 30px;
  }
`
export const Inputs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr ;
`
export const ModalWrapper = styled.div`
  padding: 30px 125px;
  text-align: center;
  h3{
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 33px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #000000;
    margin-bottom: 25px;
  }
`