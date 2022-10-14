import styled, { keyframes } from "styled-components";
import { greenShopper, blueShopper } from "../constants/colors";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ProductsContainer = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  margin-bottom: 16px;
`;

export const MiddleContainer = styled.div`
  width: 50%;
  height: 310px;
  border: 1px solid ${greenShopper};
  box-shadow: 6px 6px ${blueShopper};
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 20px;
`;

const BounceAnimation = keyframes`
  0% { margin-top: 0; }
  50% { margin-top: 10px }
  100% { margin-top: 0 }
`;

export const DivImageDelivery = styled.div`
height: 140px;
img {
    width: 75%;
    animation: ${BounceAnimation} 0.5s linear infinite;
  }
`;

export const LoadingGif = styled.img`
  width: 200px;
  margin: auto;
`;
