import React, { useContext } from "react";
import { GlobalContext } from "../global/GlobalContext";
//import { ButtonConst } from "../constants/buttonStyles";
import { Container } from "./styles";

export const Header = () => {
  const { name } = useContext(GlobalContext);
  console.log(name);
  return (
    <Container>
      {!name && <p>Bem vindo ao Tarot on-line!</p>}
      {name && <p>{name}, Bem vindo de volta ao Tarot on-line!</p>}
      {/* <ButtonConst>Botão teste</ButtonConst> */}
    </Container>
  );
};
