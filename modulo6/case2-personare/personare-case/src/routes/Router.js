import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RegisterPage } from "../pages/RegisterPage/RegisterPage";
import { DrawPage } from "../pages/DrawPage/DrawPage";
import { ResultPage } from "../pages/ResultPage/ResultPage";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";

export const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<RegisterPage />} />
        <Route exact path="/draw" element={<DrawPage />} />
        <Route exact path="/result" element={<ResultPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
