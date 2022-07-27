import axios from "axios";
import { BASE_URL } from "../constants/urls";

export const createPost = (body, clear, setIsLoading) => {
  setIsLoading(true);
  axios
    .post(`${BASE_URL}/posts`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
          }
    })
    .then((res) => {
      clear();
      setIsLoading(false)
      /* setLoginButton("Logout"); */
    })
    .catch((err) => {
      console.log(err);
      window.alert(`Erro no login${err.message}`);
      setIsLoading(false)
    });
};

export const createComent = (body, clear, id, setIsLoading) => {
  setIsLoading(true);
  axios
    .post(`${BASE_URL}/posts/${id}/comments`, body, {
      headers: {
          Authorization: localStorage.getItem("token")
        }
  })
    .then((res) => {
      clear();
      setIsLoading(false);
    })
    .catch((err) => {
      setIsLoading(false);
      alert(err.response.data.message);
    });
};
