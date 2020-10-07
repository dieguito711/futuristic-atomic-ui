import React from "react";
import { Container } from "./styled";

const Paragraph = ({ children, ...props }) => {
  const { type } = props;
  return <Container type={type}>{children}</Container>;
};

export default Paragraph;
