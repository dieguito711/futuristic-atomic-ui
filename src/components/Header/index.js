import React from "react";
import { Container, Nav, LogoContainer } from "./styled";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../LoginButton";
import LogoutButton from "../LogoutButton";
const Header = ({ children, ...props }) => {
  const { user, isAuthenticated, isLoading } = useAuth0();
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
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
    </Container>
  );
};

export default Header;
