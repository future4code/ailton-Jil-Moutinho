import React from "react";
import Logo from "../assets/Logo.jpeg";
import { Container, LogoStyles } from "./styles";
import { useNavigate } from "react-router-dom";
import { goToHome } from "../routes/Coordinators";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <LogoStyles
        src={Logo}
        alt="Logo"
        onClick={() => goToHome(navigate)}
      ></LogoStyles>
    </Container>
  );
};
