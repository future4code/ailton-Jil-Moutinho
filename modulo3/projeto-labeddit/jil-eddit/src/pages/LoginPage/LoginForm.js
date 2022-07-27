import React, { useState } from "react";
import useForm from "../../hooks/useForm";
import { Button } from "@mui/material";
import { login } from "../../services/user";
import { useNavigate } from "react-router-dom";
import { LoginButton, FormContainer } from "./styled";

const LoginForm = () => {
  const [form, onChange, clear] = useForm({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmitForm = (event) => {
    event.preventDefault(); //n mostra no navegador
    login(form, clear, navigate, setIsLoading);
  };

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <FormContainer>
          <input
            name={"email"}
            value={form.email}
            onChange={onChange}
            type={"email"}
            label={"E-mail"}
            variant={"outlined"}
            fullwidth="true"
            margin={"dense"}
            required
          />
          <input
            name={"password"}
            value={form.password}
            onChange={onChange}
            type={"password"}
            label={"Senha"}
            variant={"outlined"}
            fullwidth="true"
            margin={"normal"}
            required
          />
        </FormContainer>
        <LoginButton type={"submit"} variant="contained" color="primary">
          Continuar
        </LoginButton>
      </form>
    </div>
  );
};

export default LoginForm;
