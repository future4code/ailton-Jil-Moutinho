import React, { useContext, useState } from "react";
import { CardBack, CardFront } from "../../components/Card";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { GlobalContext } from "../../global/GlobalContext";
import Embaralhar from "../../assets/Embaralhar.jpeg";
import {
  HomeContainer,
  ContaiRegister,
  SuffleStyles,
  SuffleDiv,
  InitialContain,
} from "../styles";

export const DrawPage = () => {
  const { name } = useContext(GlobalContext);
  const [cardDisplay, setCardDisplay] = useState(true);

  const onClickButton = () => {
    setCardDisplay(!cardDisplay);
  };

  return (
    <HomeContainer>
      <Header></Header>
      <InitialContain>
        <h1>TAROT DO DIA</h1>
      </InitialContain>
      <ContaiRegister>
        <p>{name}, revisando: CONCENTRE-SE PROFUNDAMENTE NO SEU DIA!</p>
        <br />
        <p>
          Escolha um momento tranquilo para o jogo e feche os olhos por alguns
          instantes. Concentre-se e peça mentalmente uma orientação para o seu
          dia.
        </p>
        <br />
        <p>
          Você deve tirar uma única carta por dia, por isso, quando se sentir
          preparada(o), clique em ver as cartas.
        </p>
        <br />
        <SuffleDiv onClick={() => onClickButton()}>
          <SuffleStyles
            src={Embaralhar}
            alt="Suffleling cards hands"
          ></SuffleStyles>
          <p>Embaralhar</p>
        </SuffleDiv>
      </ContaiRegister>
      <ContaiRegister>
        {!cardDisplay && (
          <p>
            <strong>SELECIONE UMA CARTA DO BARALHO</strong>
          </p>
        )}
        <br />
        {cardDisplay && <CardFront />}
        {!cardDisplay && <CardBack />}
      </ContaiRegister>
      <Footer></Footer>
    </HomeContainer>
  );
};
