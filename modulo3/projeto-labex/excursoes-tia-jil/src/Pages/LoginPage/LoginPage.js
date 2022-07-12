import React from "react";
import { useNavigate } from "react-router-dom";
import {goBack, goToManagement} from '../../router/Coordinator'
import styled from 'styled-components'

const MainContainer = styled.div`
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

function LoginPage () {
  const navigate = useNavigate()

    return (
<MainContainer>
    <Main>
        <p>Login</p>
        <input></input>
        <input></input>
        <button>Enviar</button>
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
        )
}

export default LoginPage;