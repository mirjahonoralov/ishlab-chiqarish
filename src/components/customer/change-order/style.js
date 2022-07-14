import styled from "styled-components";
import { ReactComponent as cart } from "../../../assets/icons/customer-panel/change-order/cart.svg";
import { ReactComponent as pot } from "../../../assets/icons/customer-panel/change-order/pot.svg";
import { ReactComponent as dollar } from "../../../assets/icons/customer-panel/change-order/dollar.svg";
import { ReactComponent as call } from "../../../assets/icons/customer-panel/change-order/call.svg";
import { ReactComponent as chart } from "../../../assets/icons/customer-panel/change-order/chart.svg";
import { ReactComponent as check } from "../../../assets/icons/customer-panel/change-order/check.svg";
import { ReactComponent as home } from "../../../assets/icons/customer-panel/change-order/home.svg";
import { ReactComponent as location } from "../../../assets/icons/customer-panel/change-order/location.svg";
import { ReactComponent as thread } from "../../../assets/icons/customer-panel/change-order/thread.svg";
import { ReactComponent as yarn } from "../../../assets/icons/customer-panel/change-order/yarn.svg";
import { ReactComponent as calendar } from "../../../assets/icons/customer-panel/change-order/calendar.svg";
import { ReactComponent as edit } from "../../../assets/icons/customer-panel/change-order/edit.svg";
import { ReactComponent as editWhite } from "../../../assets/icons/customer-panel/change-order/edit-white.svg";

export const Container = styled.div`
  background: #ffffff;
  border-radius: 20px;
  padding: 20px 15px;
`;

export const Wrapper = styled.div`
  display: grid;
  gap: 22px;
  grid-template-columns: 1fr 1fr;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  h1 {
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #000000;
  }
`;

export const SectionWrapper = styled.div`
  table {
    background: #ffffff;
    border: 1px solid #bec8d0;
    border-radius: 15px;
    overflow: hidden;

    tbody {
      tr {
        height: 44px;
        background: #fff;
        td:nth-child(1) {
          border-right: 1px solid #bec8d0;
          div {
            display: flex;
            align-items: center;
            gap: 10px;

            font-family: "SF Pro Display";
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 14px;
          }
        }
        td:nth-child(2) {
          color: #828282;
        }

        td {
          text-align: start;
          width: 50%;
          padding-left: 24px;
          border-bottom: 1px solid #bec8d0;

          font-family: "SF Pro Display";
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          line-height: 14px;
        }
      }
    }
    tr:nth-child(12) {
      td {
        border-bottom: none;
      }
    }
  }
`;
export const Icons = styled.div``;

Icons.Call = call;
Icons.Dollar = dollar;
Icons.Chart = chart;
Icons.Check = check;
Icons.Home = home;
Icons.Location = location;
Icons.Cart = cart;
Icons.Pot = pot;
Icons.Thread = thread;
Icons.Yarn = yarn;
Icons.Calendar = calendar;
Icons.Edit = edit;
Icons.EditWhite = editWhite;

export const SectionTop = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  input {
    width: 20px;
    height: 20px;
  }
`;
export const EditButton = styled.div`
  padding: 8px 15px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: ${({ disabled }) => (disabled ? "pointer" : "not-allowed")};

  border: ${({ disabled }) => (disabled ? "none" : "1px solid #b9b9b9")};

  border-radius: 50px;

  background: ${({ disabled }) => (disabled ? " #FF9100" : "#fff")};
  opacity: ${({ disabled }) => (disabled ? "1" : "0.4")};
  color: ${({ disabled }) => (disabled ? "#fff" : "#000")};
`;

export const ModalWrapper = styled.div`
  width: 580px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  table {
    background: #ffffff;
    border: 1px solid #bec8d0;
    border-radius: 15px;
    overflow: hidden;

    tbody {
      tr {
        background: #fff;
        height: 44px;
        td:nth-child(1) {
          border-right: 1px solid #bec8d0;
          div {
            display: flex;
            align-items: center;
            gap: 10px;

            font-family: "SF Pro Display";
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 14px;
          }
        }
        td:nth-child(2) {
          color: #828282;
        }

        td {
          text-align: start;
          width: 50%;
          padding-left: 24px;
          border-bottom: 1px solid #bec8d0;
          font-family: "SF Pro Display";
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          line-height: 14px;

          input {
            border: none;
            outline: none;
            width: 90%;
          }
        }
      }
    }
    tr:nth-child(12) {
      td {
        border-bottom: none;
      }
    }
  }
`;

export const ModalTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  h2 {
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
  }
  svg {
    cursor: pointer;
  }
`;

// export const Container = styled.div``;
// export const Container = styled.div``;
// export const Container = styled.div``;
