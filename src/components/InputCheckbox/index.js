import React from "react";
import { InputCheckboxContainer } from "./styled";

const InputCheckbox = ({ children, ...props }) => {
  
  const { options, id, value, name } = props;
 

  return (
    <InputCheckboxContainer>
      <div 
        id={id} 
        name={name}
        value={value} 
        onClick={event => console.log("click checkbox input")}
      />
      <label > {children} </label>
    </InputCheckboxContainer>
  );
    
};



export default InputCheckbox;