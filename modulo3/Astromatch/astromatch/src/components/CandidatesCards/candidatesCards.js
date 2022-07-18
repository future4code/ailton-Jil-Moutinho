import axios from "axios";
import React, { useEffect, useState } from "react";
import Liked from "../../img/Like.png";
import Nop from "../../img/nop.png";
import Heart from "../../img/loadingHeart.gif";
import {
  InternalCard,
  ImgButton,
  ButtonContainer,
  ButtonClear,
  Loading,
} from "./Styled";

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
        {currentProfile ? (
          <div>
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
          </div>
        ) : (
          <Loading src={Heart} alt={"Loading heart..."} />
        )}
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
