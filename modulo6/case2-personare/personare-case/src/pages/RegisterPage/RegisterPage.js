import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ButtonConst } from "../../constants/buttonStyles";
import { GlobalContext } from "../../global/GlobalContext";
import { goDraw, goToTop } from "../../routes/coordinator";
import Start from "../../assets/StartTarot.gif";
import {
  HomeContainer,
  ContaiRegister,
  InitialContain,
  GifOutIntro,
  NameInput,
} from "../styles";



export const RegisterPage = () => {
  const { setName, name } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleName = (event, value) => {
    setName(event.target.value);
    localStorage.setItem("name", event.target.value);
  };

  const tst = (navigate) => {
    goToTop();
    goDraw(navigate);
  };

  return (
    <HomeContainer>
      <GifOutIntro src={Start} alt="Animation introduction" />
      <Header></Header>
      <InitialContain>
        {!name && <p>Bem vindo ao Tarot on-line!</p>}
        {name && <p>{name}, Bem vindo de volta ao Tarot on-line!</p>}
        <br />
        <h1>TAROT DO DIA</h1>
      </InitialContain>
      <ContaiRegister>
        <p>COMO GOSTARIA DE SER CHAMADO (Caso queira, você pode mudar)?</p>
        <br />
        <NameInput
          value={name}
          type="text"
          placehoder="Nome ou como gostaria de ser chamado"
          required
          onChange={handleName}
        ></NameInput>
      </ContaiRegister>
      <ContaiRegister>
        <p>CONCENTRE-SE PROFUNDAMENTE NO SEU DIA.</p>
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
        {name && (
          <ButtonConst onClick={() => tst(navigate)}>Ver as cartas</ButtonConst>
        )}
      </ContaiRegister>
      <Footer></Footer>
    </HomeContainer>
  );
};
