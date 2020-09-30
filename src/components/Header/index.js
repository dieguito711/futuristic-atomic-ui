import React from "react";
import { Container, Nav, LogoContainer, Link } from "./styled";

const Header = ({ children, ...props }) => {
  return (
    <Container>
      <LogoContainer>
        <img src="/logo.svg" alt="logo" />
      </LogoContainer>
      <Nav>
        <ul>
          <li>
            <Link href="/">home</Link>
          </li>
          <li>
            <Link href="/components">components</Link>
          </li>
          <li>
            <Link href="/experiments">experiments</Link>
          </li>
          <li>
            <Link href="/aboutus">about us</Link>
          </li>
          <li>
            <Link href="userdashboard">user dashboard</Link>
          </li>
        </ul>
      </Nav>
    </Container>
  );
};

export default Header;
