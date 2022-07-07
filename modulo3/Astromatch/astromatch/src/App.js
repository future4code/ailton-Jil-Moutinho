import styled from "styled-components";
import React, { useState } from "react";
import "./App.css";
import Logo from "./img/Logo1.png";
import Matchs from "./img/match.png";
import Fundo from "./img/astronauta.jpeg";
import CandidatesCard from "./components/candidatesCards.js";
import ChoosenCard from "./components/choosenCards.js";
import axios from "axios";

const General = styled.div`
  background-image: url(${Fundo});
  background-size: cover;
  height: 100%;
  display: flex;
  flex-direction: end;
`;
const DrawCard = styled.div`
  border: 5px solid silver;
  border-radius: 20px;
  margin: 5vh 5vw 10vh 70vw;
  width: 22vw;
  height: 80vh;
  background-color: black;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const Imagem = styled.img`
  height: 70px;
  border-radius: 20px 20px 0 0;
  :hover {
    box-shadow: 0 0 2em gold;
    height: 81px;
  }
  :active {
    opacity: 0.9;
  }
`;

function App(props) {
  const [page, setPage] = useState("Candidates");
  const [choosenProfiles, setChoosenProfiles] = useState([]);

  const changePage = () => {
    switch (page) {
      case "Candidates":
        return <CandidatesCard clear={clear} />;
      case "Matches":
        return (
          <ChoosenCard
            clear={clear}
            getChoosen={getChoosen}
            choosenProfiles={choosenProfiles}
          />
        );
      default:
        return <CandidatesCard />;
    }
  };

  const clear = () => {
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jil-moutinho-ailton/clear"
      )
      .then((res) => {
        alert("Lista de matches apagada!");
        getChoosen();
      })
      .catch((err) => {
        console.log(`Deu ruim! Erro: ${err}`);
      });
  };

  const getChoosen = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jil-moutinho-ailton/matches"
      )
      .then((res) => {
        setChoosenProfiles(res.data.matches);
      })
      .catch((err) => {
        console.log(`Deu ruim! Erro ${err}`);
      });
  };

  return (
    <General>
      <DrawCard>
        <Header>
          <Imagem src={Logo} onClick={() => setPage("Candidates")} />
          <Imagem src={Matchs} onClick={() => setPage("Matches")} />
        </Header>
        <div>{changePage()}</div>
      </DrawCard>
    </General>
  );
}

export default App;
