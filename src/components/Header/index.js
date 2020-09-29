import React from "react";
import { Container, Nav, LogoContainer } from "./styled";
const Header = ({ children, ...props }) => {
  return (
    <Container>
      <LogoContainer>
        <img src="" alt="logo" />
      </LogoContainer>
      <Nav>
        <ul>
          <li>home</li>
          <li>components</li>
          <li>experiments</li>
          <li>about us</li>
          <li>user dashboard</li>
        </ul>
      </Nav>
    </Container>
  );
};

export default Header;
