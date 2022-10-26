import React from "react";
import Logo from "../assets/Logo.jpeg";
import { MainContainer } from "./styles";
import { useNavigate } from "react-router-dom";

export function ErrorPage() {
  const navigate = useNavigate();

  return (
    <MainContainer>
      <p>Errrrrrrou!!!</p>
      <br />
      <p>Volte uma página! Você digitou o endereço de site errado!</p>
      <img src={Logo} alt="Faustão falando errou!" />
    </MainContainer>
  );
}
