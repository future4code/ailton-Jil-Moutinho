import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import LoginPage from "../pages/LoginPage/LoginPage.js";
import SignUpPage from "../pages/SignUpPage/SignUpPage.js";
import PostPage from "../pages/PostPage/PostPage.js";
import FeedPage from "../pages/FeedPage/FeedPage.js";
import ErrorPage from "../pages/ErrorPage/ErrorPage.js";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/cadastro" element={<SignUpPage />} />
        <Route exact path="/" element={<FeedPage />} />
        <Route exact path="/post/:id" element={<PostPage />} />
        <Route exact path="/*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
