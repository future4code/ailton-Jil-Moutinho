import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { goBack, goToManagement } from "../../router/Coordinator";
import styled from "styled-components";
import axios from "axios";
import Fundo from "../../assets/img/fundoespaco.jpeg";
import FundoCard from "../../assets/img/fundoLogin.jpeg";
/* import { RiArrowGoBackFill } from "react-icons/ri"; */
import { BASE_URL } from "../../constants/constants";
import { useLoginDone } from "../../components/Hook/customHook";

const MainContainer = styled.div`
  background-image: url(${Fundo});
  height: 100vh;
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Main = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem auto;
  border: 4px solid grey;
  border-radius: 10px;
  padding-top: 2rem;
  background-image: url(${FundoCard});
  background-size: cover;
  width: 40rem;
  height: 22rem;
  text-shadow: 0.2rem 0.2rem 0.5rem #ff00ff;
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
    box-shadow: 5px 5px 5px #ff00ff;
    :hover {
      height: 2.2rem;
      width: 8.2rem;
      opacity: 1;
      background-color: grey;
      color: white;
    }
  }
`;
const GoBack = styled.div`
  img {
    height: 1.2rem;
    margin-right: 1rem;
  }
  display: flex;
  width: 100%;
  justify-content: start;
  margin-top: 2rem;
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
        window.alert(
          "Infelizmente você não tem acesso para a área de Astronautas Administradores!"
        );
      });
  };

  return (
    <MainContainer>
      <Main>
        <h3>Login</h3>
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
            goToManagement(navigate);
          }}
        >
          Management
        </button>
        <GoBack>
          <button
            onClick={() => {
              goBack(navigate);
            }}
          >
            <img
              src={
                "https://img.icons8.com/external-simple-solid-edt.graphics/2x/external-Back-arrows-simple-solid-edt.graphics-3.png"
              }
              alt={"voltar"}
            />
            Go back
          </button>
        </GoBack>
      </Main>
    </MainContainer>
  );
}

export default LoginPage;
