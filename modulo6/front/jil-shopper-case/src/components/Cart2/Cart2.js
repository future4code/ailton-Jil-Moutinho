import React, { useContext } from "react";
import { GlobalContext } from "../../global/GlobalContext";
import { useNavigate } from "react-router-dom";
import Name from "../../assets/nameIcon.png";
import Truck from "../../assets/deliveryIcon.png";
import Pay from "../../assets/paymentIcon.png";
import { CardCart } from "../CardCart/CardCart";
import { goSentCart } from "../../routes/coordinator";
import {
  Container2,
  Button,
  InfoDiv,
  DivInfoWithIcon,
  ContainerCheck,
  Method,
  ImgPay
} from "./styled";

export const Cart2 = () => {
  const { setCart } = useContext(GlobalContext);
  const navigate = useNavigate();

  const onClickEnviar = () => {
    goSentCart(navigate);
    setCart("");
    localStorage.removeItem("cart", "name", "date");
  };

  return (
    <Container2>
      <CardCart />
      <InfoDiv>
        <DivInfoWithIcon>
          <img src={Name} alt="Person's shadow" />
          <p>{localStorage.getItem("name")}</p>
        </DivInfoWithIcon>
        <DivInfoWithIcon>
          <img src={Truck} alt="Truck" />
          <p>Entrega em: {localStorage.getItem("date")}</p>
        </DivInfoWithIcon>
        <DivInfoWithIcon>
          <ImgPay src={Pay} alt="Hand making a payment" />
          <p>Forma de pagamento:</p>
          <ContainerCheck>
            <Method>
              <input
                type="radio"
                id="debitCard"
                name="setPayMethod"
                value="debitCard" /* 
              onChange={() => {
                setPayMethod("debitCard");
              }} */
              />
              <span>Cartão de débito</span>
            </Method>
            <Method>
              <input
                type="radio"
                id="creditcard"
                name="setPayMethod"
                value="creditcard"
              />
              <span>Cartão de Credito</span>
            </Method>
            <Method>
              <input
                type="radio"
                id="boleto"
                name="setPayMethod"
                value="boleto"
              />
              <span>Boleto</span>
            </Method>
            <Method>
              <input type="radio" id="pix" name="setPayMethod" value="pix" />
              <span>PIX</span>
            </Method>
          </ContainerCheck>
        </DivInfoWithIcon>
      </InfoDiv>
      <Button onClick={() => onClickEnviar()}>Enviar</Button>
    </Container2>
  );
};
