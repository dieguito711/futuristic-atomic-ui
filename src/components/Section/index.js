import React from "react";
import { Container } from "./styled";
const Section = ({ children, ...props }) => {
  const { direction } = props;
  return <Container direction={direction}>{children}</Container>;
};

export default Section;
