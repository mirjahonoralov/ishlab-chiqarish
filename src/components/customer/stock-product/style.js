import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background: #fff;
  border-radius: 12px;
  padding: 16px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;

  .double {
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;
    padding-right: 30px;

    .double-bottom {
      display: flex;
      justify-content: space-between;
      width: 100%;
      color: #289672;
      /* padding-right: 30px; */
      position: relative;
      .item {
      }

      .divider {
        position: absolute;
        width: 1px;
        background: #289672;
        height: 15px;
        left: 50%;
      }
    }
  }

  .add {
    background: #ff9100;
    border-radius: 8px;
    padding: 8.5px 10px;
    color: #fff;
    display: flex;
    gap: 8px;
    align-items: center;
    width: 70px;
    cursor: pointer;
  }
`;

export const Counter = styled.div`
  padding: 7px 10px;
  background: #d5ffeb;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;

  span {
    background: #289672;
    border-radius: 50px;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff !important;
    cursor: pointer;
  }

  p {
    color: #18ab56;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
  }
`;

export const KiloCounter = styled.div`
  position: relative;
  input {
    background: #ffffff;
    border: 1px solid #dad8d8;
    border-radius: 8px;
    outline: none;
    height: 33px;
    padding: 0 15px;
    width: 100px;

    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  svg {
    position: absolute;
    width: 16px !important;
    cursor: pointer;
  }

  .up-icon {
    top: -3px;
    left: 75px;
  }
  .down-icon {
    top: 13px;
    left: 75px;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  h1 {
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #333333;
  }

  button {
    padding: 5px 15px;
    outline: none;
    background: #ff9100;
    border-radius: 20px;
    color: #ffffff;
    display: flex;
    gap: 8px;
    align-items: center;
    cursor: pointer;

    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;

    span {
      border-radius: 100%;
      background: #fff;
      width: 26px;
      height: 26px;
      color: #ff9100;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
export const CartWrapper = styled.div`
  text-align: end;
  background: #ffffff;
  border: 1px solid #e0e7ed;
  border-radius: 16px;
  width: 1320px;
  padding: 16px;

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    h1 {
      font-family: "SF Pro Display";
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      color: #333333;
    }
  }

  .double {
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;
    padding-right: 30px;

    .double-bottom {
      display: flex;
      justify-content: space-between;
      width: 100%;
      color: #289672;
      /* padding-right: 30px; */
      position: relative;
      .item {
      }

      .divider {
        position: absolute;
        width: 1px;
        background: #289672;
        height: 15px;
        left: 50%;
      }
    }
  }

  .add {
    background: #ff9100;
    border-radius: 8px;
    padding: 8.5px 10px;
    color: #fff;
    display: flex;
    gap: 8px;
    align-items: center;
    width: 70px;
    cursor: pointer;
  }

  .delete {
    background: #ffc8d2;
    border-radius: 4px;
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;
export const SuccessModalWrapper = styled.div`
  padding: 24px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 480px;

  h1 {
    font-family: "Manrope";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 33px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #000000;
    margin-top: 45px;
    margin-bottom: 8px;
  }

  p {
    font-family: "Manrope";
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #81755c;
  }
`;
// export const Wrapper = styled.div``
