import React from "react";
import { InputRadioContainer } from "./styled";

const InputRadio = ({ children, ...props }) => {
  
  const { options, id, value, name } = props;
  console.log(options);

  return (
    <InputRadioContainer>
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
