import React from "react";
import { BASE_URL } from "../../constants/constants";
import { useRequestData } from "../../components/Hook/useRequestData";

function ListTripsPage({ setPage }) {
  const [trips, isLoading, error] = useRequestData(`${BASE_URL}/trips`);

  const tripsList =
    trips &&
    trips.map((item, index) => {
      return (
        <li key={index}>
          {item.name}
          {item.description}
          {item.planet}
          {item.durationInDays}
          {item.date}
        </li>
      );
    });

  return (
    <div>

      <button onClick={() => setPage("Subscribe")}>Se inscrever</button>
      <main>
        <h3>Lista de pacotes</h3>
        {isLoading && <p>Loading...</p>}
        {!isLoading && error && <p>{error.message}</p>}
        {!isLoading && trips && trips.length > 0 && tripsList}
        {!isLoading && trips && trips.length === 0 && <p>Não há viagens</p>}
      </main>
    </div>
  );
}

export default ListTripsPage;
