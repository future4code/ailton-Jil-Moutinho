import styled from "styled-components";
import {
  blueShopper,
  greenShopper,
  greyShopper,
  lightGreyShopper,
} from "../../constants/colors";

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  width: 394px;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 8px;
  margin: 2px;
`;

export const ItemCard = styled.div`
  display: flex;
  padding: 4px;
  margin-top: 2px;
  width: 390px;
  border: 1px solid ${greenShopper};
  border-radius: 8px;
  img {
    width: 100px;
  }
`;

export const DivQty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 30px;
  border-radius: 16px;
  border: solid 1px ${greyShopper};
  color: #666666;
`;

export const DivPrice = styled.div`
  width: 250px;
  display: flex;
  justify-content: space-between;
`;

export const DivUnits = styled.div`
  display: flex;
  img {
    width: 30px;
    height: 30px;
  }
`;

export const Pgreen = styled.p`
  color: ${greenShopper};
  font-size: large;
  margin-left: 4px;
`;

export const GarbageImg = styled.img`
  height: 30px;
  margin: 4px;
`;
