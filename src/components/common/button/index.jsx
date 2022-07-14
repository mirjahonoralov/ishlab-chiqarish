import React from "react";
import styled from "styled-components";

const Wrapper = styled.button`
  color: ${({ color }) => (color ? color : "#fff")};
  background: ${({ bg }) => (bg ? bg : "#289672")};
  padding: ${({ padding }) => (padding ? padding : "15px 50px")};
  width: ${({ width }) => (width ? width : "min-content")};
  margin: ${({ margin }) => margin && margin};
  border-radius: 30px;
  cursor: pointer;

  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  user-select: none;
  :active {
    opacity: 0.7;
    transform: scale(0.98);
  }
`;

const CommonButton = ({ name, padding, color, bg, margin, onClick, type , top ,width , border  }) => {
  return (
    <Wrapper
      padding={padding}
      color={color}
      bg={bg}
      margin={margin}
      onClick={onClick}
      type={type}
      width={width}
      style={{position : "relative" , top : top, border: border}}
    >
      {name}
    </Wrapper>
  );
};

export default CommonButton;
