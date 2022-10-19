import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ButtonConst } from "../../constants/buttonStyles";
import { GlobalContext } from "../../global/GlobalContext";
import { goDraw } from "../../routes/coordinator";
import { HomeContainer, ContaiRegister } from "../styles";

export const RegisterPage = () => {
  const { setName, name } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleName = (event, value) => {
    setName(event.target.value);
    localStorage.setItem("name", name);
    console.log(name);
  };

  return (
    <HomeContainer>
      <Header></Header>
      <h1>TAROT DO DIA</h1>
      <ContaiRegister>
        <p>COMO GOSTARIA DE SER CHAMADO?</p>
        <input
          value={name}
          type="text"
          placehoder="Nome ou como gostaria de ser chamado"
          required
          onChange={handleName}
        ></input>
      </ContaiRegister>
      <ContaiRegister>
        <p>CONCENTRE-SE PROFUNDAMENTE NO SEU DIA.</p>
        <p>
          Escolha um momento tranquilo para o jogo e feche os olhos por alguns
          instantes. Concentre-se e peça mentalmente uma orientação para o seu
          dia. Você só pode tirar uma carta, por isso, quando se sentir
          preparado embaralhe as cartas.
        </p>
        {name && (
          <ButtonConst onClick={() => goDraw(navigate)}>
            Escolher a carta
          </ButtonConst>
        )}
        <p>Não apertar sem nome. Ao apertar cartas viram.</p>
      </ContaiRegister>
      <Footer></Footer>
    </HomeContainer>
  );
};
