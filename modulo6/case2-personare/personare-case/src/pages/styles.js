import styled, { keyframes } from "styled-components";
import {
  lightGreyPersonare,
  pinkPersonare,
  orangePersonare,
} from "../constants/colors";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
`;

export const InitialContain = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 3%;
  border-bottom: 3px solid ${pinkPersonare};
  padding: 1% 3%;
  width: 90%;
`;

export const ContaiRegister = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3% auto 0;
  border: 1px solid ${lightGreyPersonare};
  border-radius: 2rem;
  box-shadow: 2px 2px 8px 0 ${lightGreyPersonare};
  padding: 3%;
  width: 90%;
`;

export const ContainDraw = styled(ContaiRegister)`
  flex-direction: row;
  gap: 2%;
`;

export const SuffleDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  height: 120px;
  :hover {
    cursor: pointer;
    font-weight: 800;
    img {
      width: 90px;
    }
  }
`;

export const SuffleStyles = styled.img`
  width: 80px;
`;

export const ContainResult = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4%;
  gap: 10%;
  text-align: justify;
`;

export const GifOut = styled.img`
  width: 90%;
  margin: 0 auto;
  animation: 1.5s ease-out 1 forwards alternate goOut;
  @keyframes goOut {
    0% {
      width: 90%;
    }
    100% {
      width: 0px;
    }
  }
`;

export const GifOutIntro = styled.img`
  width: 100%;
  margin: 0 auto;
  animation: 2s 1s ease-out 1 forwards alternate goOut;
  @keyframes goOut {
    0% {
      width: 100%;
    }
    100% {
      width: 0px;
    }
  }
`;

export const NameInput = styled.input`
  height: 2rem;
  border: 1px solid ${orangePersonare};
  padding: 1%;
  border-radius: 1rem;
  box-shadow: 0 2px 4px 0 ${pinkPersonare};
`;
