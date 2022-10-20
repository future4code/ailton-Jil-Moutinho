import React from "react";
import Face from "../assets/faceIcon.svg";
import Insta from "../assets/instaIcon.svg";
import Twitter from "../assets/twitterIcon.svg";
import { ContainerFooter, DivContact, DivInfo } from "./styles";

export const Footer = () => {
  return (
    <ContainerFooter>
      <p>Oi sou footer</p>
      {/*       <DivContact>
        <p>Siga-nos em nossas redes sociais</p>
        <br />
        <div>
          <a
            href="https://www.facebook.com/Personare.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Face}
              alt="face Personare - https://icons8.com.br/icons/set/facebook--static--mint"
            />
          </a>
          <a
            href="https://www.instagram.com/Personare.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Insta}
              alt="instagram Personare - https://icons8.com.br/icons/set/instagram--static--mint"
            />
          </a>
          <a
            href="https://www.instagram.com/Personare.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Insta}
              alt="instagram Personare - https://icons8.com.br/icons/set/instagram--static--mint"
            />
          </a>
        </div>
      </DivContact> */}
      <DivInfo>
        <p>Ajuda</p>
        <p>WhatsApp</p>
        <p>Horário de atendimento: de segunda a sexta, das 8h às 20h</p>
        <p>Compra segura</p>
        <p>Aceitamos cartões</p>
                        <p>Aceitamos PIX</p>
                <p>Emitimos boletos</p>
      </DivInfo>
    </ContainerFooter>
  );
};
