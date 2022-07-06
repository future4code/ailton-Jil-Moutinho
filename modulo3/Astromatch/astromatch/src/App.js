import styled from "styled-components";
import axios from "axios";
import React from "react";
import "./App.css";
import Logo from "./img/Logo1.png";
import Matchs from "./img/match.jpg";
import Liked from "./img/Like.png";
import Nop from "./img/nop.png";
import AvaiableCard from "./components/avaibleCards.js";

const Imagem = styled.img`
  height: 80px;
`;
const ImgButton = styled.img`
  height: 90px;
  width: 100px;
`;
const ButtonContainer = styled.div`
display: flex;
justify-content: space-evenly;
width: 100%;
`
const DrawCard = styled.div`
  border: solid 1px black;
  margin: 5px auto;
  width: 20rem;
  height: 30rem;
`;

function App() {
  return (
    <div>
      <DrawCard>
        <header>
          <Imagem src={Logo} />
          <Imagem src={Matchs} />
        </header>
        <div>
        <AvaiableCard/>
        </div>
        <ButtonContainer>
          <ImgButton src={Nop} />
          <ImgButton src={Liked} />
        </ButtonContainer>
      </DrawCard>
    </div>
  );
}

export default App;
