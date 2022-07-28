import React, { useState } from "react";
import useForm from "../../hooks/useForm";
import { Button, Checkbox } from "@mui/material";
import { signUp } from "../../services/user";
import { useNavigate } from "react-router-dom";
import {
  InputSignUp,
  FormContainer,
  CheckContainer,
  InputContainer,
  Span1,
} from "./styled";

const SignUpForm = () => {
  const [form, onChange, clear] = useForm({
    username: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmitForm = (event) => {
    event.preventDefault(); //n mostra no navegador
    signUp(form, clear, navigate, setIsLoading);
  };

  return (
    <FormContainer>
      <form onSubmit={onSubmitForm}>
        <InputContainer>
          <InputSignUp
            name={"username"}
            value={form.username}
            onChange={onChange}
            label={"Nome"}
            variant={"outlined"}
            fullwidth="true"
            margin={"dense"}
            required
          />
          <InputSignUp
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
          <InputSignUp
            name={"password"}
            value={form.password}
            onChange={onChange}
            type={"password"}
            label={"Senha"}
            variant={"outlined"}
            fullwidth="true"
            margin={"dense"}
            pattern={"^.{8,}"}
            required
          />
        </InputContainer>
        <p>
          Ao continuar, você concorda com o nosso{" "}
          <Span1>Contrato de usuário</Span1> e nossa{" "}
          <Span1>Política de Privacidade</Span1>
        </p>
        <CheckContainer>
          <Checkbox></Checkbox>
          <p>Eu concordo em receber emails sobre coisas legais no Labeddit</p>
        </CheckContainer>
        <Button
          type={"submit"}
          variant="contained"
          color="primary"
          align-self="center"
        >
          Cadastrar
        </Button>
      </form>
    </FormContainer>
  );
};

export default SignUpForm;

//pattern="[0-9a-zA-Z]{8,30}"
