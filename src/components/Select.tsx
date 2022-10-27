import { useState } from "react";
import styled from "styled-components";

const SelectStyled = styled.select`
  border: 1px solid rgb(234, 236, 240);
  transition: all 0.3s ease 0s;
  padding: 8px;
  background: transparent;
  box-sizing: border-box;
  cursor: unset;
  height: 50px;
  border-radius: 10px;
  font-weight: 600;

  max-width: 350px;
  width: 100%;

  font-size: 16px;
  line-height: 50px;
  color: gray;

  & > option {
    line-height: 30px;
    font-size: 14px;
  }

`;

type Props = {
  options: Array<string>;
};

export const Select: React.FC<Props> = ({ options }) => {
  const [value, setValue] = useState(options[0]);

  return (
    <SelectStyled
      value={value}
      onChange={(event) => setValue(event.target.value)}
    >
      {options.map((option) => (
        <option key={option} value={option} onClick={() => setValue(option)}>
          {option}
        </option>
      ))}
    </SelectStyled>
  );
};
