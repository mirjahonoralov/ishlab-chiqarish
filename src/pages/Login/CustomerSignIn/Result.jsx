import React from "react";
import { Container } from "./style";

const Result = ({ company }) => {
  return (
    <Container>
      <span>{company?.icon}</span>
      <p>{company?.name}</p>
    </Container>
  );
};

export default Result;
