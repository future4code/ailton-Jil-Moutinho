import React from "react";
import styled from "styled-components";
import { BASE_URL } from "../../constants/constants";
import { useRequestDetails } from "../../services/useRequestDetails";
/* import { useDecideCandidate } from "../../services/useDecideCandidate"; */
import { useNavigate, useParams } from "react-router-dom";
import { goBack } from "../../router/Coordinator";
import { useProtectedPage } from "../../components/Hook/customHook";
import axios from "axios";

const MainContainer = styled.div`
  background-color: lightblue;
  height: 100vh;
  padding: 12px;
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

function TripDetailsPage() {
  const navigate = useNavigate();
  const params = useParams();
  const token = localStorage.getItem("token");

  useProtectedPage();

  const [tripDetails, getDetails] = useRequestDetails(
    `${BASE_URL}/trip/${params.id}`
  );

  const decisionYes = (item, yesOrNo) => {
    const body = {
      approve: yesOrNo,
    };
    axios
      .put(
        `${BASE_URL}/trips/${params.id}/candidates/${item.id}/decide`,
        body,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((res) => {
        /* if */
        window.alert("Candidato já analisado!");
        getDetails(`${BASE_URL}/trip/${params.id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const candidates = tripDetails.candidates?.map((item) => {
    return (
      <div key={item.id}>
        <p>{item.name}</p>
        {/* {item.age}</p>
        {item.country}
        {item.profession}
        {item.applicationText} */}
        <div>
          <button onClick={() => decisionYes(item, true)}>Approve</button>

          <button onClick={() => decisionYes(item, false)}>Fail</button>
        </div>
      </div>
    );
  });

  const approvedCandidates = tripDetails.approved?.map((item) => {
    return <li key={item.id}>{item.name}</li>;
  });

  return (
    <MainContainer>
      <Main>
        <h3>Travels List</h3>
        <main>
          <p>
            <strong>Name: </strong>
            {tripDetails.name}
          </p>
          <p>
            <strong>Planet: </strong>
            {tripDetails.planet}
          </p>
          <p>
            <strong>Description: </strong>
            {tripDetails.description}
          </p>
          <p>
            <strong>Date: </strong>
            {tripDetails.date}
          </p>
          <p>
            <strong>DurationInDays: </strong>
            {tripDetails.durationInDays}
          </p>
        </main>
        <button
          onClick={() => {
            goBack(navigate);
          }}
        >
          Go back
        </button>
        <h3>Pending Candidates</h3>
        {candidates}
        <h3>Approved candidate</h3>
        {approvedCandidates}
      </Main>
    </MainContainer>
  );
}

export default TripDetailsPage;
