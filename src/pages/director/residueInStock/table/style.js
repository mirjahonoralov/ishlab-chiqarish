import styled from "styled-components";
import { ReactComponent as edit } from "../../../../assets/icons/table/edit.svg";
import { ReactComponent as trash } from "../../../../assets/icons/table/trash.svg";
import { ReactComponent as search } from "../../../../assets/icons/table/search.svg";
import { ReactComponent as plus } from "../../../../assets/icons/table/plus.svg";
import { ReactComponent as filterIcon } from "../../../../assets/icons/table/filter-icon.svg";

const Container = styled.div`
  width: 100%;
  padding: 24px 20px;
  background: #fff;
`;

const SubCategories = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  display: flex;
  table {
    background: #ffffff;
    border: 1px solid #e0e7ed;
    /* border-radius: 16px; */
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    overflow: hidden;
    margin-top: 0;
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

const DoubleThWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 16px;
  svg {
    height: 16px;
    width: 16px;
  }
`;

const Double = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  div {
    color: #289672;
  }
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
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding-right: 75px;

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

const Top = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const TopButton = styled.div`
  cursor: pointer;
  padding: 10px 21px;
  background: #fff;
  color: #000;
  /* background: #289672; */
  border-radius: 30px;
  border: 1px solid #b9b9b9;

  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
`;

const SubCategory = styled.div`
  cursor: pointer;
  padding: 10px 21px;
  background: #fff;
  color: #000;
  border-top-left-radius: ${({ border }) => border === "topLeft" && "16px"};
  border-top-right-radius: ${({ border }) => border === "topRight" && "16px"};
  border: 1px solid #b9b9b9;
  border-right: ${({ border }) => border === "topLeft" && "none"};
  border-left: ${({ border }) => border === "topRight" && "none"};
  /* background: #289672; */

  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
`;

const SelectedStockWrapper = styled.div`
  display: flex;
  gap: 6px;
`;

const SelectionStock = styled.div`
  background: #e2e2e2;
  border-radius: 7px;
  padding: 0 5px;
  display: flex;
  align-items: center;
  gap: 6px;
  /* margin-left: 6px; */
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #000000;

  svg {
    width: 10px !important;
  }
`;

export {
  DoubleThWrapper,
  Double,
  AccordionIcon,
  Container,
  HeaderWrapper,
  Icon,
  SubCategories,
  SubCategory,
  ThWrapper,
  Top,
  TopButton,
  Wrapper,
  SelectedStockWrapper,
  SelectionStock,
};
