import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 0 60px;
`;

// const CustomAppBar = styled.div`
//   background: #fff;
//   padding: 0;
//   box-shadow: none;
//   height: 87px;
// `;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 25px;
`;

const SearchWrapper = styled.div`
  display: flex;
  margin: auto;
`;

const SearchInput = styled("input")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 520px;
  height: 45px;
  padding-left: 20px;
  /* border-radius: 30px; */
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  border: 1px solid silver;
  outline: none;
`;

const SearchButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  background: var(--blue);
  width: 80px;
  height: 45px;
  border: 1px solid transparent;
  outline: none;
  transition: all 0.5;
  :active {
    opacity: 0.7;
  }
`;

const LanWrapper = styled.div`
  position: relative;
  width: 181px;
  height: 100%;
  svg {
    position: absolute;
    top: 12px;
    color: #fff;
    z-index: 10;
  }
  span {
    left: 40px;
  }

  // it deletes language selection's border
  .css-1d3z3hw-MuiOutlinedInput-notchedOutline {
    border-width: 0 !important;
  }
`;
const Selection = styled.select`
  height: 49px;
  padding: 0 40px;
  border-radius: 30px;
  background: var(--blue);
  outline: none;
  width: 100%;
  padding-left: 50px;
  color: #fff;
  border: none;
  appearance: none;

  option {
    height: 10px;
  }
`;
const Option = styled.option`
  padding: 15px 10px;
  :hover {
    background: #000;
  }
`;

const SideBarShowCloseIcon = styled.div`
  /* padding: 5px; */
  width: 30px;
  height: 30px;
  background: var(--blue);
  transition: 0.5;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  :active {
    opacity: 0.7;
  }
`;

export {
  Container,
  Wrapper,
  SearchInput,
  SearchWrapper,
  SearchButton,
  Selection,
  LanWrapper,
  SideBarShowCloseIcon,
  Option,
};
