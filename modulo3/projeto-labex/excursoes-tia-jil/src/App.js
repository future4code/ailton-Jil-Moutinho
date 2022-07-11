import logo from "./logo.svg";
import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import ListTripsPage from "./Pages/ListTripsPage/ListTripsPage";
import LoginPage from "./Pages/LoginPage/LoginPage";

function App() {
  const [page, setPage] = useState("TripsPage");

  const changePages = () => {
    switch (page) {
      case "TripsPage":
        return <ListTripsPage setPage = {setPage} />;
      case "Login":
        return <LoginPage />;
      default:
        return <ListTripsPage />;
    }
  };
  return (
    <div>
      <header>
        <button onClick={() => setPage("TripsPage")}>Lista de viagens</button>
      </header>
      <div>
        <button onClick={() => setPage("Login") }>Login</button>

        </div>
        <div>
          {changePages()}
        </div>
    </div>
  );
}

export default App;
