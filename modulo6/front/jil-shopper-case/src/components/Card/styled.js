import styled from "styled-components";
import { greenShopper } from "../../constants/colors";

export const Container = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  align-items: center;
  width: 95%;
  gap: 12px;
  padding: 12px;
`;

export const ItemCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 250px;
  width: 200px;
  border-radius: 6px;
  border: 1px solid #ccc6c6;
  box-shadow: 6px 6px #ccc6c6;
  background-color: white;
  color: #666666;
  padding: 16px;
  font-size: small;
  img {
    height: 40px;
  }
  :hover {
    border: 1px solid #666666;
    box-shadow: 10px 10px #ccc6c6;
    img {
      height: 50px;
    }
  }
`;

export const Pgreen = styled.p`
  color: ${greenShopper};
  font-size: large;
  margin-left: 4px;
`;

export const Button = styled.button`
  width: 90px;
  height: 31px;
  color: ${greenShopper};
  border: solid 1px ${greenShopper};
  border-radius: 8px 0 8px 0;
  font-size: 12px;
  letter-spacing: 0.3px;
  margin-top: 16px;
  :hover {
    border: 1px solid ${greenShopper};
    background-color: ${greenShopper};
    color: white;
  }
`;

export const DivPrice = styled.div`
  display: flex;
  align-items: center;
`;
