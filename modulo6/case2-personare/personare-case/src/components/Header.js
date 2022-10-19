import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../global/GlobalContext";
import { ButtonConst } from "../constants/buttonStyles";
import { Container } from "./styles";

export const Header = () => {
  return (
    <Container>
      <p>Bem vindo ao Tarot On-line!</p>
      <ButtonConst>Botão teste</ButtonConst>
    </Container>
  );
};
