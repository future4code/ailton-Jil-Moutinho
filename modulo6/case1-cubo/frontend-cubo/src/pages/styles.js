import styled, { keyframes } from "styled-components";
import { blueCubo, greyCubo } from "../constants/colors";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
`;

export const Container = styled(MainContainer)`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 2%;
  width: 90%;
  /* @media screen and max{
    
  } */
`;

export const MemberDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 0.5px solid ${greyCubo};
  width: 95%;
  padding: 1.5%;
`;
