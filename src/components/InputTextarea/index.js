import React from "react";
import { Container } from "./styled";

const InputTextarea = ({ children, ...props }) => {
  const { type } = props;
  return (
    <Container type="textarea" wrap="hard">
      {children}
    </Container>
  );
};

export default InputTextarea;
