import React from "react";

import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const FilterSelection = ({ item }) => {
  const [value, setValue] = React.useState(item.title);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          onChange={handleChange}
          style={{
            borderRadius: "50px",
            background: "#fff",
            height: "40px",
            paddingLeft: "20px",
            paddingRight: "8px",
          }}
        >
          <MenuItem disabled value={item.title}>
            {item.title}
          </MenuItem>
          {item?.values.map((item, id) => (
            <MenuItem
              key={id}
              value={item.name}
              onMouseEnter={(e) => (e.target.style.color = " #289672")}
              onMouseLeave={(e) => (e.target.style.color = "#000")}
            >
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default FilterSelection;
