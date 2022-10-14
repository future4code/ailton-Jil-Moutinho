import styled from "styled-components";
import {
  greenShopper,
  lightGreyShopper,
  greyShopper,
  blueShopper,
} from "../../constants/colors";

export const Container2 = styled.header`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: fit-content;
  background-color: whitesmoke;
  border-radius: 0 0 8px 8px;
  border: 1px solid ${greenShopper};
  color: ${greyShopper};
  box-shadow: 12px ${lightGreyShopper};
  //z-index: 0;
`;

export const Button = styled.button`
  width: 399px;
  height: 40px;
  margin-top: 2px;
  padding: 8px;
  color: white;
  border-radius: 0 0 8px 8px;
  border: none;
  font-size: medium;
  letter-spacing: -0.29px;
  background-color: ${greenShopper};
  :hover {
    background-color: ${blueShopper};
  }
`;

export const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2px;
  width: 400px;
`;

export const DivInfoWithIcon = styled.div`
  display: flex;
  align-items: center;
  margin: 2px;
  padding: 2px;
  width: 394px;
  border: 1px solid ${lightGreyShopper};
  flex-wrap: nowrap;
  img {
    width: 30px;
    margin-right: 8px;
  }
  p {
    flex-wrap: nowrap;
    width: 250px;
    text-align: left;
  }
`;
export const ImgPay = styled.img`
  width: 30px;
  height: 40px;
`;

export const ContainerCheck = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`;
export const Method = styled.label`
  display: flex;
  margin-left: 10px;
  margin-bottom: 4px;
  padding-bottom: 4px;
  span {
    margin-left: 6px;
  }
`;
