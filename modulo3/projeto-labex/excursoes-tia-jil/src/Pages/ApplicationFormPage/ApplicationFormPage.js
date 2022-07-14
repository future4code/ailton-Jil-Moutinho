import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRequestData } from "../../services/useRequestData";
import styled from "styled-components";
import { goBack } from "../../router/Coordinator";
import useForm from "../../components/Hook/useForm";
import axios from "axios";
import { BASE_URL, coutries } from "../../constants/constants";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5rem 10rem auto;
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

function ApplicationPage(params) {
  const navigate = useNavigate();
  const [tripId, setTripId] = useState("");
  const [trips] = useRequestData(`${BASE_URL}/trips`);
  console.log(trips);

  const { form, onChangeForm, cleanFields } = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
  });

  const usePostApply = (event) => {
    event.preventDefault();

    const token = localStorage.getItem("token");

    axios
      .post(`${BASE_URL}/trips/${tripId}/apply`, form, {
        headers: {
          auth: token,
        },
      })
      .then((res) => {
        window.alert("Candidatura enviada!");
        cleanFields();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const tripsAvailable = trips?.map((item) => {
    return (
      <option key={item.id} value={item.id}>
        {item.name}
      </option>
    );
  });

  const onChoseTrip = (event) => {
    setTripId(event.target.value);
  };

  return (
    <MainContainer>
      <Main>
        <form onSubmit={usePostApply}>
          <select
            placeholder="Choose your travel"
            onChange={onChoseTrip}
            required
          >
            <option value="">Choose one travel</option>
            {tripsAvailable}
          </select>
          <input
            name="name"
            value={form.name}
            onChange={onChangeForm}
            pattern={"^.{3,}"}
            title={"Mínimo de 3 caracteres"}
            required
            placeholder="Name"
          />
          <input
            name="age"
            value={form.age}
            onChange={onChangeForm}
            min={18}
            title={"Idade mínima18 anos"}
            required
            placeholder="Age"
          />
          <input
            name="applicationText"
            value={form.applicationText}
            onChange={onChangeForm}
            pattern={"^.{30,}"}
            title={"Mínimo de 30 caracteres"}
            required
            placeholder="Why do you want to apply?"
          />
          <input
            name="profession"
            value={form.profession}
            onChange={onChangeForm}
            pattern={"^.{10,}"}
            title={"Mínimo de 10 caracteres"}
            required
            placeholder="Profession"
          />
          <select
            name="country"
            value={form.country}
            onChange={onChangeForm}
            required
            placeholder="Country"
          >
            <option value={""}>Escolha um país</option>
            {coutries.map((item) => {
              return (
                <option value={item} key={item}>
                  {item}
                </option>
              );
            })}
          </select>
          <button>Enviar</button>
        </form>
        <button
          onClick={() => {
            goBack(navigate);
          }}
        >
          Voltar
        </button>
      </Main>
    </MainContainer>
  );
}
export default ApplicationPage;
