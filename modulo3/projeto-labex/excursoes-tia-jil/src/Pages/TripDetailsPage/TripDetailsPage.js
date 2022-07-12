import React from "react";
import styled from 'styled-components'
import { BASE_URL } from "../../constants/constants";
import { useRequestData } from "../../services/useRequestData";
import { useNavigate } from "react-router-dom";
import { goBack } from "../../router/Coordinator";

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

function TripDetailsPage(id) {
const navigate = useNavigate()

  const [trip, isLoading, error] = useRequestData(`${BASE_URL}/trip` / id);

  const tripDetail = trip && (
    <li>
      {trip.name}
      {trip.description}
      {trip.planet}
      {trip.durationInDays}
      {trip.date}
    </li>
  );

  /*   const [candidates, isLoading, error] = useRequestData(`${BASE_URL}/trip` / id);
  const PendingCandidatesList = candidates && (
    <li>
      {trip.name}
      {trip.description}
      {trip.planet}
      {trip.durationInDays}
      {trip.date}
    </li>
  ); */

  return (
    <MainContainer>
      <Main>
        <h3>Travels List</h3>
        <main>
          {isLoading && <p>Loading...</p>}
          {!isLoading && error && <p>{error.message}</p>}
          {!isLoading && tripDetail && tripDetail}
        </main>
        <button
            onClick={() => {
              goBack(navigate);
            }}
          >
            Go back
          </button>
        <h3>Pending Candidates</h3>
        <p>Funcao candidatos pendentes</p>
        <h3>Approved candidate</h3>
        <p>Funcao candidatos pendentes</p>
      </Main>
    </MainContainer>
  );
}

export default TripDetailsPage;
