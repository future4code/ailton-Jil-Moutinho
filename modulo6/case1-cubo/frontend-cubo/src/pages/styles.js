import styled from "styled-components";
import { greyCubo } from "../constants/colors";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin: 0 auto;
`;

export const Container = styled(MainContainer)`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 2%;
  width: 90%;
  margin-top: 1%;
  overflow: hidden;
  @media screen and (max-width: 480px) {
    flex-direction: column;
    font-size: small;
  }
`;

export const TradeContainer = styled(Container)`
border: solid 1px gray;
padding: 1%;
padding-top: 1%;
margin-top: 1%;
align-items: center;
width: 40%;
gap: 3%;
`;

export const GoRegister = styled.p`
cursor: pointer;
`;

export const GifDiv = styled.img`
  height: 80vh;
  width: 100vw;
`;

export const RowDiv = styled.div`
  display: grid;
  grid-template-columns: 26% 26% 26% 22%;
  color: ${greyCubo};
  width: 95%;
`;

export const MemberInfo = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 10px;
  text-align: center;
`;