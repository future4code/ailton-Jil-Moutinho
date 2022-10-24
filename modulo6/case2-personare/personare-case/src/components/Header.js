import React from "react";
import Logo from "../assets/Logo.jpeg";
import { Container, LogoStyles } from "./styles";
import { useNavigate } from "react-router-dom";
import { goToRegister } from "../routes/coordinator";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <LogoStyles
        src={Logo}
        alt="Logo"
        onClick={() => goToRegister(navigate)}
      ></LogoStyles>
    </Container>
  );
};
