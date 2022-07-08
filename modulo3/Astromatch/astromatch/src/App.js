import React, { useState } from "react";
import "./App.css";
import Logo from "./img/Logo1.png";
import Matchs from "./img/match.png";
import CandidatesCard from "./components/CandidatesCards/candidatesCards.js";
import ChoosenCard from "./components/ChoosenCard/choosenCards.js";
import axios from "axios";
import { General, DrawCard, Header, HeadersImagens } from "./Styled";

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
          <HeadersImagens src={Logo} onClick={() => setPage("Candidates")} />
          <HeadersImagens src={Matchs} onClick={() => setPage("Matches")} />
        </Header>
        <div>{changePage()}</div>
      </DrawCard>
    </General>
  );
}

export default App;
