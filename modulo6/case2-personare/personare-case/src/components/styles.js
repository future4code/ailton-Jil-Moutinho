import styled from "styled-components";
import { lightGreyPersonare } from "../constants/colors";

export const Container = styled.header`
  background-image: linear-gradient(to top, #666666, #eaeaea, white);
  display: flex;
  padding: 0.625rem;
  justify-content: space-between;
  width: 100%;
  @media screen and (max-width: 480px) {
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
  }
`;

export const ContainerFooter = styled(Container)`
  background-image: linear-gradient(to bottom, #666666, #eaeaea, white);
`;

export const ContainerCards = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  padding: 3%;
  width: 100%;
  border: 1px solid ${lightGreyPersonare};
  border-radius: 2rem;
  box-shadow: 2px 2px 8px 0 ${lightGreyPersonare};
`;
