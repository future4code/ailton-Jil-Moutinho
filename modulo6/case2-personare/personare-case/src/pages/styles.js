import styled, { keyframes } from "styled-components";
import { lightGreyPersonare } from "../constants/colors";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
`;

export const ContaiRegister = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2% auto;
  border: 1px solid ${lightGreyPersonare};
  border-radius: 2rem;
  box-shadow: 2px 2px 8px 0 ${lightGreyPersonare};
  padding: 4%;
  width: 70%;
`;

export const ContainDraw = styled(ContaiRegister)`
  flex-direction: row;
  gap: 2%;
`;
