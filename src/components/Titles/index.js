import React from "react";
import { TitleContainer, DivTitleContainer } from "./styled";

const Titles = ({ children, ...props }) => {
  const { type } = props;
  console.log(type);
  return <DivTitleContainer><TitleContainer type={type}>{children}</TitleContainer></DivTitleContainer>;
};

export default Titles;
