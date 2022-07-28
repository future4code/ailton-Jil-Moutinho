import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../constants/urls";
import { goToFeed, goToLogin } from "../routes/coordinator";

export const login = (body, clear, navigate, setIsLoading) => {
  setIsLoading(true);
  axios
    .post(`${BASE_URL}/users/login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", body.username);
      clear();
      goToFeed(navigate);
      /* setLoginButton("Logout"); */
      setIsLoading(false)
    })
    .catch((err) => {
      console.log(err);
      window.alert(`Erro no login${err.message}`);
      setIsLoading(false)
    });
};

export const logout = (navigate) => {
  localStorage.removeItem("token");
  goToLogin(navigate)
};

export const signUp = (body, clear, navigate, setIsLoading) => {
  setIsLoading(true);
  axios
    .post(`${BASE_URL}/users/signup`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", body.username);
      clear();
  console.log(res);
      setIsLoading(false);
      goToFeed(navigate);
    })
    .catch((err) => {
      setIsLoading(false);
      alert(err.response.data.message);
    });
};
