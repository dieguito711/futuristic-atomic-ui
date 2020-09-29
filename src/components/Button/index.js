import React from "react";
import { Inner } from "./styled";
const Button = ({ children, ...props }) => {
  const { type, disabled, size, text } = props;
  console.log(type);
  return <Inner type={type}>{children}</Inner>;
};

export default Button;
