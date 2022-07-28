import axios from "axios";
import Swal from "sweetalert2";
import { BASE_URL } from "../constants/urls";

export const createPost = (body, clear, setIsLoading, getArrayPosts) => {
  setIsLoading(true);
  axios
    .post(`${BASE_URL}/posts`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
          }
    })
    .then((res) => {
      clear();
      getArrayPosts()
      setIsLoading(false);
    })
    .catch((err) => {
      console.log(err);
      Swal.fire({
        title: 'Error!',
        text: `Ocorreu um erro, tente novamente. Erro ${err}`,
        icon: 'error',
        confirmButtonText: 'Sad, but ok!'
      })
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
      Swal.fire({
        title: 'Error!',
        text: `Ocorreu um erro, tente novamente. Erro ${err}`,
        icon: 'error',
        confirmButtonText: 'Sad, but ok!'
      })
      console.log(err.response.data.message);
    });
};
