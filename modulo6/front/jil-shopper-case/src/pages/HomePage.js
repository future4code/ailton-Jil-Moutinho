import React, { useContext, useState } from "react";
import {GlobalContext} from "../global/GlobalContext"
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Cart2 } from "../components/Cart2/Cart2";
import { Card } from "../components/Card/Card";
import Loading from "../assets/loading.gif";
import { HomeContainer, ProductsContainer, LoadingGif } from "./styled";
import { Pagination } from "@mui/material";

export function HomePage() {
  const { allProducts, page, setPage, isOpen, isLoading, setIsLoading } =
    useContext(GlobalContext);

  if (allProducts) {
    setIsLoading(false);
  }

  const onChangePage = (event, value) => {
    setPage(value);
  };

  return (
    <HomeContainer>
      <Header />
      <ProductsContainer>
        {!isLoading && <Card />}
        {isLoading && (
          <LoadingGif src={Loading} alt="Loading. Página carregando" />
        )}
        {isOpen && <Cart2 />}
      </ProductsContainer>
      <Pagination
        count={3}
        onChange={onChangePage}
        page={page}
        variant="outlined"
        shape="rounded"
        size="large"
      />
      <Footer />
    </HomeContainer>
  );
};