import React, { useContext, useState } from "react";
import { GlobalContext } from "../global/GlobalContext";
import { imageBackCardURL } from "../constants/url";
import { imagesURL } from "../constants/url";
import { ContainerCards, ContainResult, ContainCard } from "./styles";
import Interpretacao from "../assets/Ler.jpeg";
import { allCards } from "../constants/allCards";
import { useNavigate } from "react-router-dom";
import { goToResult } from "../routes/coordinator";
import { SuffleDiv } from "../pages/styles";

export const CardFront = () => {
  const cardsFront = allCards.map((item) => {
    return (
      <ContainCard key={item?.name}>
        <img src={`${imagesURL}/${item?.image}`} alt={`${item?.name}`} />
      </ContainCard>
    );
  });
  return <ContainerCards>{cardsFront}</ContainerCards>;
};

export const CardBack = () => {
  const { cardChoise, setCardChoise } = useContext(GlobalContext);
  const navigate = useNavigate();

  const [isChoosen, setIsChoosen] = useState(false);

  const onClickBack = () => {
    setIsChoosen(true);
    const index = Math.floor(Math.random() * 77) + 1;
    setCardChoise(allCards[index]);
  };

  const cardsBack = allCards.map((item) => {
    return (
      <ContainCard key={item?.name} onClick={() => onClickBack()}>
        <img src={imageBackCardURL} alt="Back" />
      </ContainCard>
    );
  });

  return (
    <ContainerCards>
      {!isChoosen && cardsBack}
      {isChoosen && (
        <>
          <div>
            <img
              src={`${imagesURL}/${cardChoise?.image}`}
              alt={`${cardChoise?.name}`}
            />
          </div>
          <ContainResult>
            <p>
              <strong>{cardChoise?.name}</strong>
            </p>
            <br />
            <SuffleDiv onClick={() => goToResult(navigate)}>
              <img
                src={Interpretacao}
                alt="Mão com duas cartas de tarot"
                onClick={() => goToResult(navigate)}
              />
              <p>Interpretação</p>
              </SuffleDiv>
          </ContainResult>
        </>
      )}
    </ContainerCards>
  );
};
