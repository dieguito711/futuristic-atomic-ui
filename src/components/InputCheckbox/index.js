import React, { useState} from "react";
import { InputCheckboxContainer } from "./styled";

const InputCheckbox = ({ children, ...props }) => {
  
  const { options, id, value, name} = props;
  const [color, cambiarColor] = useState(false);


  return (
    <InputCheckboxContainer color={color} onClick={() => cambiarColor(!color)}>
      <div 
        id={id} 
        name={name}
        value={value}
        onClick={event => console.log("click checkbox input")} />
      <label > {children} </label>
    </InputCheckboxContainer>
  );
    
};



export default InputCheckbox;