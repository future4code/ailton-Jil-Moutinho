import React from "react";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import Truck from "../assets/deliveryImg.png";
import { HomeContainer, MiddleContainer, DivImageDelivery } from "./styled";

export function SentCartPage() {
  return (
    <HomeContainer>
      <Header />
      <div>
        <MiddleContainer>
          <div>
            <p>Lista de pedidos enviada com sucesso!!!</p>
            <br />
            <p>
              Já estamos separando suas compras com muito carinho e cuidado!
            </p>
          </div>
          <DivImageDelivery>
            <img src={Truck} alt="Truck" />
          </DivImageDelivery>
        </MiddleContainer>
      </div>
      <Footer />
    </HomeContainer>
  );
}
