import React from "react";
import LoginForm from "./LoginForm";
import LogoImg from "../../assets/img/logoImg2.jpeg";
import { goToSignUp } from "../../routes/coordinator";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  LogoImgStyled,
  LoginContainer,
  LoginButton,
  ContaiDesk,
} from "./styled";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <LoginContainer>
      <ContaiDesk>
        <LogoImgStyled src={LogoImg} alt="logo" />
        <LoginForm />
        <Button
          onClick={() => {
            goToSignUp(navigate);
          }}
          type={"submit"}
          fullwidth="true"
          variant="outlined"
          color="primary"
        >
          Crie uma conta!
        </Button>
      </ContaiDesk>
    </LoginContainer>
  );
};

export default LoginPage;
