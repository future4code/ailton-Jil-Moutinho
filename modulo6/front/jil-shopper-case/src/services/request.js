import axios from "axios";
import { BASE_URL } from "../constants/url";
import Swal from "sweetalert2";
import { blueShopper, greenShopper } from "../constants/colors";

export const GetAllProducts = (page, query, setAllProducts) => {
  axios
    .get(`${BASE_URL}/product/all/${page}/?search=${query}`)
    .then((res) => {
      setAllProducts(res.data);
    })
    .catch((err) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Algo deu errado. Tente novamente mais tarde. Problemas com servidor.",
        footer: `Código do erro ${err.response.status}`,
      });
    });
};

export const CreateCart = (setCart, body, clear) => {
  axios
    .post(`${BASE_URL}/cart/create`, body)
    .then((res) => {
      localStorage.setItem("cart",res.data.id_cart);
      localStorage.setItem("name",body.client_name);
      localStorage.setItem("date",body.delivery_date);
      setCart(res.data.id_cart);
      clear();
      Swal.fire({
        icon: "success",
        iconColor: `${greenShopper}`,
        color: `${greenShopper}`,
        title: "Ueba!",
        text: `${res.data.message}`,
      });
    })
    .catch((err) => {
      console.log("err:", err);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        color: `${blueShopper}`,
        text: `A data de entrega não pode ser anterior ou igual a hoje.`,
        footer: `Código do erro ${err.response.status}. ${err.response.data.message}`,
      });
    });
};

export const CreatePurchase = (body) => {
  axios
    .post(`${BASE_URL}/product/purchase`, body)
    .then((res) => {
      Swal.fire({
        icon: "success",
        iconColor: `${greenShopper}`,
        color: `${greenShopper}`,
        title:
          "Ueba! Item adicionado no carrinho. Você pode aumentar a quantidade a ser comprada por lá ok?",
        text: `${res.data.message}`,
      });
    })
    .catch((err) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        color: `${blueShopper}`,
        text: `Você precisa informar seu nome e data de entrega antes de adicionar itens no carrinho. 

        E se você já adicionou o item no carrinho, você pode aumentar a quantidade de itens por la, ok? `,
        footer: `Código do erro ${err.response.status}. ${err.response.data.message}`,
      });
    });
};

export const SumUnits = (body) => {
  axios
    .put(`${BASE_URL}/product/addOnPurchase`, body)
    .then((res) => {/* 
      localStorage.setItem("purchase", res.data);
      setPurchase(res.data); */
    })
    .catch((err) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Algo deu errado. Tente novamente mais tarde",
        footer: `Código do erro ${err.response.status}`,
      });
    });
};

export const SubUnits = (body) => {
  axios
    .put(`${BASE_URL}/product/subOnPurchase`, body)
    .then((res) => {
      /* localStorage.setItem("purchase", res.data);
      setPurchase(res.data); */
    })
    .catch((err) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Algo deu errado. Tente novamente mais tarde",
        footer: `Código do erro ${err.response.status}`,
      });
    });
};

export const GetAllPurchase = (cart, setAllPurchase) => {
  axios
    .get(`${BASE_URL}/product/allPurchase/${cart}`)
    .then((res) => {
      setAllPurchase(res.data);
    })
    .catch((err) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Parece que você ainda não criou seu cadastro ou não adicionou itens no carrinho.",
        footer: `Código do erro ${err.response}`,
      });
    });
};

export const CalculateBalance = (setBalance, cart) => {
  const body = {
    id_cart: cart,
  };
  axios
    .put(`${BASE_URL}/cart/balance`, body)
    .then((res) => {
      setBalance(res.data.totalBalance.toFixed(2));
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export const DelPurchase = (id_purchase) => {
  axios
    .delete(`${BASE_URL}/product/delPurchase/${id_purchase}`)
    .then((res) => {
    })
    .catch((err) => {
      console.log(err)
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Algo deu errado. Tente novamente mais tarde",
        footer: `Código do erro ${err.response.status}`
      });
    });
};
