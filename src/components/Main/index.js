import React from "react";
import { Container } from "./styled";
const Main = ({ children, ...props }) => {
  return <Container>{children}</Container>;
};

export default Main;
