import React from "react";
import { Icon } from "../icons";
import { Container, Wrapper } from "./style";

const Template = ({ children }) => {
  return (
    <Container>
      <Wrapper>
        <Icon.CrossLogo />
        {children}
      </Wrapper>
    </Container>
  );
};

export default Template;
