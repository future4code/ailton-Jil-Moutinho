import React, { useState } from "react";
import useForm from "../../hooks/useForm";
import { login } from "../../services/user";
import { useNavigate } from "react-router-dom";
import {
  LoginButton,
  InputContainer,
  InputLogin,
  FormContainer,
} from "./styled";

const LoginForm = () => {
  const [form, onChange, clear] = useForm({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmitForm = (event) => {
    event.preventDefault(); //n mostra no navegador
    login(form, clear, navigate, setIsLoading);
  };

  return (
    <FormContainer>
      <form onSubmit={onSubmitForm}>
        <InputContainer>
          <InputLogin
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
          <InputLogin
            name={"password"}
            value={form.password}
            onChange={onChange}
            type={"password"}
            label={"Senha"}
            variant={"outlined"}
            fullwidth="true"
            margin={"normal"}
            pattern={"^.{8,}"}
            required
          />
        </InputContainer>
        <LoginButton type={"submit"} variant="contained" background="primary">
          Continuar
        </LoginButton>
      </form>
    </FormContainer>
  );
};

export default LoginForm;

/* (?=.*\d)              // deve conter ao menos um dígito
(?=.*[a-z])           // deve conter ao menos uma letra minúscula
(?=.*[A-Z])           // deve conter ao menos uma letra maiúscula
(?=.*[$*&@#])         // deve conter ao menos um caractere especial
[0-9a-zA-Z$*&@#]{8,}  // deve conter ao menos 8 dos caracteres mencionados */
