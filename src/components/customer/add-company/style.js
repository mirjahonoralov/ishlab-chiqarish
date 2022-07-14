import styled from "styled-components";

export const Wrapper = styled.div`
  background: #ffffff;
  border-radius: 12px;
  width: 1020px;
  padding: 16px;
  text-align: end;

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 20px;
    letter-spacing: -0.015em;
    color: #000000;
  }

  svg {
    cursor: pointer;
  }
`;

export const Content = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
  text-align: start;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  p {
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: -0.015em;
    color: #000000;

    margin-left: 20px;
  }
`;
