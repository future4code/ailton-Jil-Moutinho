import styled from "styled-components";
import { lightGreyPersonare, orangePersonare } from "../constants/colors";

export const Container = styled.header`
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
  background-image: linear-gradient(to bottom, #666666, #eaeaea, white, white);
  margin-top: 2%;
  padding-top: 2rem;
  gap: 10%;
  height: 140px;
`;

export const FooterPainel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 350px;
  height: 110px;
`;

export const ContainIcons = styled.div`
  flex-direction: row;
  align-items: flex-start;
  justify-content: start;
  width: 240px;
  img {
    width: 75px;
    border-radius: 50%;
    :hover {
      box-shadow: 0 0 1rem 0 ${orangePersonare};
      cursor: pointer;
    }
  }
`;

export const CopyStyles = styled.img`
  width: 4%;
`;

export const ContainerCards = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  gap: 1%;
  width: 100%;
`;

export const ContainCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1%;
  width: 10rem;
  height: 18rem;
  img {
    height: 90%;
    box-shadow: 2px 4px 10px 0 grey;
    border-radius: 4px;
  }
  :hover {
    img {
      height: 95%;
      box-shadow: 0 8px 20px 0 grey;
      rotate: -10deg;
    }
  }
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
      width: 85px;
      cursor: pointer;
    }
  }
`;
