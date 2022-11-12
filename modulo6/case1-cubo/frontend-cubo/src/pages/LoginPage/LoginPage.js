import React from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import LoginForm from "./LoginForm";
import { MainContainer, GoRegister } from "../styles";
import { goToSignUpPage } from "../../routes/Coordinators";
import { useNavigate } from "react-router-dom";

export function LoginPage() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <MainContainer>
        <br />
        <p>Welcome! Let's log in?</p>
        <br />
        <LoginForm />
        <br />
        <GoRegister onClick={() => goToSignUpPage(navigate)}>Register here.</GoRegister>
        <br />
      </MainContainer>
      <Footer />
    </>
  );
}
