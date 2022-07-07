import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Liked from "../img/Like.png";
import Nop from "../img/nop.png";

const InternalCard = styled.div`
  color: white;
  margin: 2px 2px;
  height: 58vh;
  p {
    font-size: 2.5vh;
  }
  #photoProfile {
    height: 30vh;
    width: 18vw;
    object-fit: cover;
    object-position: top;
    overflow-y: hidden;
    border-radius: 10px;
    box-shadow: 0 0 2em gold;
    margin: 5px 25px auto;
  }
`;
const ImgButton = styled.img`
  height: 45px;
  border-radius: 10px;
  :hover {
    height: 50px;
    box-shadow: 0 0 2em gold;
  }
  :active {
    opacity: 0.9;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;
const ButtonClear = styled.button`
  color: red;
  border-radius: 10px;
  box-shadow: 0 0 2em red;
  margin: 5px 46px;
  align-items: center;
  :hover {
    color: white;
    background-color: red;
  }
  :active {
    opacity: 0.9;
  }
`;

export default function CandidatesCard({ clear }) {
  const [currentProfile, setCurrentProfile] = useState({});

  useEffect(() => {
    getCandidates();
  }, []);

  const getCandidates = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jil-moutinho-ailton/person"
      )
      .then((res) => {
        setCurrentProfile(res.data.profile);
      })
      .catch((err) => {
        console.log(`Deu ruim! Erro: ${err}`);
      });
  };

  const choosePerson = (id, choice) => {
    const body = {
      id: id,
      choice: choice,
    };

    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jil-moutinho-ailton/choose-person",
        body
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.isMatch) {
          alert("Deu match!");
        }
        getCandidates();
      })
      .catch((err) => {
        console.log(`Deu ruim! Erro ${err}`);
      });
  };

  return (
    <div>
      <InternalCard>
        <img
          id="photoProfile"
          src={currentProfile.photo}
          alt={currentProfile.photo_alt}
        />
        <br />
        <p>
          <strong>{currentProfile.name}</strong>, {currentProfile.age}
        </p>
        <p>{currentProfile.bio}</p>
        <ButtonContainer>
          <ImgButton
            src={Nop}
            onClick={() => choosePerson(currentProfile.id, false)}
          />
          <ImgButton
            src={Liked}
            onClick={() => choosePerson(currentProfile.id, true)}
          />
        </ButtonContainer>
      </InternalCard>
      <ButtonClear onClick={() => clear()}>
        Limpa lista de escolhidos
      </ButtonClear>
    </div>
  );
}
