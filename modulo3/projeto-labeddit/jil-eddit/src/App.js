import React, { useState } from "react";
import Router from "./routes/Router";
import theme from "./constants/theme";
import GlobalState from "./components/Global/GlobalState";
import { ThemeProvider } from "@mui/material/styles";

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <GlobalState>
        <Router /* loginButton={loginButton} setLoginButton={setLoginButton} */
        />
      </GlobalState>
    </ThemeProvider>
  );
};

export default App;
