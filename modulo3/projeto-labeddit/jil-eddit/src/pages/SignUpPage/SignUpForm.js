import React, { useState } from "react";
import useForm from "../../hooks/useForm";
import { Button, Checkbox } from "@mui/material";
import { signUp } from "../../services/user";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const [form, onChange, clear] = useForm({
    username: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const onSubmitForm = (event) => {
    event.preventDefault(); //n mostra no navegador
    signUp(form, clear, navigate, setIsLoading);
  };

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <input
          name={"username"}
          value={form.username}
          onChange={onChange}
          label={"Nome"}
          variant={"outlined"}
          fullwidth="true"
          margin={"dense"}
          required
        />
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
          margin={"dense"}
          pattern={"^.{8,}"}
          required
        />
        <p>
          Ao continuar, você concorda com o nosso Contrato de usuário e nossa
          Política de Privacidade
        </p>
        <Checkbox></Checkbox>
        <span>
          Eu concordo em receber emails sobre coisas legais no Labeddit
        </span>
        <Button type={"submit"} variant="contained" color="primary">
          Cadastrar
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
