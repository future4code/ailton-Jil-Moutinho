import React, { useState } from "react";
import { Button } from "../../constants/ButtonStyles";
import useForm from "../../hooks/useForm";
import SenhaImg2 from "../../assets/senha.png";
import SenhaImg from "../../assets/senha2.png";
import { Login, Signup } from "../../services/requests";
import { useNavigate } from "react-router-dom";
import { goToHome } from "../../routes/Coordinators";
import {
  InputStyled,
  FormContainer,
  LabelStyled,
  ImgPassword,
} from "../SignupPage/styles";
import { greyCubo } from "../../constants/colors";

export default function LoginForm() {
    const [form, onChange, clear] = useForm({ email: "", password: "" });
    const navigate = useNavigate();
  
    const onSubmitForm = (event) => {
      event.preventDefault();
      Login(form, goToHome, navigate, clear);
    };

    return (
        <FormContainer onSubmit={onSubmitForm}>
          <InputStyled
            placeholder="Nickname"
            name={"nickname"}
            value={form.nickname}
            onChange={onChange}
            type="text"
            required
          />
          <LabelStyled>Nickname*</LabelStyled>
          <InputStyled
            placeholder="Mínimo 6 caracteres"
            name={"password"}
            value={form.password}
            onChange={onChange}
            type="password"
            pattern="^.{6,10}$"
            required
            title="Password must have from 6 up to 10 characteres"
          />
          <LabelStyled>Password*</LabelStyled>
          <Button>Login</Button>
        </FormContainer>
      );
    }