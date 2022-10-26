import React from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import LoginForm from "./LoginForm";
import { MainContainer } from "../styles";

export function LoginPage() {
  return (
    <>
      <Header />
      <MainContainer>
        <p>Login</p>
        <LoginForm />
      </MainContainer>
      <Footer />
    </>
  );
}
