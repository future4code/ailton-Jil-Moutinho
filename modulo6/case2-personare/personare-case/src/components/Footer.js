import React from "react";
import Face from "../assets/faceIcon.svg";
import Insta from "../assets/instaIcon.svg";
import Twitter from "../assets/twitterIcon.svg";
import Copy from "../assets/Copy.jpeg";
import { ContainerFooter, ContainResult, CopyStyles } from "./styles";

export const Footer = () => {
  return (
    <>
    <ContainerFooter>
      <ContainResult>
        <p>Siga-nos em nossas redes sociais</p>
        <br />
        <div>
          <a
            href="https://www.facebook.com/PersonareOficial"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Face}
              alt="face Personare - https://icons8.com.br/icons/"
            />
          </a>
          <a
            href="https://www.instagram.com/personareoficial/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Insta}
              alt="instagram Personare - https://icons8.com.br/icons/"
            />
          </a>
          <a
            href="https://twitter.com/personare"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Twitter}
              alt="Twitter Personare - https://icons8.com.br/icons/"
            />
          </a>
        </div>
      </ContainResult>
      <ContainResult>
        <p>Ajuda</p>
        <p>WhatsApp</p>
        <p>Horário de atendimento: de segunda a sexta, das 8h às 20h</p>
        <p>Aceitamos: cartões, PIX e emitimos boletos</p>
        <p>Compra segura</p>
      </ContainResult>
    </ContainerFooter>
    <CopyStyles src={Copy} alt="Copy right simbol" />
      <p> Jil Mayumi Moutinho </p>
    </>
  );
};
