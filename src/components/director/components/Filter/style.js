import styled, { keyframes } from "styled-components";
import { ReactComponent as filter } from "../../../../assets/icons/filter/filter.svg";

const filterAnimation = keyframes`
  from {
    left: -100vw;
  }
  to {
    left: 290px;
  }
`;

const Container = styled.div`
  width: calc(100vw-278px);
  margin: ${({ changePadding }) => changePadding && "0 -15px"};
  animation-name: ${({ changePadding }) => changePadding && filterAnimation};
  animation-duration: ${({ changePadding }) => changePadding && "2s"};
  display: flex;
  flex-wrap: wrap;
  row-gap: 15px;
  column-gap: 25px;
  border-radius: ${({ changePadding }) => !changePadding && "20px"};
  background: #fff;
  padding: ${({ changePadding }) => (changePadding ? "15px" : "0 15px")};
  margin-top: ${({ changePadding }) => !changePadding && "15px"};
  border-top: ${({ changePadding }) => changePadding && "9px solid silver"};
  position: fixed;
  z-index: 10;
  top: 80px;
  left: 292px;
  .css-1d3z3hw-MuiOutlinedInput-notchedOutline {
    border-color: var(--blue) !important;
  }
`;

const SearchWrapper = styled.div`
  position: relative;
  min-width: 200px;

  span {
    position: absolute;
    top: 17%;
    left: 12px;
  }

  .css-i4bv87-MuiSvgIcon-root {
    position: absolute;
    top: 17%;
    right: 12px;
  }
`;

const Icon = styled.div``;
Icon.Filter = filter;

export { Container, Icon, SearchWrapper };
