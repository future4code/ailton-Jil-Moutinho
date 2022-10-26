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

export const Signup = (body, goTo, navigate, clear) => {
  axios
    .post(`${BASE_URL}/signup`, body)
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
        footer: `Error code ${err?.response?.status}`,
      });
    });
};

export const GetAllShares = async (setData) => {
  await axios
    .get(`${BASE_URL}/all`, {
      headers: { Authorization: token },
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

export const DelUser = (nickname) => {
  const body = {
    nickname: nickname,
  };
  axios
    .delete(`${BASE_URL}/cancelMembership`, body, {
      headers: { Authorization: token },
    })
    .then((res) => {
      localStorage.removeItem("token");
    })
    .catch((err) => {
      console.log("deu erro");
    });
};
