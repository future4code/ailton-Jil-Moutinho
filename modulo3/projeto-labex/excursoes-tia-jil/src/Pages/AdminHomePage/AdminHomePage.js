import React, { useEffect } from "react";
import { BASE_URL } from "../../constants/constants";
import { useRequestData } from "../../services/useRequestData";
import { useDelTrips } from "../../services/useDelTrip";
import styled from "styled-components";
import { goToCreatetrip, goBack } from "../../router/Coordinator";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem auto;
  border: 4px solid grey;
  border-radius: 10px;
  padding: 2rem;
  background-color: transparent grey;
  /* width: 40rem; */
  input {
    width: 35rem;
    border-radius: 10px;
    gap: 1rem;
    height: 2rem;
  }
  button {
    height: 2rem;
    width: 8rem;
    margin: 1rem;
    border-radius: 10px;
    background-color: lightgrey;
    box-shadow: 5px 5px 5px blue;
    :hover {
      height: 2.2rem;
      width: 8.2rem;
      opacity: 1;
      background-color: grey;
      color: white;
    }
  }
`;

function ManagementPage() {
  const navigate = useNavigate();
  const [trips, isLoading, error] = useRequestData(`${BASE_URL}/trips/`);

  useEffect(() => {
console.log('Teste');

  }, [trips]);
  
  const tripsList =
    trips &&
    trips.map((item, index) => {
      return (
        <li key={index}>
          {item.name}
          <button>Details</button>
          <button
            onClick={() => {
              if (window.confirm("Esta certo disso?")) {
                axios
                  .delete(`${BASE_URL}/trips/${item.id}`)
                  .then((res) => {
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }
            }}
          >
            Delete
          </button>
        </li>
      );
    });

  return (
    <MainContainer>
      <Main>
        <h3>Travels List</h3>
        <button
          onClick={() => {
            goToCreatetrip(navigate);
          }}
        >
          Create trip
        </button>
        <button
          onClick={() => {
            goBack(navigate);
          }}
        >
          Go back
        </button>
        <button>Logout</button>
        <div>
          {isLoading && <p>Loading...</p>}
          {!isLoading && error && <p>{error.message}</p>}
          {!isLoading && trips && trips.length > 0 && tripsList}
          {!isLoading && trips && trips.length === 0 && <p>Não há viagens</p>}
        </div>
      </Main>
    </MainContainer>
  );
}

export default ManagementPage;
