import React, { useState, useEffect } from "react";
import { GlobalContext } from "./GlobalContext";

export const GlobalState = (props) => {
  const Provider = GlobalContext.Provider;

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const values = {
    isLoading,
    setIsLoading,
  };

  return <Provider value={values}>{props.children}</Provider>;
};
