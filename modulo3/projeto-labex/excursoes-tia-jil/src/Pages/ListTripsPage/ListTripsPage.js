import React from "react";
import { BASE_URL } from "../../constants/constants";
import { useRequestData } from "../../services/useRequestData";
import { useNavigate } from "react-router-dom";
import { goToApplication } from "../../router/Coordinator";
import { goToLogin} from "../../router/Coordinator";
import HeaderContainer from '../../components/Header'

function ListTripsPage() {
  const navigate = useNavigate();
  const [trips, isLoading, error] = useRequestData(`${BASE_URL}/trips`);

  const tripsDataList =
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
      <HeaderContainer/>
      <main>
      <button onClick={() => goToLogin(navigate)}>Login</button>
        <h3>Lista de pacotes</h3>
        <button onClick={() => goToApplication(navigate)}>Se inscrever</button>
        {isLoading && <p>Loading...</p>}
        {!isLoading && error && <p>{error.message}</p>}
        {!isLoading && trips && trips.length > 0 && tripsDataList}
        {!isLoading && trips && trips.length === 0 && <p>Não há viagens</p>}
      </main>
    </div>
  );
}

export default ListTripsPage;