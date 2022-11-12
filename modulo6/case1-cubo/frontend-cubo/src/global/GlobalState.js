import React, { useState, useEffect } from "react";
import { GlobalContext } from "./GlobalContext";

export const GlobalState = (props) => {
  const Provider = GlobalContext.Provider;

  const [isLoading, setIsLoading] = useState(true);
  const [nickname, setNickname] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const values = {
    isLoading,
    setIsLoading,
    nickname,
    setNickname,
    token,
    setToken,
  };

  return <Provider value={values}>{props.children}</Provider>;
};
