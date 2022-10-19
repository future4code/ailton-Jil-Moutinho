import React, { useState, useEffect } from "react";
import { GlobalContext } from "./GlobalContext";

export const GlobalState = (props) => {
  const Provider = GlobalContext.Provider;

  const [cardChoise, setCardChoise] = useState([]);
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  if (name === "") {
    const getLocal = localStorage.getItem("name");
    setName(getLocal && getLocal);
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [name]);

  const values = {
    isLoading,
    setIsLoading,
    name,
    setName,
    cardChoise,
    setCardChoise,
  };

  return <Provider value={values}>{props.children}</Provider>;
};
