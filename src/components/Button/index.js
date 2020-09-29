import React from "react";
import { Container } from "./styled";
const Button = ({ children, ...props }) => {
  const { type, disabled, size, text } = props;
  console.log(type);
  return <Container type={type}>{children}</Container>;
};

export default Button;
