import React, { useContext, useState } from "react";
import { GlobalContext } from "../global/GlobalContext";
import { imageBackCardURL } from "../constants/url";
import { imagesURL } from "../constants/url";
import { ContainerCards } from "./styles";
import { allCards } from "../constants/allCards";
import { ButtonConst } from "../constants/buttonStyles";
import { useNavigate } from "react-router-dom";
import { goToResult } from "../routes/coordinator";

export const CardFront = () => {
  const cardsFront = allCards.map((item) => {
    return (
      <div key={item?.name}>
        <img src={`${imagesURL}/${item?.image}`} alt={`${item?.name}`} />
      </div>
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
    const index = Math.floor(Math.random() * 77);
    console.log(index);
    setCardChoise(allCards[index]);
  };

  const cardsBack = allCards.map((item) => {
    return (
      <div key={item?.name} onClick={() => onClickBack()}>
        <img src={imageBackCardURL} alt="Back" />
      </div>
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
          <ButtonConst onClick={() => goToResult(navigate)}>
            Interpretação
          </ButtonConst>
        </>
      )}
    </ContainerCards>
  );
};
