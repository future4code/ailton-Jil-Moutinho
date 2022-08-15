import React from "react";
import Header from "../../components/Header/Header";
import ErrorImg from "../../assets/img/error.gif";
import { ErrorImgStyled, ErrorContain } from "./styled";

const ErrorPage = () => {
  return (
    <div>
      <Header />
      <ErrorContain>
        Oh no! Algo deu errado... Página de erro!
        <ErrorImgStyled
          src={ErrorImg}
          alt="reddit se afogando - página de erro"
        />
      </ErrorContain>
    </div>
  );
};

export default ErrorPage;
