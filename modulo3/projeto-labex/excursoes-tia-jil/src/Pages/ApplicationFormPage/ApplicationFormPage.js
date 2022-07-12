import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { goBack } from "../../router/Coordinator";

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

  return (
    <MainContainer>
      <Main>
        <input placeholder="Choose your travel" />
        <input placeholder="Name" />
        <input placeholder="Age" />
        <input placeholder="Why do you want to apply?" />
        <input placeholder="Profession" />
        <input placeholder="Country" />
        <div>
          <button>Enviar</button>
          <button
            onClick={() => {
              goBack(navigate);
            }}
          >
            Voltar
          </button>
        </div>
      </Main>
    </MainContainer>
  );
}
export default ApplicationPage;
