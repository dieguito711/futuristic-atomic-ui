import React from "react";
import { Container, Legal, LogoContainer } from "./styled";
const Footer = ({ children, ...props }) => {
  return (
    <Container>
      <LogoContainer>
        <img src="/logo_vert.svg" alt="logo" />
      </LogoContainer>
      <Legal>creative commons. buenos aires, argentina. 2020.</Legal>
    </Container>
  );
};

export default Footer;
