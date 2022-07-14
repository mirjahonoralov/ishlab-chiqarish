import React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { SelectedStockWrapper, SelectionStock } from "./style";
import CloseIcon from "@mui/icons-material/Close";

const Selection = () => {
  const ITEM_HEIGHT = 35;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const names = ["Ombor 1", "Ombor 2", "Ombor 3", "Ombor 4", "Ombor 5"];

  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const SelectedStock = ({ names }) => {
    console.log(names, "name");
    return (
      <SelectedStockWrapper>
        {names.map((name) => (
          <SelectionStock>
            <span>{name}</span>
            <CloseIcon />
          </SelectionStock>
        ))}
      </SelectedStockWrapper>
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1 }}>
        {/* <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel> */}
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          // value={["ombor1", "obmor 2"]}
          // value={<SelectedStock name={personName} />}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => <SelectedStock names={selected} />}
          MenuProps={MenuProps}
          style={{ height: "35px", width: "186px", border: "none" }}
          placeholder="Omborni tanlang"
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default Selection;
