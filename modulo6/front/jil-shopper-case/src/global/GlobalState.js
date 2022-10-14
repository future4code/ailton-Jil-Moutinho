import React, { useState, useEffect } from "react";
import { GlobalContext } from "./GlobalContext";
import { CalculateBalance, GetAllProducts } from "../services/request";

export const GlobalState = (props) => {
  const Provider = GlobalContext.Provider;

  const [cart, setCart] = useState("");
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [balance, setBalance] = useState(0);
  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  

  if (cart === "") {
    const getLocal = localStorage.getItem("cart");
    setCart(getLocal && getLocal);
  }

  useEffect(() => {
      GetAllProducts(page, query, setAllProducts);

      CalculateBalance(setBalance, cart);

  }, [page, query, cart, balance]);
  console.log("loop");
  console.log("sim");

  const values = {
    cart,
    setCart,
    page,
    setPage,
    query,
    setQuery,
    allProducts,
    setAllProducts,
    isLoading,
    setIsLoading,
    balance,
    setBalance,
    isOpen,
    setIsOpen,
  };

  return <Provider value={values}>{props.children}</Provider>;
};
