import styled from "styled-components";
import { blueCubo, greyCubo } from "../constants/colors";

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  width: 100%;
  height: 110px;
  margin-bottom: 1%;
  background-color: ${blueCubo};
  box-shadow: 0 0 1rem 0 ${greyCubo};
  @media screen and (max-width: 480px) {
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
  }
`;

export const LogoStyles = styled.img`
  width: 10%;
  margin: 0 auto;
  @media screen and (max-width: 480px) {
    width: 34%;
  }
`;

export const ContainerFooter = styled(Container)`
  background-image: linear-gradient(to bottom, #3f3f42, #3f3f42, #eaeaea);
  color: white;
  margin-top: 2%;
  padding-top: 2rem;
  gap: 10%;
  height: 140px;
  box-shadow: none;
  @media screen and (max-width: 480px) {
    height: fit-content;
  }
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 350px;
  height: 110px;
`;

export const ContainIcons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 240px;
  img {
    width: 30px;
    border-radius: 50%;
    :hover {
      box-shadow: 0 0 1rem 0 ${greyCubo};
      cursor: pointer;
    }
  }
`;

