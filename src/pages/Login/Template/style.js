import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(111.27deg, #0d6246 13.39%, #5bcba6 97.99%);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 30px 50px;
  background: #ffffff;
  border-radius: 50px;

  a {
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.04em;
    color: #289672;
  }

  h2 {
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.04em;
    color: #222628;
  }
`;

const Section = styled.div`
  text-align: left;

  h2 {
    margin: 0;
    margin-bottom: 10px;
  }

  span {
    color: red;
  }

  // validation
  h5 {
    color: red;
    margin: 5px 0 0 5px;
  }

  .react-tel-input .form-control {
    width: 404px;
    height: 50px;
    border-radius: 40px;
  }

  .react-tel-input .flag-dropdown.open .selected-flag {
    border-radius: 40px;
  }
  .react-tel-input .selected-flag {
    background: #fff;
    border-bottom-left-radius: 40px;
    border-top-left-radius: 40px;
  }

  .flag-dropdown {
    border-bottom-left-radius: 40px;
    border-top-left-radius: 40px;
  }
`;

export { Container, Wrapper, Section };
