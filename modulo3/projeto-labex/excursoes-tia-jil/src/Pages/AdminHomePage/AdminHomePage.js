import React from "react";
import axios from "axios";
import styled from "styled-components";
import Fundo from "../../assets/img/fundoneon.jpeg";
import Trash from "../../assets/img/trash.jpeg";
import Details from "../../assets/img/details.jpeg";
import { BASE_URL } from "../../constants/constants";
import { useRequestData } from "../../services/useRequestData";
import { useProtectedPage } from "../../components/Hook/customHook";
import { useNavigate } from "react-router-dom";
import {
  goToCreatetrip,
  goToTripDetails,
  goToManagement,
  goToTripsList,
} from "../../router/Coordinator";

const MainContainer = styled.div`
  background-image: url(${Fundo});
  background-size: cover;
  display: flex;
  justify-content: center;
`;
const MainCard = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2vh auto;
  border: 4px solid grey;
  border-radius: 10px;
  padding: 1vh;
  background-color: black;
  width: 62vw;
  button {
    height: 2rem;
    width: 8rem;
    margin: 1rem;
    border-radius: 10px;
    background-color: lightgrey;
    box-shadow: 5px 5px 10px blue;
    :hover {
      height: 2.2rem;
      width: 8.2rem;
      opacity: 1;
      box-shadow: 5px 5px 10px #ff00ff;
      background-color: grey;
      color: white;
    }
  }
`;
const ContainerButtons = styled.div`
  padding-bottom: 1rem;
  border-bottom: solid 2px white;
`;
const ContainerTrips = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
const TripCard = styled.div`
  width: 16vw;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  margin: 0.5rem;
  box-shadow: 5px 5px 1rem white;
  border-radius: 10px;
  padding: 8px;
  background-color: black;
  img {
    width: 100%;
    margin: 0 auto;
    margin-bottom: 0.8rem;
  }
`;
const TripDescription = styled.div`
  align-items: start;
  font-size: small;
`;
const ContainerButtons2 = styled.div`
  display: flex;
  #Details {
    height: 4vh;
    width: 8vw;
    border-radius: 10px;
    border-right: solid 1px grey;
    border-bottom: solid 1px grey;
  }
  #Trash {
    height: 4vh;
    width: 2vw;
  }
`;

function ManagementPage() {
  const navigate = useNavigate();
  useProtectedPage();
  const [trips, isLoading, error] = useRequestData(`${BASE_URL}/trips/`);

  const tripsList =
    trips &&
    trips.map((item, index) => {
      return (
        <TripCard key={item.id}>
          <div>
            <img
              src={`https://picsum.photos/200/120?random=${index + 1}`}
              alt="imagem da viagem"
            />
            <TripDescription>
              <strong>{item.name}</strong>
              <p>Date: {item.date}</p>
            </TripDescription>
          </div>
          <ContainerButtons2>
            <img
              id={"Details"}
              src={Details}
              alt={"Detalhes"}
              onClick={() => {
                goToTripDetails(navigate, item.id);
              }}
            />
            {/* <button
              onClick={() => {
                goToTripDetails(navigate, item.id);
              }}
            >
              Details
            </button> */}
            <img
              id={"Trash"}
              src={Trash}
              alt={"lixeira - icone para deletar"}
              onClick={() => {
                const token = localStorage.getItem("token");
                axios
                  .delete(`${BASE_URL}/trips/${item.id}`, {
                    headers: { auth: token },
                  })
                  .then((res) => {
                    goToManagement(navigate);
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
            />
          </ContainerButtons2>
        </TripCard>
      );
    });

  const goLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <MainContainer>
      <MainCard>
        <h3>Management Area</h3>
        <ContainerButtons>
          <button
            onClick={() => {
              goToCreatetrip(navigate);
            }}
          >
            Create new trip
          </button>
          <button
            onClick={() => {
              goToTripsList(navigate);
            }}
          >
            Go back
          </button>
          <button onClick={goLogout}>Logout</button>
        </ContainerButtons>
        <h3>Travels List</h3>
        <ContainerTrips>
          {isLoading && <p>Loading...</p>}
          {!isLoading && error && <p>{error.message}</p>}
          {!isLoading && trips && trips.length > 0 && tripsList}
          {!isLoading && trips && trips.length === 0 && <p>Não há viagens</p>}
        </ContainerTrips>
      </MainCard>
    </MainContainer>
  );
}

export default ManagementPage;
