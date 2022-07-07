import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ChoosenContainer = styled.div`
  color: white;
  margin-top: 10px;
  justify-content: center;
  li {
    width: 90%;
    border: 0.5px solid white;
    box-shadow: 0 0 1em green;
    border-radius: 10px;
    list-style: none;
    color: white;
    align-items: center;
    margin: 3px auto;
    :hover {
      width: 99%;
    }
    img {
      height: 3rem;
      width: 3rem;
      object-fit: cover;
      border-radius: 50%;
      margin-right: 5px;
    }
  }
`;
const ChoosenList = styled.div`
  height: 58vh;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  ::-webkit-scrollbar-track {
    background: none;
  }
  ::-webkit-scrollbar-thumb {
    background-color: green;
    border-radius: 20px;
    border: 3px solid black;
  }
`;
const ButtonClear = styled.button`
  color: red;
  border-radius: 10px;
  box-shadow: 0 0 2em red;
  margin: 10px 46px;
`;

export default function ChoosenCard({ clear, getChoosen, choosenProfiles }) {
  useEffect(() => {
    getChoosen();
  }, []);

  return (
    <ChoosenContainer>
      <ChoosenList>
        {choosenProfiles.map((choosen, index) => {
          return (
            <li key={index}>
              <img src={choosen.photo} alt={choosen.name} />
              <span>{choosen.name}</span>
            </li>
          );
        })}
      </ChoosenList>
      <ButtonClear onClick={() => clear()}>
        Limpa lista de escolhidos
      </ButtonClear>
    </ChoosenContainer>
  );
}
