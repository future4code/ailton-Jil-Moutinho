import axios from "axios";
import { BASE_URL } from "../constants/url";
import { token } from "../constants/token";
import Swal from "sweetalert2";

export const Login = (body, goTo, navigate, clear) => {
  axios
    .post(`${BASE_URL}/login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.message.token);
      goTo(navigate);
      clear();
    })
    .catch((err) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Something went wrong! ${err?.response?.data?.message}`,
        footer: `Error status code ${err?.response?.status}`,
      });
    });
};

export const Signup = async (body, goTo, navigate, clear, setData) => {
  await axios
    .post(`${BASE_URL}/signup`, body)
    .then((res) => {
      console.log(res.data.token)
      localStorage.setItem("token", res.data.token);
      setData(res.data.token);
      goTo(navigate);
      clear();
    })
    .catch((err) => {
      console.log("eeSignUp", err)
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Something went wrong! ${err?.response?.data?.message}`,
        footer: `Error code ${err?.response?.status}`,
      });
    });
};

export const GetAllShares = async (setData) => {
  
  await axios
    .get(`${BASE_URL}/all`, {
      headers: { Authorization: localStorage.getItem("token")},
    })
    .then((res) => {
      setData(res.data.message);
    })
    .catch((err) => {
      console.log(err.message);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Something went wrong! ${err?.response?.data?.message}`,
        footer: `Error code ${err?.response?.status}`,
      });
    });
};

export const DelUser = (nickname) => {
  axios
    .delete(`${BASE_URL}/cancelMembership${nickname}`, {
      headers: { Authorization: localStorage.getItem("token")},
    })
    .then((res) => {
      localStorage.removeItem("token");
    })
    .catch((err) => {
      console.log(err);
    });
};

export const GetAvailableShares = async (setData) => {
  await axios
    .get(`${BASE_URL}/shares`, {
      headers: { Authorization: localStorage.getItem("token")},
    })
    .then((res) => {
      setData(res.data.message);
    })
    .catch((err) => {
      console.log(err);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Something went wrong! ${err?.response?.data?.message}`,
        footer: `Error code ${err?.response?.status}`,
      });
    });
};
