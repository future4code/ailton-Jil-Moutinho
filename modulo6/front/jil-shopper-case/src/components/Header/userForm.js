import React, { useContext } from "react";
import { GlobalContext } from "../../global/GlobalContext";
import useForm from "../../hooks/useForm";
import { CreateCart } from "../../services/request";
import { FormContainer, InputStyled, LabelStyled, ButtonUser } from "./styled";

export default function UserForm() {
  const { setCart } = useContext(GlobalContext);
  const [form, onChange, clear] = useForm({
    client_name: "",
    delivery_date: "",
  });

  const onSubmitForm = (event) => {
    event.preventDefault();
    CreateCart(setCart, form, clear);
  };

  return (
    <FormContainer onSubmit={onSubmitForm}>
      <InputStyled
        placeholder="Ex: João da Silva"
        name={"client_name"}
        value={form.client_name}
        onChange={onChange}
        pattern="[a-zA-Z ]{3,}$"
        type="text"
        required
      />
      <LabelStyled>Nome completo:*</LabelStyled>
      <InputStyled
        placeholder="Ex: 12/12/2022"
        name={"delivery_date"}
        value={form.delivery_date}
        onChange={onChange}
        type="date"
        required
        title="A data não pode ser hoje"
      />
      <LabelStyled>Entregar em:*</LabelStyled>
      <ButtonUser type={"submit"} title={"Registrar"}>
        Registrar
      </ButtonUser>
    </FormContainer>
  );
}
