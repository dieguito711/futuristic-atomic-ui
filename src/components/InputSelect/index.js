import React from "react";
import { InputSelectContainer } from "./styled";

const InputSelect = ({ children, ...props }) => {
  const { type } = props;
  console.log(type);
  return <InputSelectContainer type="text" >
                <option vale="opc1">Opc1</option>
                <option vale="opc1">Opc2</option>
                <option vale="opc1">Opc3</option>
            </InputSelectContainer>;
};

export default InputSelect;
