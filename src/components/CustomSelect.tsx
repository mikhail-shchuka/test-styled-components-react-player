import { FormControl, MenuItem, Select } from "@mui/material";
import { useState } from "react";

type Props = {
  options: Array<string>;
};

export const CustomSelect: React.FC<Props> = ({ options }) => {
  const [value, setValue] = useState(options[0]);

  return (
    <FormControl
      sx={{
        my: 1,
        "& .MuiOutlinedInput-notchedOutline": {
          border: "1px solid rgb(234,236,240) !important",
          borderRadius: "10px",
        },
      }}
      variant="outlined"
    >
      <Select
        value={value}
        onChange={(event) => setValue(event.target.value)}
        sx={{
          fontFamily: "sans-serif",
          fontWeight: 600,
          color: "rgb(80,84,94)",
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
