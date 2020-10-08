import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Container } from "./styled";
const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <Container onClick={() => loginWithRedirect()}>Log In</Container>;
};

export default LoginButton;
