import styled from "styled-components";
import Fundo from "./img/astronauta.jpeg";

export const General = styled.div`
  background-image: url(${Fundo});
  background-size: cover;
  height: 100%;
  display: flex;
  flex-direction: end;
`;
export const DrawCard = styled.div`
  border: 5px solid silver;
  border-radius: 20px;
  margin: 5vh 5vw 10vh 70vw;
  width: 22vw;
  height: 80vh;
  background-color: black;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 75px;
`;
export const HeadersImagens = styled.img`
  height: 70px;
  border-radius: 20px 20px 0 0;
  :hover {
    box-shadow: 0 0 2em gold;
    height: 81px;
  }
  :active {
    opacity: 0.9;
  }
`;
