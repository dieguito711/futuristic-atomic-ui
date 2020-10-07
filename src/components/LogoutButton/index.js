import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Container } from "./styled";
const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Container onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </Container>
  );
};

export default LogoutButton;
