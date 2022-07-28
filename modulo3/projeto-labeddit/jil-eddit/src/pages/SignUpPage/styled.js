import styled from "styled-components";
import { Button } from "@mui/material";

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  margin-top: 10px;
  padding: 8px;
`;
export const SignUpButton = styled(Button)`
  width: 300px;
  border-radius: 50px;
  margin-top: 10px;
  margin-bottom: 5px;
  align-self: center;
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 80vw;
  height: 160px;
  max-width: 450px;
  margin-bottom: 20px;
`;
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 80vw;
  height: 300px;
  max-width: 450px;
  margin-top: 50px;
  padding-left: 10px;
  align-items: center;
  p {
    font-size: small;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const InputSignUp = styled.input`
  height: 40px;
  width: 295px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 5px;
  border: 1px solid grey;
`;

export const CheckContainer = styled.div`
  display: flex;
  font-size: small;
`;
export const Span1 = styled.span`
  color: blue;
  cursor: pointer;
`;
export const LogoImgStyled = styled.img`
  width: 100px;
  margin-bottom: 15px;
`;
export const ContaiDesk = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  padding: 25px;
  border: 1px solid grey;
  border-radius: 10px;
  box-shadow: 10px 10px 10px #f27649;
  @media screen and (max-width: 480px) {
    border: none;
    border-radius: none;
    box-shadow: none;
  }
`;
