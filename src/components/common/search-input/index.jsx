import React from "react";
import styled from "styled-components";
import icon from "../../../assets/icons/search.svg";

const Wrapper = styled.div`
  position: relative;

  input {
    background: #ffffff;
    border: 1px solid #e0e7ed;
    border-radius: 8px;
    outline: none;
    padding-left: 32px;
    height: 36px;
    width: 250px;
  }

  img {
    position: absolute;
    left: 8px;
    top: 10px;
  }
`;

const SearchInput = ({ placeholder, setSearchValue }) => {
  return (
    <Wrapper>
      <img src={icon} alt="search-icon" />
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </Wrapper>
  );
};

export default SearchInput;
