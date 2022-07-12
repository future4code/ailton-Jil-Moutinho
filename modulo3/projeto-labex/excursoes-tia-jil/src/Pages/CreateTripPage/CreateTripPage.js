import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { goBack } from "../../router/Coordinator";
import { useRequestData } from "../../services/useRequestData";
import { BASE_URL } from "../../constants/constants";

function CreateTripPage() {
  /* const [trips, isLoading, error] = usePostData(`${BASE_URL}/trips`) */

const navigate = useNavigate()

  const [name, setName] = useState("");
  const [planet, setPlanet] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState(0);

  /*  const {name, planet, date, description, durationInDays} = newTrip */

  return (
    <div>
      <div>
        <h3>Create Trip</h3>

        <input value={setName()} placeholder="Name"></input>
        <select placeholder="Select a planet">
          <option onSelect={setPlanet()}>Terra1</option>
          <option onSelect={setPlanet()}>Terra 2</option>
          <option onSelect={setPlanet()}>Terra 3</option>
          <option onSelect={setPlanet()}>Terra 4</option>
        </select>
        <input value={setDate()} type="date" placeholder="Date"></input>
        <input
          value={setDescription()}
          placeholder="Description of the trip"
        ></input>
        <input value={setDuration()} placeholder="Duration in days"></input>
        <input value={setName()} placeholder="Name"></input>
        <div>
          <button>Create</button>
          <button
            onClick={() => {
              goBack(navigate);
            }}
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  );
}
export default CreateTripPage;
