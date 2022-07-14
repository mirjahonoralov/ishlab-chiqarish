import React from "react";
import styled from "styled-components";

const Wrapper = styled.button`
  cursor: pointer;
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 404px;
  height: 50px;
  background: #289672;
  border-radius: 40px;
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.04em;
  transition: 0.1s;

  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.04em;
  color: #ffffff;

  :active {
    opacity: 0.7;
    transform: scale(0.9);
  }
`;

const Button = ({ text, onClick, type }) => {
  return (
    <Wrapper onClick={onClick} type={type}>
      {text}
    </Wrapper>
  );
};

export default Button;
