import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Wrapper } from "./style";

const Selector = ({
  setSelectedValue,
  selectedValue,
  values,
  width,
  fontSize,
  height,
  minWidth,
  onClick,
}) => {
  return (
    <Wrapper>
      <FormControl fullWidth>
        <Select
          id="demo-simple-select"
          value={selectedValue}
          style={{
            background: "#fff",
            border: "none",
            height: height ? height : "38px",
            width: width && width,
            minWidth: minWidth && minWidth,
            fontSize: fontSize ? fontSize : "12px",
            fontFamily: "SF Pro Display",
            fontStyle: "normal",
          }}
        >
          {typeof values[0] === "string"
            ? values.map((item) => (
                <MenuItem
                  key={item}
                  onClick={() => {
                    setSelectedValue(item);
                    onClick(item);
                  }}
                  value={item}
                  disabled={values[0] === item}
                >
                  {item}
                </MenuItem>
              ))
            : values.map((item) => (
                <MenuItem
                  key={item.name}
                  onClick={() => {
                    setSelectedValue(item.name);
                    onClick(item.name);
                  }}
                  value={item.name}
                  disabled={values[0].name === item.name}
                >
                  {item.icon && <img src={item.icon} alt="company" />}
                  {item.name}
                </MenuItem>
              ))}
        </Select>
      </FormControl>
    </Wrapper>
  );
};

export default Selector;
