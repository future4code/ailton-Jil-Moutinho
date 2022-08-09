import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRequestData } from "../../services/useRequestData";
import styled from "styled-components";
import { goBack } from "../../router/Coordinator";
import useForm from "../../components/Hook/useForm";
import axios from "axios";
import Fundo from "../../assets/img/fundoespaco.jpeg";
import Fundo2 from "../../assets/img/fundoLogin.jpeg";
import { BASE_URL, coutries } from "../../constants/constants";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  background-image: url(${Fundo});
  background-size: cover;
  height: 100vh;
`;
const Main = styled.div`
  color: white;
  text-shadow: 0.5rem 0.5rem 0.5rem #ff00ff;
  background-image: url(${Fundo2});
  background-size: contain;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5vh auto;
  border: 4px solid grey;
  border-radius: 10px;
  box-shadow: 1rem 0.2rem 2rem #ff00ff;
  padding-top: 2vh;
  height: 70vh;
  width: 50vw;
  input,
  select {
    margin: 1vh;
    display: flex;
    width: 35vw;
    border-radius: 5px;
    height: 4vh;
    :hover {
      box-shadow: 0.2rem 0.2rem 2rem #ff00ff, inset 0 0 0.5em #ff00ff;
    }
  }
  button {
    height: 5vh;
    width: 8vw;
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
const DivButton = styled.div`
  width: 100%;
  display: flex;
`;

function ApplicationPage(params) {
  const navigate = useNavigate();
  const [tripId, setTripId] = useState("");
  const [trips] = useRequestData(`${BASE_URL}/trips`);

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
        <h2>Application Form</h2>
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
        <DivButton>
          <button
            onClick={() => {
              goBack(navigate);
            }}
          >
            Voltar
          </button>
        </DivButton>
      </Main>
    </MainContainer>
  );
}
export default ApplicationPage;
