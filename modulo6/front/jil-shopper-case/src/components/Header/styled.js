import styled from "styled-components";
import { blueShopper, greenShopper } from "../../constants/colors";

export const Container = styled.header`
  background-image: linear-gradient(to top, #666666, #eaeaea, white);
  display: flex;
  padding: 10px;
  justify-content: space-between;
  width: 100%;
`;

export const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  border-radius: 12px;
  margin: 5px;
  img {
    width: 200px;
    border-radius: 12px;
  }
`;

export const CartDiv = styled.div`
  display: flex;
  align-items: center;
  background-color: ${blueShopper};
  padding: 10px;
  border-radius: 6px;
  color: white;
  img {
    height: 4rem;
  }
  :hover{
    cursor: pointer;
  }
`;

export const BalanceDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: space-around;
  border-radius: 6px;
  color: white;
`;

export const SearchInput = styled.input`
  width: 400px;
  height: 42px;
  padding: 10px;
  border-radius: 40px;
  overflow: hidden;
  position: absolute;
  border: none;
`;
export const Button = styled.button`
  width: 90px;
  height: 42px;
  color: white;
  background-color: ${greenShopper};
  border-radius: 40px;
  font-size: 12px;
  letter-spacing: 0.3px;
  position: absolute;
  margin-left: 310px;
  border: none;
`;

export const SearchDiv = styled.div`
  width: 400px;
  height: 42px;
`;

export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 650px;
  height: 42px;
`;

export const InputStyled = styled.input`
  width: 195px;
  height: 42px;
  border-radius: 40px;
  padding: 16px;
  border: none;
  justify-content: space-between;
`;

export const LabelStyled = styled.label`
  position: relative;
  width: 100px;
  top: -12px;
  left: -182px;
  padding: 4px;
  //background-color: white;
  border-radius: 8px;
  font-size: 10px;
  letter-spacing: -0.29px;
  color: #666666;
  z-index: 1;
`;

export const InputsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 700px;
`;

export const ButtonUser = styled(Button)`
  margin-left: 400px;
`;

export const BalanceP = styled.p`
font-weight: 800;
font-size: large;
`;
