import styled from "styled-components";
import { lightGreyPersonare } from "../constants/colors";

export const Container = styled.header`
  //background-image: linear-gradient(to top, #666666, #eaeaea, white);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  width: 100%;
  height: 110px;
  margin-bottom: 1%;
  box-shadow: 0 0 1rem 0 ${lightGreyPersonare};
  @media screen and (max-width: 480px) {
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
  }
`;

export const LogoStyles = styled.img`
  width: 12%;
  margin: 0 auto;
`;

export const ContainerFooter = styled(Container)`
  background-image: linear-gradient(to bottom, #666666, #eaeaea, white);
  margin-top: 2%;
`;

export const ContainerCards = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5%;
  width: 100%;
`;

export const ContainResult = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  img {
    width: 80px;
  }
  :hover {
    img {
      width: 90px;
      cursor: pointer;
    }
  }
`;
