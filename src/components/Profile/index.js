import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../LoginButton";
import LogoutButton from "../LogoutButton";
import Titles from "../Titles";
import { Container } from "./styled";
const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <Container>Loading ...</Container>;
  }
  if (isAuthenticated) {
    return (
      <Container>
        <Titles type="h3">Perfil</Titles>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <LogoutButton />
      </Container>
    );
  } else {
    return (
      <Container>
        No iniciaste sesión, rey.
        <LoginButton />
      </Container>
    );
  }
  /* return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  ); */
};

export default Profile;
