import React from "react";
import LoginForm from "./LoginForm";
import LogoImg from "../../assets/img/logoImg.jpeg";
import { goToSignUp } from "../../routes/coordinator";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { LogoImgStyled, LoginContainer, LoginButton } from "./styled";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <LoginContainer>
      <LogoImgStyled src={LogoImg} alt="logo" />
      <LoginForm />
      <LoginButton 
      onClick={() => {goToSignUp(navigate)}}
      type={'submit'}
      fullwidth='true'
      variant="outlined" 
      color="primary">
        Crie uma conta!
      </LoginButton>
    </LoginContainer>
  );
};

export default LoginPage;

/* (?=.*\d)              // deve conter ao menos um dígito
(?=.*[a-z])           // deve conter ao menos uma letra minúscula
(?=.*[A-Z])           // deve conter ao menos uma letra maiúscula
(?=.*[$*&@#])         // deve conter ao menos um caractere especial
[0-9a-zA-Z$*&@#]{8,}  // deve conter ao menos 8 dos caracteres mencionados */
