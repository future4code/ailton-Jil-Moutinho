import React from "react";
//import ErrorGif from "../assets/Erro.gif";
//import { HomeContainer, MiddleContainer } from "./styled";
//import { goHome } from "../routes/coordinator";
//import { Button } from "../constants/buttonStyled";
//import { useNavigate } from "react-router-dom";
import { HomeContainer } from "../styles";

export function ErrorPage() {
  //const navigate = useNavigate();

  return (
    <HomeContainer>
        <p>Oi sou erro</p>
      {/* <MiddleContainer>
        <p>Errrrrrrou!!!</p>
        <br />
        <p>Volte uma página! Você digitou o endereço de site errado!</p>
        <img src={ErrorGif} alt="Faustão falando errou!" />
        <Button onClick={() => goHome(navigate)}>Voltar</Button>
      </MiddleContainer> */}
    </HomeContainer>
  );
}
