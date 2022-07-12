import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import ListTripsPage from "../Pages/ListTripsPage/ListTripsPage.js";
import LoginPage from "../Pages/LoginPage/LoginPage.js";
import ApplicationPage from "../Pages/ApplicationFormPage/ApplicationFormPage.js";
import CreateTripPage from "../Pages/CreateTripPage/CreateTripPage.js";
import TripDetailsPage from "../Pages/TripDetailsPage/TripDetailsPage.js";
import ManagementPage from "../Pages/AdminHomePage/AdminHomePage.js";

import styled from 'styled-components';
/* import Foguete from "../assets/img/Foguete.jpg"; */

export const Router = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListTripsPage />} />
        <Route path="application/" element={<ApplicationPage />} />
        <Route path="login/" element={<LoginPage />} />
        <Route path="login/management/" element={<ManagementPage />} />
        <Route
          path="login/management/createtrip/"
          element={<CreateTripPage />}
        />
        <Route
          path="login/management/tripdetails/"
          element={<TripDetailsPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};
