import styled, { keyframes } from "styled-components";
import {
  bluePersonare,
  lightGreyPersonare,
  pinkPersonare,
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
  margin: 0 4%;
  border-bottom: 3px solid ${pinkPersonare};
  padding: 3%;
  width: 90%;
`;

export const ContaiRegister = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4% auto 0;
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
