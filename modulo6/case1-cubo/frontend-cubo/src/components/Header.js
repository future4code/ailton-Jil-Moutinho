import React from "react";
import LogoBlack from "../assets/LogoGold.png";
import { Container, LogoStyles } from "./styles";
import { useNavigate } from "react-router-dom";
import { goToHome } from "../routes/Coordinators";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <LogoStyles
        src={LogoBlack}
        alt="Logo"
        onClick={() => goToHome(navigate)}
      ></LogoStyles>
    </Container>
  );
};
//oi
