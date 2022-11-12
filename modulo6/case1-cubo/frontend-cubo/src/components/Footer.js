import React from "react";
import Face from "../assets/faceIcon.svg";
import Insta from "../assets/instaIcon.svg";
import In from "../assets/inIcon.svg";
import Twitter from "../assets/twitterIcon.svg";
import Youtube from "../assets/ytIcon.svg";
import CopyIcon from "../assets/CopyIcon.png";
import { ContainerFooter, FooterSection, ContainIcons, Copy } from "./styles";

export const Footer = () => {
  return (
    <>
      <ContainerFooter>
        <FooterSection>
          <p>Siga-nos em nossas redes sociais</p>
          <ContainIcons>
            <a
              href="https://www.linkedin.com/company/cubo-network/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={In}
                alt="Linked In Cubo Itaú - https://icons8.com/icon/2EqeH19eMd3a/linkedin-2"
              />
            </a>
            <a
              href="https://www.facebook.com/cubo.network"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Face}
                alt="Face Personare - https://icons8.com.br/icons/"
              />
            </a>
            <a
              href="https://twitter.com/cubo_network"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Twitter}
                alt="Twitter Cubo Itaú - https://icons8.com/icon"
              />
            </a>
            <a
              href="https://www.instagram.com/cubo.network/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Insta}
                alt="Instagram Cubo Itaú - https://icons8.com.br/icons/"
              />
            </a>
            <a
              href="https://www.youtube.com/c/CuboNetwork"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Youtube}
                alt="Youtube Cubo Itaú - https://icons8.com/icon"
              />
            </a>
          </ContainIcons>
        </FooterSection>
        <FooterSection>
          <p>Ajuda</p>
          <p>WhatsApp</p>
          <p>Dúvidas frequentes</p>
          <p>Parcerias</p>
        </FooterSection>
      </ContainerFooter>
      {/* <img src={} alt="Copy right simbol" /> */}
      <Copy>
        {" "}
        Jil Mayumi Moutinho{" "}
        <img
          src={CopyIcon}
          alt={
            " Copy right icon - https://icons8.com/icon/jjDTxXrVOxo3/copyright-all-rights-reserved"
          }
        />
      </Copy>
    </>
  );
};
