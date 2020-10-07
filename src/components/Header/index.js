import React from "react";
import { Container, Nav, LogoContainer } from "./styled";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const Header = ({ children, ...props }) => {
  return (
    <Container>
      <LogoContainer>
        <img src="/logo_fondoblanco.svg" alt="logo" />
      </LogoContainer>
      <Nav>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/components">components</Link>
          </li>
          <li>
            <Link to="/experiments">experiments</Link>
          </li>
          <li>
            <Link to="/aboutus">about us</Link>
          </li>
          <li>
            <Link to="userdashboard">user dashboard</Link>
          </li>
        </ul>
      </Nav>
    </Container>
  );
};

export default Header;
