import styled from "styled-components";
import Fundo from "../../assets/img/fundoTeste2.png";
import { Button } from "@mui/material";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 98vw;
  margin-top: 10vh;
  padding: 8px;
  background-image: url(${Fundo});
  background-size: cover;
  height: 88vh;
  @media screen and (max-width: 480px) {
    background-color: white;
    background-image: none;
    height: auto;
  }
`;

export const LogoImgStyled = styled.img`
  width: 250px;
  margin-bottom: 15px;
`;
export const LoginButton = styled(Button)`
  width: 300px;
  border-radius: 50px;
  margin-top: 10px;
  margin-bottom: 5px;
  background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
  align-self: center;
  justify-self: center;
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 80vw;
  height: 110px;
  max-width: 450px;
  margin-bottom: 20px;
`;
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80vw;
  height: 170px;
  max-width: 450px;
  margin-bottom: 20px;
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const InputLogin = styled.input`
  height: 40px;
  width: 295px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 5px;
  border: solid 1px gray;
`;
export const ContaiDesk = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  border: 1px solid grey;
  border-radius: 10px;
  box-shadow: 10px 10px 10px #f27649;
  background-color: white;
`;
