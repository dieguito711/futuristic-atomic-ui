import React from "react";
import { Container, Nav } from "./styled";
const Header = ({ children, ...props }) => {
  return (
    <Container>
      {/* <img>Logo</img> */}
      <Nav>
        <ul>
          <li>Home</li>
          <li>Components</li>
          <li>Experiments</li>
          <li>About Us</li>
          <li>User Dashboard</li>
        </ul>
      </Nav>
    </Container>
  );
};

export default Header;
