import styled from "styled-components";

export const Wrapper = styled.div`
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

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  div {
    text-align: start;
    width: 100%;
  }
`;

export const Th = styled.th`
  width: ${({ width }) => width && width};
`;
