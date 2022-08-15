import React, { useEffect } from "react";
import Heart from "../../img/loadingHeart.gif";
import {ChoosenContainer, ChoosenList, ButtonClear, Loading} from './Styled'

export default function ChoosenCard({ clear, getChoosen, choosenProfiles }) {
  useEffect(() => {
    getChoosen();
  }, []);

  return (
    <ChoosenContainer>
      <ChoosenList>
        {(choosenProfiles.length !== 0) ? (choosenProfiles.map((choosen, index) => {
          return (
            <li key={index}>
              <img src={choosen.photo} alt={choosen.name} />
              <span>{choosen.name}</span>
            </li>
          );
        })):(
        <Loading src={Heart} alt={"Loading heart..."} />)}
      </ChoosenList>
      <ButtonClear onClick={() => clear()}>
        Limpa lista de escolhidos
      </ButtonClear>
    </ChoosenContainer>
  );
}
