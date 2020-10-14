import React, { useState} from "react";
import { InputRadioContainer } from "./styled";

const InputRadio = ({ children, ...props }) => {
  
  const { options, id, value, name } = props;
  const [color, cambiarColor] = useState(false);

  return (
    <InputRadioContainer color={color} onClick={() => cambiarColor(!color)}>
        <div 
            id={id}
            name={name} 
            value={value} 
            onClick={event => console.log("click radio input")} /> 
        <label> {children} </label>
    </InputRadioContainer>
  );
    
};



export default InputRadio;
