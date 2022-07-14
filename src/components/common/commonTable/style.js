import styled from "styled-components";
import { ReactComponent as edit } from "../../../assets/icons/table/edit.svg";
import { ReactComponent as trash } from "../../../assets/icons/table/trash.svg";
import { ReactComponent as search } from "../../../assets/icons/table/search.svg";
import { ReactComponent as plus } from "../../../assets/icons/table/plus.svg";
import { ReactComponent as filterIcon } from "../../../assets/icons/table/filter-icon.svg";

const Container = styled.div`
  width: 100%;
  margin-top: 20px;
  padding: 24px 20px;
  background: #fff;
  border-radius: 20px;

  .MuiPaper-root {
    border: none !important;
  }
`;

const Wrapper = styled.div`
  overflow-x: auto;
  table {
    width: 100%;
    background: #ffffff;
    border: 1px solid #e0e7ed;
    border-radius: 16px;
    overflow: hidden;
    thead {
      height: 64px;
      background: #f9f9f9;
      th {
        padding: 0 14px;
        text-align: start;
        font-family: "Inter";
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 15px;
        color: #333333;
        min-width: 200px;
      }
    }

    tbody {
      background: #fff;
      border-radius: 4px;
      box-shadow: none;
      tr {
        background: #fff;
        box-shadow: 0px -1px 0px #e0e7ed;
        text-align: start;
        td {
          width: min-content;

          font-family: "SF Pro Display";
          font-style: normal;
          font-weight: 500;
          font-size: 12px;
          line-height: 150%;
          color: #828282;
          padding: 0 14px;
          text-align: start;
          span {
            font-family: "SF Pro Display";
            font-style: normal;
            font-weight: 600;
            font-size: 13px;
            line-height: 150%;
            color: #272833;
          }
        }
      }
    }
  }
`;

const ThWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 16px;
  svg {
    height: 16px;
    width: 16px;
  }
`;

const No = styled.div`
  margin: auto;
  width: 46px;
  height: 24px;
  background: #ffffff;
  border: 1px solid #f10000;
  border-radius: 2px;
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  color: #f10000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.div``;
Icon.Edit = edit;
Icon.Trash = trash;
Icon.FilterIcon = filterIcon;
Icon.Search = search;
Icon.Plus = plus;

const AccordionIcon = styled.div`
  cursor: pointer;
  width: 39px;
  height: 39px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border: 1px solid #b9b9b9;
  border-radius: 5px;
  /* margin: ${({ isOpened }) => (isOpened ? "0 24px 0 0" : "0 0 0 24px")}; */

  :hover {
    border: 1px solid #289672;

    svg {
      color: #289672;
    }
  }
`;

// --------- HEADER ----------
const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 24px;
  padding-right: ${({ isAccordion }) => isAccordion && "75px"};

  h2 {
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #333333;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const HeaderLeft = styled.div`
  /* width: 62%; */
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
  }
`;

const ActiveWrapper = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-left: 30px;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 15px 40px;
  height: 40px;
  background: ${({ bg }) => (bg ? bg : "#e87f45")};
  border: ${({ border }) => (border ? border : "none")};
  border-radius: 20px;
  cursor: pointer;

  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: ${({ color }) => (color ? color : "#fff")};
  transition: 0.1s;

  &:active {
    transform: scale(0.9);
    opacity: 0.7;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  div {
    text-align: start;
    width: 100%;
  }
`;

export {
  Container,
  Icon,
  No,
  ThWrapper,
  Wrapper,
  Button,
  HeaderWrapper,
  HeaderRight,
  AccordionIcon,
  HeaderLeft,
  ActiveWrapper,
  Footer,
};
