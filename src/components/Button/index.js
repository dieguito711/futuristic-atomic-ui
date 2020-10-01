import React from "react";
import { Container } from "./styled";
const Button = ({ children, ...props }) => {
  const { type, disabled, size, text } = props;
  console.log(type);
  return (
    <>
      {!disabled ? (
        <Container type={type} size={size}>
          {text}
        </Container>
      ) : (
        <Container disabled type={type} size={size}>
          {text}
        </Container>
      )}
    </>
  );
};

export default Button;
