import React, { useContext } from "react";
import { GlobalContext } from "../global/GlobalContext";
import Logo from "../assets/Logo.jpeg";
import { Container, LogoStyles } from "./styles";
import { useNavigate } from "react-router-dom";
import { goToRegister } from "../routes/coordinator";

export const Header = () => {
  const { name } = useContext(GlobalContext);
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
