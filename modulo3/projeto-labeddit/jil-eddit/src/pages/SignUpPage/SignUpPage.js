import React from "react";
import Header from "../../components/Header/Header";
import SignUpForm from "./SignUpForm";
import LogoImg from "../../assets/img/logoImg2.jpeg";
import { SignUpContainer, LogoImgStyled, ContaiDesk } from "./styled";

const SignUpPage = () => {
  return (
    <div>
      <Header page={"signUp"} />

      <SignUpContainer>
        <ContaiDesk>
          <h3>Hello! Welcome to Jilddit!</h3>
          <LogoImgStyled src={LogoImg} alt="logo de Jilddite" />
          <SignUpForm />
        </ContaiDesk>
      </SignUpContainer>
    </div>
  );
};

export default SignUpPage;
