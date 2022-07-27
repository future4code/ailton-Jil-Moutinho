import styled from "styled-components";
import { Button } from "@mui/material";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90vw;
  margin-top: 10vh;
  padding: 20px;
`;

export const LogoImgStyled = styled.img`
  width: 75%;
`;

export const LoginButton = styled(Button)`
  width: 300px;
  border-radius: 50px;
  margin-top: 10px;
`;
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 450px;
  align-items: center;
  margin-bottom: 20px;
`
export const InputLogin = styled.input`
  height: 20vh;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  
`;
