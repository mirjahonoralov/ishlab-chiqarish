import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Icon, SearchWrapper } from "./style";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const SearchInput = ({ placeholder, data, onChange }) => {
  const [downIcon, setDownIcon] = useState(true);
  return (
    <SearchWrapper>
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        onInputChange={(e) => {
          setDownIcon(false);
          e.target.value.length === 0 && setDownIcon(true);
          return onChange(e);
        }}
        options={data.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            style={{ marginBottom: "10px" }}
            placeholder={placeholder}
          />
        )}
        style={{
          minWidth: "200px",
          borderRadius: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      />
      {downIcon && <KeyboardArrowDownIcon />}
    </SearchWrapper>
  );
};

export default SearchInput;
