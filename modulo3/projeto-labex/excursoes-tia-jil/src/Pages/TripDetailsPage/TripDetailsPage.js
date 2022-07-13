import React, { useState } from "react";
import styled from "styled-components";
import { BASE_URL } from "../../constants/constants";
import { useRequestDetails } from "../../services/useRequestDetails.js";
import { useNavigate } from "react-router-dom";
import { goBack } from "../../router/Coordinator";
import { useProtectedPage } from "../../components/Hook/customHook";

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
  const navigate = useNavigate();
  useProtectedPage();
  const [approvedByManager, setApprove] = useState(false);

  const [trip, isLoading, error] = useRequestDetails(`${BASE_URL}/trip/${id}`);

  console.log(trip);

  const candidates = trip.candidate.map((item, i) => {
    return (
      <li key={i}>
        {item}
        <button onClick={() => setApprove(true)}>Approve</button>
        <button>Fail</button>
      </li>
    );
  });

  const approved = trip.approved.map((item, i) => {
    return <li key={i}>{item}</li>;
  });

  return (
    <MainContainer>
      <Main>
        <h3>Travels List</h3>
        <main>
          <p>Descrição da viagem</p>
        </main>
        <button
          onClick={() => {
            goBack(navigate);
          }}
        >
          Go back
        </button>
        <h3>Pending Candidates</h3>
        {isLoading && <p>Loading...</p>}
        {!isLoading && error && <p>{error.message}</p>}
        {!isLoading && trip && candidates}
        <h3>Approved candidate</h3>
        {approved}
      </Main>
    </MainContainer>
  );
}

export default TripDetailsPage;
