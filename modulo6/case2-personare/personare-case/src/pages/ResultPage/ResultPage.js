import React, { useContext } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { imagesURL } from "../../constants/url";
import { GlobalContext } from "../../global/GlobalContext";
import { HomeContainer, ContaiRegister } from "../styles";

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
      <h1>TAROT DO DIA</h1>
      <ContaiRegister>
        <div key={cardChoise?.name}>
          <img
            src={`${imagesURL}/${cardChoise?.image}`}
            alt={`${cardChoise?.name}`}
          />
        </div>
        <div>
          <h1>TAROT DO DIA</h1>
          <h2>{cardChoise?.name}</h2>
          <h3>NOME DA CARTA</h3>
          <p>
            <strong>Conselho do dia {hoje}: </strong> Vá trabalhar meu filho!
          </p>
          <p>
            <strong>Jogo de {name}: </strong>
          </p>
          <p>
            O 8 de Ouros emerge do Tarot como arcano conselheiro, Mia, sugerindo
            ser este o período mais do que adequado para que você identifique as
            áreas da sua vida que estejam paradas. É chegada a hora de romper
            com essa estagnação, descobrindo no mais profundo da própria alma
            uma série de recursos que lhe permitirão viver a vida com muito mais
            prazer. É provável que você, por puro hobby, comece uma nova
            atividade e que isso lhe dê novamente um desejo de viver com mais
            intensidade. Você também poderia pensar em conhecer novos lugares e
            se abrir à amizades com novas pessoas. Esta renovação, ainda que
            profissional ou estudantil, termina afetando positivamente outras
            áreas mais abstratas da sua vida, como a espiritual e principalmente
            a afetiva.
          </p>
          <p>
            <strong>Conselho: </strong> Invente, faça diferente!
          </p>
          <br />
          <p>
            O que achou do Tarot do dia {hoje}? 
            <a href="www.google.com">Conte para gente!</a>
          </p>
        </div>
      </ContaiRegister>
      <Footer></Footer>
    </HomeContainer>
  );
};
