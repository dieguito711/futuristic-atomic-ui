import React from "react";
import { Container } from "./styled";
const Button = ({ children, ...props }) => {
  const { type, disabled, size, text } = props;
  console.log(type);
  return (
    <>
      {!disabled ? (
        <Container type={type}>{children}</Container>
      ) : (
        <Container disabled type={type}>
          {children}
        </Container>
      )}
    </>
  );
};

export default Button;
