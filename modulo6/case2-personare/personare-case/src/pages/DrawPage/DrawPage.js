import React, { useContext, useState } from "react";
import { CardBack, CardFront } from "../../components/Card";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ButtonConst } from "../../constants/buttonStyles";
import { GlobalContext } from "../../global/GlobalContext";
import { HomeContainer, ContaiRegister } from "../styles";

export const DrawPage = () => {
  const { name } = useContext(GlobalContext);
  console.log("n", name);
  const [cardDisplay, setCardDisplay] = useState(true);

  const onClickButton = () => {
    setCardDisplay(!cardDisplay);
  };

  return (
    <HomeContainer>
      <Header></Header>
      <h1>TAROT DO DIA</h1>
      <ContaiRegister>
        <p>{name}, revisando: CONCENTRE-SE PROFUNDAMENTE NO SEU DIA!</p>
        <br />
        <p>
          Escolha um momento tranquilo para o jogo e feche os olhos por alguns
          instantes. Concentre-se e peça mentalmente uma orientação para o seu
          dia. Você só pode tirar uma carta, por isso, quando se sentir
          preparado embaralhe as cartas.
        </p>
        <ButtonConst onClick={() => onClickButton()}>Embaralhar</ButtonConst>
      </ContaiRegister>
      <ContaiRegister>
        <p>SELECIONE UMA CARTA DO BARALHO</p>
        <br />
        {cardDisplay && <CardFront />}
        {!cardDisplay && <CardBack />}
        <p>Ao apertar, carta sai e vira, aparece botão</p>
      </ContaiRegister>
      <Footer></Footer>
    </HomeContainer>
  );
};
