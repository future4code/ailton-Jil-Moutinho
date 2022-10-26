import React from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import SignUpForm from "./SignupForm";
import { MainContainer } from "../styles";

export function SignUpPage() {
  return (
    <>
      <Header />
      <MainContainer>
        <br/>
        <p>Please fill up the form. All data are required</p>
        <br/>
        <SignUpForm />
      </MainContainer>
      <Footer />
    </>
  );
}
