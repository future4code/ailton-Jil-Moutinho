import React from "react";
import ErrorGif from "../../assets/Erro.gif";
import { ButtonConst } from "../../constants/buttonStyles";
import { useNavigate } from "react-router-dom";
import { HomeContainer } from "../styles";
import { goToRegister } from "../../routes/coordinator";

export function ErrorPage() {
  const navigate = useNavigate();

  return (
    <HomeContainer>
      <br />
      <br />
      <p>Errrrrrrou!!!</p>
      <br />
      <p>Volte uma página! Você digitou o endereço de site errado!</p>
      <br />
      <img src={ErrorGif} alt="Ops! Deu erro aqui" />
      <ButtonConst onClick={() => goToRegister(navigate)}>Voltar</ButtonConst>
    </HomeContainer>
  );
}
