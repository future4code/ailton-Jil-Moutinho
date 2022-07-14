import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { goBack, goToManagement } from "../../router/Coordinator";
import styled from "styled-components";
import axios from "axios";
import { BASE_URL } from "../../constants/constants";
import { useLoginDone } from "../../components/Hook/customHook";

const MainContainer = styled.div`
  background-color: black;
  height: 100vh;
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem auto;
  border: 4px solid grey;
  border-radius: 10px;
  padding: 2rem;
  background-color: lightblue;
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

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useLoginDone();

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const submitLogin = () => {
    const body = {
      email: email,
      password: password,
    };

    axios
      .post(`${BASE_URL}/login`, body)
      .then((res) => {
        console.log("Deus Certo! Seu token é: ", res.data.token);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", email);
        goToManagement(navigate);
      })
      .catch((error) => {
        console.log("Deu errado... O erro foi: ", error.response);
      });
  };

  return (
    <MainContainer>
      <Main>
        <p>Login</p>
        <input
          placeholder="E-mail"
          type={email}
          value={email}
          onChange={onChangeEmail}
          required
        />
        <input
          placeholder="Password"
          value={password}
          onChange={onChangePassword}
          required
        />
        <button onClick={submitLogin}>Send</button>
        <button
          onClick={() => {
            goBack(navigate);
          }}
        >
          Go back
        </button>
        <button
          onClick={() => {
            goToManagement(navigate);
          }}
        >
          Management
        </button>
      </Main>
    </MainContainer>
  );
}

export default LoginPage;
