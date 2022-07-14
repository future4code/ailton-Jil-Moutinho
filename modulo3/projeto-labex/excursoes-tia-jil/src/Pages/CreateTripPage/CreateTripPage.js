import React from "react";
import { useNavigate } from "react-router-dom";
import { goBack } from "../../router/Coordinator";
import { useProtectedPage } from "../../components/Hook/customHook";
import useForm from "../../components/Hook/useForm";
/* import { useCreateTrip } from '../../services/useCreateTrip' */
import axios from "axios";
import { BASE_URL, planets } from "../../constants/constants";
/* import { useRequestData } from "../../services/useRequestData";
import { BASE_URL } from "../../constants/constants"; */

function CreateTripPage() {
  const navigate = useNavigate();
  useProtectedPage();

  const { form, onChangeForm, cleanFields } = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  });

  const useCreateTrip = (event) => {
    event.preventDefault();

    const token = localStorage.getItem("token");

    axios
      .post(`${BASE_URL}/trips`, form, {
        headers: {
          auth: token,
        },
      })
      .then((res) => {
        window.alert("Viagem cadastrada!");
        /* useRequestDetails(); */
        cleanFields();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const today = new Date();
  const stringToday =
    today.getFullYear() +
    "-" +
    ("0" + (today.getMonth() + 1)).substr(-2) +
    "-" +
    ("0" + today.getDate()).substr(-2);

  return (
    <div>
      <h3>Create Trip</h3>
      <form onSubmit={useCreateTrip}>
        <input
          name="name"
          value={form.name}
          onChange={onChangeForm}
          placeholder="Name"
          pattern={"^.{5,}"}
          title={"Mínimo de 5 letras"}
          required
        />
        <select
          name="planet"
          value={form.planet}
          onChange={onChangeForm}
          placeholder="Select a planet"
          required
        >
          <option value={""}>Choose a planet</option>
          {planets.map((item) => {
            return (
              <option value={item} key={item}>
                {item}
              </option>
            );
          })}
        </select>
        <input
          name="date"
          value={form.date}
          onChange={onChangeForm}
          type="date"
          placeholder="Date"
          min={stringToday}
          title={"Deve ser uma data no futuro"}
          required
        ></input>
        <input
          name="description"
          value={form.description}
          onChange={onChangeForm}
          placeholder="Description of the trip"
          pattern={"^.{30,}"}
          title={"Mínimo de 30 caracteres"}
          required
        ></input>
        <input
          name="durationInDays"
          value={form.durationInDays}
          onChange={onChangeForm}
          type={"number"}
          placeholder="Duration in days"
          min={50}
          title={"Mínimo de 30 letras"}
          required
        ></input>
        <div>
          <button>Create</button>
        </div>
      </form>
      <button
        onClick={() => {
          goBack(navigate);
        }}
      >
        Go back
      </button>
    </div>
  );
}
export default CreateTripPage;
