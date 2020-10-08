import React from "react";
import { InputSelectContainer } from "./styled";

const InputSelect = ({ children, ...props }) => {
  
  const { options, id, value } = props;
  console.log(options);

  return (
    <InputSelectContainer id={id} value={value} onChange={event => console.log("cambio option value")}>
      {/* {options.map((option) => (
        <option value={option.value}>{option.text}</option>
      ))} */}
      {children}
      {/* <option vale="opc1">Opc1</option>
      <option vale="opc1">Opc2</option>
      <option vale="opc1">Opc3</option> */}
    </InputSelectContainer>
  );
    
};




export default InputSelect;
