import React from "react";
import { Container } from "./styled";

const InputTextarea = ({ children, ...props }) => {
  const { type } = props;
  return (
    <Container whileHover={{ scale: 1.1 }} type="textarea" wrap="hard">
      {children}
    </Container>
  );
};

export default InputTextarea;
