import React from "react";
import axios from "axios";
import styled from "styled-components";
import Fundo from "../../assets/img/fundoneon.jpeg";
import Yes from "../../assets/img/yes.jpeg";
import No from "../../assets/img/no.jpeg";
import Astro from "../../assets/img/astro.jpeg";
import { BASE_URL } from "../../constants/constants";
import { useRequestDetails } from "../../services/useRequestDetails";
import { useNavigate, useParams } from "react-router-dom";
import { goBack } from "../../router/Coordinator";
import { useProtectedPage } from "../../components/Hook/customHook";

const MainContainer = styled.div`
  background-image: url(${Fundo});
  background-size: cover;
  display: flex;
  justify-content: center;
  height: 100vh;
  color: white;
`;
const MainCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 85vh;
  overflow-y: auto;
  margin: 2vh auto;
  border: 4px solid grey;
  border-radius: 10px;
  padding: 3vh;
  background-color: black;
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
const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5vh;
  li {
    /* list-style-image: url(${Astro}); */
    list-style-type: none;
  }
  img {
    height: 4vh;
    border-radius: 5px;
    border-right: solid 1px grey;
    border-bottom: solid 1px grey;
    margin-left: 4px;
  }
`;
const Candidate = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid grey;
  width: 100%;
`;

function TripDetailsPage() {
  const navigate = useNavigate();
  const params = useParams();
  const token = localStorage.getItem("token");

  useProtectedPage();

  const [tripDetails, getDetails] = useRequestDetails(
    `${BASE_URL}/trip/${params.id}`
  );

  const decision = (item, yesOrNo) => {
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
        window.alert("Candidato analisado!");
        getDetails(`${BASE_URL}/trip/${params.id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const candidates = tripDetails.candidates?.map((item) => {
    return (
      <Candidate key={item.id}>
        {item.name}
        <div>
          <img
            src={Yes}
            alt={"Check - Sim"}
            onClick={() => decision(item, true)}
          />
          <img src={No} alt={"X - Nãp"} onClick={() => decision(item, false)} />
        </div>
      </Candidate>
    );
  });

  const approvedCandidates = tripDetails.approved?.map((item) => {
    return <li key={item.id}>{item.name}</li>;
  });

  return (
    <MainContainer>
      <MainCard>
        <Details>
          <h3>Travel Details</h3>
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

          <h3>Pending Candidates</h3>
          {candidates}
          <h3>Approved candidate</h3>
          {approvedCandidates}
        </Details>
        <button
          onClick={() => {
            goBack(navigate);
          }}
        >
          Go back
        </button>
      </MainCard>
    </MainContainer>
  );
}

export default TripDetailsPage;
