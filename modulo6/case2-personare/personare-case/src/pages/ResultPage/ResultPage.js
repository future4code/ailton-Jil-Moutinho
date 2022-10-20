import React, { useContext } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { imagesURL } from "../../constants/url";
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
              <strong>Jogo de {name}: </strong> Esta carta do Tarot
              como arcano conselheiro, sugerindo ser este o período mais do
              que adequado para que você {name}, identifique as áreas da sua vida que
              estejam paradas. É chegada a hora de romper com essa estagnação,
              descobrindo no mais profundo da própria alma uma série de recursos
              que lhe permitirão viver a vida com muito mais prazer. É provável
              que você, por puro hobby, comece uma nova atividade e que isso lhe
              dê novamente um desejo de viver com mais intensidade. Você também
              poderia pensar em conhecer novos lugares e se abrir à amizades com
              novas pessoas. Esta renovação, ainda que profissional ou
              estudantil, termina afetando positivamente outras áreas mais
              abstratas da sua vida, como a espiritual e principalmente a
              afetiva.
            </p>
            <br />
            <p>
              <strong>Conselho: </strong> Vá trabalhar meu filho! Invente,
              tente, faça um dia diferente!
            </p>
            <br />
          </div>
        </ContainResult>
        <p>
          O que achou do Tarot do dia {hoje}?{" "}
          <a href="www.google.com">Conte para gente!</a>
        </p>
      </ContaiRegister>
      <Footer></Footer>
    </HomeContainer>
  );
};
