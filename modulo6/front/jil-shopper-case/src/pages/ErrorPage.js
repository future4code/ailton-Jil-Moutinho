import React from "react";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import ErrorGif from "../assets/Erro.gif";
import { HomeContainer, MiddleContainer } from "./styled";

export function ErrorPage() {
  return (
    <HomeContainer>
      <Header />
      <MiddleContainer>
        <p>Errrrrrrou!!!</p>
        <p>Volte uma página! Você digitou o endereço de site errado!</p>
        <img src={ErrorGif} alt="Faustão falando errou!" />
      </MiddleContainer>
      <Footer />
    </HomeContainer>
  );
}
