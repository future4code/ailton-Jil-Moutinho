import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goBack } from "../../router/Coordinator";
import { useProtectedPage } from "../../components/Hook/customHook";
import useForm from "../../components/Hook/useForm";
/* import { useCreateTrip } from '../../services/useCreateTrip' */
import axios from "axios";
import { BASE_URL, planets } from "../../constants/constants";
import Fundo from "../../assets/img/fundoespaco.jpeg";
import Fundo2 from "../../assets/img/fundoLogin.jpeg";
/* import { useRequestData } from "../../services/useRequestData";
import { BASE_URL } from "../../constants/constants"; */

const GlobalList = styled.div`
  display: flex;
  justify-content: center;
  background-image: url(${Fundo});
  background-size: cover;
  height: 100vh;
`;
const Main = styled.div`
  color: white;
  text-shadow: 0.2rem 0.2rem 0.5rem #ff00ff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 5vh auto;
  border: 4px solid lightblue;
  border-radius: 10px;
  padding: 2rem;
  background-image: url(${Fundo2});
  background-size: contain;
  height: 70vh;
  box-shadow: 1rem 0.2rem 2rem #ff00ff;
  input,
  select {
    display: flex;
    align-self: center;
    width: 40rem;
    border-radius: 10px;
    margin: 1vh;
    height: 2rem;
    :hover {
      box-shadow: 0.2rem 0.2rem 2rem #ff00ff, inset 0 0 0.5em #ff00ff;
    }
  }
  button {
    height: 2rem;
    width: 8rem;
    margin: 1rem;
    border-radius: 10px;
    background-color: lightgrey;
    box-shadow: 5px 5px 10px blue;
    :hover {
      height: 2.2rem;
      width: 8.2rem;
      opacity: 1;
      background-color: grey;
      color: white;
    }
  }
`;

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
    <GlobalList>
      <Main>
        <h2>Create Trip</h2>
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
      </Main>
    </GlobalList>
  );
}
export default CreateTripPage;
