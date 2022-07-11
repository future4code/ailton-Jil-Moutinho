import React from "react";
import { BASE_URL } from "../../constants/constants";
import { useRequestData } from "../../components/Hook/useRequestData";

function TripDetailsPage(id) {
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
    <div>
      <div>
        <p>Manager Page</p>
        <button>Criar viagem</button>
        <button>Logout</button>
        <main>
          <h3>Travels List</h3>
          {isLoading && <p>Loading...</p>}
          {!isLoading && error && <p>{error.message}</p>}
          {!isLoading && tripDetail && tripDetail}
        </main>
        <button>Back</button>
        <h3>Pending Candidates</h3>

        <h3>Approved candidate</h3>
      </div>
    </div>
  );
}

export default TripDetailsPage;
