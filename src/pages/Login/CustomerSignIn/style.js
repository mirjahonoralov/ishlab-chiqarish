import styled from "styled-components";

const Container = styled.div`
  width: 460px;
  height: 80px;
  background: #ffffff;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 28px 0;
  cursor: pointer;

  span {
    position: absolute;
    left: 10px;
    top: 7px;
    width: 83px;
    height: 66px;
  }

  p {
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.04em;
  }
`;

const Wrapper = styled.div`
  max-height: 450px;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
`;

export { Container, Wrapper };
