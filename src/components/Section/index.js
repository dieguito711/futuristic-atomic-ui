import React from "react";
import { Container } from "./styled";
const Section = ({ children, ...props }) => {
  return <Container>{children}</Container>;
};

export default Section;
