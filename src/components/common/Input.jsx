import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;

  span {
    position: absolute;
    top: 25%;
    left: 17px;
  }
`;

const Wrapper = styled.input`
  background: ${({ bg }) => (bg ? bg : "#fff")};
  border: ${({ border }) =>
    border ? border : "2px solid rgba(1, 27, 39, 0.3)"};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius : "40px"};
  width: ${({ width }) => (width ? width : "404px")};
  height: ${({ height }) => (height ? height : "50px")};
  padding-left: 40px;
  outline: none;
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.04em;
  color: #011b27;
  opacity: 0.6;
`;

const Input = ({
  icon,
  placeholder,
  onChange,
  type,
  bg,
  borderRadius,
  border,
  marginTop,
  width,
  height,
}) => {
  return (
    <Container>
      <span>{icon}</span>
      <Wrapper
        width={width}
        placeholder={placeholder}
        onChange={onChange}
        type={type}
        bg={bg}
        borderRadius={borderRadius}
        border={border}
        marginTop={marginTop}
        height={height}
      />
    </Container>
  );
};

export default Input;
