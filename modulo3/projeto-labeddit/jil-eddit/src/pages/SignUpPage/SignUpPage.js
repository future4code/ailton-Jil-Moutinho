import React from "react";
import Header from "../../components/Header/Header";
import SignUpForm from "./SignUpForm";

const SignUpPage = () => {
  return (
    <div>
      <Header page={"signUp"} />
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;
