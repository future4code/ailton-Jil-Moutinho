import React from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import Logo from "../../assets/Logo.jpeg";
import SignUpForm from "./SignupForm";
import { MainContainer } from "../styles";

export function SignUpPage() {
  return (
    <>
      <Header />
      <MainContainer>
        {/* <img src={Logo} alt="Loading. Página carregando" /> */}
        <p>Signup</p>
        <SignUpForm />
      </MainContainer>
      <Footer />
    </>
  );
}
