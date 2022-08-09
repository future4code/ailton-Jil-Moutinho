import React from "react";
import { BASE_URL } from "../../constants/constants";
import { useRequestData } from "../../services/useRequestData";
import { useNavigate } from "react-router-dom";
import { goToApplication } from "../../router/Coordinator";
import Convite from "../../assets/img/Convite4.png";
import escolha from "../../assets/img/escolha.jpg";
import Neil from "../../assets/img/Neil.jpg";
import suaVez from "../../assets/img/suaVez.jpg";
import subscribe from "../../assets/img/subscribe.jpg";
import Dogs from "../../assets/img/Dogs.jpg";
import HeaderContainer from "../../components/Header";
import styled from "styled-components";

const GlobalList = styled.div`
  background-color: black;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  padding: 12px;
  img {
    width: 30rem;
  }
  button {
    height: 2rem;
    width: 8rem;
    border-radius: 10px;
    background-color: lightgrey;
    box-shadow: 5px 5px 5px #ff00ff;
    :hover {
      height: 2.2rem;
      width: 8.2rem;
      opacity: 1;
      background-color: grey;
      color: white;
    }
  }
`;
const FirstContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 1rem;
  align-items: center;
  text-align: center;
  text-shadow: 0.5rem 0.5rem 0.5rem #ff00ff;
  margin-top: 1rem;
  width: 100%;
`;
const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`;
const ContainerRepeatTextRight = styled.div`
  width: 70vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    width: 45.5%;
    height: 12rem;
    padding: 1rem;
    display: flex;
    align-items: center;
    border-left: solid 6px white;
  }
  :hover {
    div {
      border-left: solid 6px #ff00ff;
      transition: border-left 0.2s ease-in;
    }
  }
  img {
    width: 20rem;
    height: 15rem;
    border-radius: 2rem;
  }
`;
const ContainerRepeatTextLeft = styled.div`
  width: 70vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    width: 45.5%;
    height: 12rem;
    padding: 1rem;
    display: flex;
    align-items: center;
    border-right: solid 6px white;
    text-align: end;
  }
  :hover {
    div {
      border-right: solid 6px #ff00ff;
      transition-duration: 0.2s;
    }
  }
  img {
    width: 20rem;
    height: 15rem;
    border-radius: 2rem;
  }
`;
const CardsContainer = styled.div`
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 1rem;
  font-size: smaller;
  margin-bottom: 16px;
`;
const TripsCard = styled.div`
  height: 25rem;
  width: 20rem;
  color: black;
  /* text-shadow: 0.1rem 0.1rem 0.2rem white; */
  background-color: white;
  box-shadow: 5px 5px 1rem white /* #ff00ff */;
  border-radius: 10px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  /*   align-items: center; */
  overflow-y: auto;
  line-height: 1.2rem;
  img {
    width: 100%;
    margin: 0 auto;
    margin-bottom: 0.8rem;
  }
`;

function ListTripsPage() {
  const navigate = useNavigate();
  const [trips, isLoading, error] = useRequestData(`${BASE_URL}/trips`);

  const tripsDataList =
    trips &&
    trips.map((item, index) => {
      return (
        <TripsCard key={index}>
          <img
            src={`https://picsum.photos/250/150?random=${index + 1}`}
            alt={"imagem da viagem"}
          />
          <span>
            <strong>Name: {item.name}</strong>
          </span>
          <span>
            <strong>Description: </strong>
            {item.description}
          </span>
          <span>
            <strong>Planet: </strong>
            {item.planet}
          </span>
          <span>
            <strong>Duration (in days): </strong>
            {item.durationInDays}
          </span>
          <span>
            <strong>Date: </strong>
            {item.date}
          </span>
        </TripsCard>
      );
    });

  return (
    <GlobalList>
      <HeaderContainer />
      <Main>
        <FirstContainer>
          <img src={Convite} alt={"imagem"} />
          <div>
            <p>É hiper de rico e quer viajar no espaço!?</p>
            <p>
              Quer festejar e viajar sem se preocupar com tempo e dinheiro!?
            </p>
            <p>A LabeX - Excursões é perfeita ora você!</p>
            <p>Conheça nossos pacotes!</p>
          </div>
        </FirstContainer>
        <h3>About Space Travels</h3>
        <ContainerRepeatTextRight>
          <img src={Dogs} alt={"imagem de Belka e Strelka"} />
          <div>
            Em 19 de agosto de 1960, a espaçonave Soviética Korabyl-Sputnik 2
            levou dois cãezinhos (chamados Belka - Esquilo - e Strelka -
            Flechinha- ) ao espaço e os retornou com segurança à Terra.
          </div>
        </ContainerRepeatTextRight>
        <ContainerRepeatTextLeft>
          <div>
            Em 20 de julho de 1969, Neil Armstrong deixou o Módulo Lunar Eagle e
            tornou-se o primeiro ser humano a por os pés na Lua.
          </div>
          <img src={Neil} alt={"Neil Armstrong"} />
        </ContainerRepeatTextLeft>
        <ContainerRepeatTextRight>
          <img src={suaVez} alt={"ticket"} />
          <div>
            Chegou a sua vez de conhecer o espaço, outros planetas, outras
            galaxias... Como funciona?
          </div>
        </ContainerRepeatTextRight>
        <ContainerRepeatTextLeft>
          <div>
            Veja abaixo e escolha a viagem suave na nave que você mais se
            identificar.
          </div>
          <img src={escolha} alt={"doodle de escolha"} />
        </ContainerRepeatTextLeft>
        <ContainerRepeatTextRight>
          <img src={subscribe} alt={"escolhendo"} />
          <div>
            <p>
              Clique em "Subscribe" pra se candidatar e pronto! É só aguardar o
              tao esperado momento de sua aprovação! E do boleto que virá!
            </p>
            <br></br>
            <p>Quem vamos!?</p>
          </div>
        </ContainerRepeatTextRight>

        <h3>Avaiable Space Travels</h3>
        <CardsContainer>
          {isLoading && <p>Loading...</p>}
          {!isLoading && error && <p>{error.message}</p>}
          {!isLoading && trips && trips.length > 0 && tripsDataList}
          {!isLoading && trips && trips.length === 0 && <p>Não há viagens</p>}
        </CardsContainer>
        <button onClick={() => goToApplication(navigate)}>Subscribe</button>
      </Main>
    </GlobalList>
  );
}

export default ListTripsPage;
