import React from "react";
import { BASE_URL } from "../../constants/constants";
import { useRequestData } from "../../components/Hook/useRequestData";

function AdmPage() {
  const [trips, isLoading, error] = useRequestData(`${BASE_URL}/trips`);

  const tripsList =
    trips &&
    trips.map((item, index) => {
      return (
        <li key={index}>
          {item.name}
          <button>Delete</button>
        </li>
      );
    });

  return (
    <div>
      <div>
        <p>Manager Page</p>
        <button>Criar viagem</button>
        <button>Logout</button>
        <main>
          <h3>Travels List</h3>
          {isLoading && <p>Loading...</p>}
          {!isLoading && error && <p>{error.message}</p>}
          {!isLoading && trips && trips.length > 0 && tripsList}
          {!isLoading && trips && trips.length === 0 && <p>Não há viagens</p>}
          {console.log(trips.trips)}
        </main>
      </div>
    </div>
  );
}

export default AdmPage;
