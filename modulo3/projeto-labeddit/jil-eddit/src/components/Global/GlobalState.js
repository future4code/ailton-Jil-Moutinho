import React, { useState } from "react";
import axios from "axios";
import GlobalContext from "./GlobalContext";

const GlobalState = (props) => {
  const token = localStorage.getItem("token");
  const [loginButton, setLoginButton] = useState(token ? "Logout" : "Login");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        loginButton,
        setLoginButton,
        isLoading,
        setLoginButton,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
