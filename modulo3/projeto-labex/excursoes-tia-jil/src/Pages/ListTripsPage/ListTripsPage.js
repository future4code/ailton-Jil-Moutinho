import React from "react";
import { BASE_URL } from "../../constants/constants";
import { useRequestData } from "../../services/useRequestData";
import { useNavigate } from "react-router-dom";
import { goToApplication } from "../../router/Coordinator";
import HeaderContainer from "../../components/Header";
import styled from "styled-components";

const GlobalList = styled.div`
  background-color: black;
  height: 100vh;
  padding: 12px;
  button {
    height: 2rem;
    width: 8rem;
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
const TripsCard = styled.div`
  height: 15rem;
  width: 20rem;
  background-color: lightblue;
  border-radius: 15px;
  padding: 4px;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* img {
    width: 16rem;
    margin-left: 12px;
  } */
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

function ListTripsPage() {
  const navigate = useNavigate();
  const [trips, isLoading, error] = useRequestData(`${BASE_URL}/trips`);

  const tripsDataList =
    trips &&
    trips.map((item) => {
      return (
        <TripsCard key={item.id}>
          <p>
            <strong>Name: </strong>
            {item.name}
          </p>
          <p>
            <strong>Description: </strong>
            {item.description}
          </p>
          <p>
            <strong>Planet: </strong>
            {item.planet}
          </p>
          <p>
            <strong>Duration (in days): </strong>
            {item.durationInDays}
          </p>
          <p>
            <strong>Date: </strong>
            {item.date}
          </p>
        </TripsCard>
      );
    });

  return (
    <GlobalList>
      <HeaderContainer />
      <main>
        <h3>Lista de pacotes</h3>
        <button onClick={() => goToApplication(navigate)}>Subscript</button>
        {isLoading && <p>Loading...</p>}
        {!isLoading && error && <p>{error.message}</p>}
        {!isLoading && trips && trips.length > 0 && tripsDataList}
        {!isLoading && trips && trips.length === 0 && <p>Não há viagens</p>}
      </main>
    </GlobalList>
  );
}

export default ListTripsPage;
