import React, { useState } from "react";
import SearchInput from "../../../common/search-input";
import Selector from "../../../common/selector";
import { HeaderWrapper } from "../style";

const Header = ({ title, setOpen, changeModal }) => {
  const products = ["products", "banana", "orange", "apple"];
  const colors = ["colors", "red", "blue", "yellow"];
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [searchValue, setSearchValue] = useState(null);

  return (
    <HeaderWrapper>
      <h1>{title}</h1>
      <Selector
        setSelectedValue={setSelectedProduct}
        selectedValue={selectedProduct}
        values={products}
        width="134px"
      />
      <Selector
        setSelectedValue={setSelectedColor}
        selectedValue={selectedColor}
        values={colors}
        width="134px"
      />
      <button onClick={() => changeModal(1)}>
        <span>5</span> Korzinka
      </button>

      <SearchInput
        placeholder="Search name, email, or etc."
        setSearchValue={setSearchValue}
      />
    </HeaderWrapper>
  );
};

export default Header;
