import React from "react";
import Face from "../../assets/faceIconShopper.png";
import Insta from "../../assets/instaIconShopper.png";
import { Container, DivContact, DivInfo } from "./styled";

export const Footer = () => {
  return (
    <Container>
      <DivContact>
        <p>Siga-nos em nossas redes sociais</p>
        <br />
        <div>
          <a
            href="https://www.facebook.com/shopper.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Face}
              alt="face Shopper - https://icons8.com.br/icons/set/facebook--static--mint"
            />
          </a>
          <a
            href="https://www.instagram.com/shopper.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Insta}
              alt="instagram Shopper - https://icons8.com.br/icons/set/instagram--static--mint"
            />
          </a>
        </div>
      </DivContact>
      <DivInfo>
        <p>Shopper Comércio Alimentos LTDA.</p>
        <p>CNPJ: 00.000.000/0001-60</p>
        <p>São Paulo -SP</p>
        <p>Telefone: (11)1234-1234</p>
        <p>contato123@shopper.cpm.br</p>
      </DivInfo>
    </Container>
  );
};
