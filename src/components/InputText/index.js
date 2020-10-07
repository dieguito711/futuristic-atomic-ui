import React from "react";
import { Container } from "./styled";

const InputText = ({ children, ...props }) => {
  const { type } = props;
  return <Container type="text">{children}</Container>;
};

export default InputText;
