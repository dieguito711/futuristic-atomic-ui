import React from "react";
import { QuoteContainer, DivQuoteContainer } from "./styled";

const Quote = ({ children, ...props }) => {
  const { type } = props;
  return (
    <DivQuoteContainer>
      <QuoteContainer type={type}>"{children}"</QuoteContainer>

    </DivQuoteContainer>
  );
};

export default Quote;
