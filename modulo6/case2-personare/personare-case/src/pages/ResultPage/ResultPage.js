import React, { useContext } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { imagesURL } from "../../constants/url";
import { allDescriptions } from "../../constants/description";
import { GlobalContext } from "../../global/GlobalContext";
import {
  HomeContainer,
  ContaiRegister,
  InitialContain,
  ContainResult,
} from "../styles";

export const ResultPage = () => {
  const { name, cardChoise } = useContext(GlobalContext);

  const hojeISO = new Date();
  const hoje =
    hojeISO.getDate() +
    "/" +
    (hojeISO.getMonth() + 1) +
    "/" +
    hojeISO.getFullYear();

  const descriptionItem = allDescriptions.find(
    (item) => item?.name === cardChoise.name
  );

  return (
    <HomeContainer>
      <Header></Header>
      <InitialContain>
        <h1>TAROT DO DIA</h1>
      </InitialContain>
      <ContaiRegister>
        <ContainResult>
          <div key={cardChoise?.name}>
            <img
              src={`${imagesURL}/${cardChoise?.image}`}
              alt={`${cardChoise?.name}`}
            />
          </div>
          <div>
            <h2>{cardChoise?.name}</h2>
            <br />
            <p>
              <strong>Sorte do dia {hoje} </strong>{" "}
            </p>
            <br />
            <p>
              <strong>Jogo de {name}: </strong> Esta carta, {name},{" "}
              {descriptionItem.description}
            </p>
            <br />
            <p>
              <strong>Conselho: </strong> Vá trabalhar meu filho! Invente,
              tente, faça um dia diferente!
            </p>
            <br />
          </div>
        </ContainResult>
      </ContaiRegister>
      <Footer></Footer>
    </HomeContainer>
  );
};
