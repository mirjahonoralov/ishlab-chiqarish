import React from "react";
import {
  Container,
  Wrapper,
  SearchInput,
  SearchWrapper,
  SearchButton,
  LanWrapper,
} from "./style";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import ThemeMode from "./ThemeMode";

import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch } from "react-redux";
import { setLanguage } from "../../../../redux/language/languageSlice";

const Header = ({ headerComponent }) => {
  const [age, setAge] = React.useState("uz");
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setAge(event.target.value);
    dispatch(setLanguage(event.target.value));
  };

  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Search..." />
        <SearchButton>
          <SearchIcon />
        </SearchButton>
      </SearchWrapper>
      <Wrapper>
        {headerComponent && headerComponent}
        <div style={{ width: "110px" }}>
          <ThemeMode />
        </div>
        <LanWrapper>
          <LanguageIcon style={{ left: "15px" }} />
          <Box sx={{ minWidth: 110 }}>
            <FormControl fullWidth style={{ border: "none" }}>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
                style={{
                  border: "none",
                  borderRadius: "50px",
                  background: "var(--blue)",
                  height: "48px",
                  color: "#fff",
                  paddingLeft: "40px",
                }}
              >
                <MenuItem value={"uz"}>O'zbekcha</MenuItem>
                <MenuItem value={"ru"}>Ruscha</MenuItem>
                <MenuItem value={"en"}>English</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </LanWrapper>
      </Wrapper>
    </Container>
  );
};

export default Header;
