import React from "react";
import { Container } from "./styled";
const Button = ({ children, ...props }) => {
  const { type, disabled, size, text } = props;
  return (
    <>
      {!disabled ? (
        <Container
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          type={type}
          size={size}
        >
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
