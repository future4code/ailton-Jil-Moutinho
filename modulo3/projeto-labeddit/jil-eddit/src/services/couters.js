import axios from "axios";
import { BASE_URL } from "../constants/urls";

export const positivePostVote = (body, id, setIsLoading) => {
  setIsLoading(true);
  axios
    .post(`${BASE_URL}/posts/${id}/votes`, {'direction': body}, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      //getArrayPost();
      setIsLoading(false);
    })
    .catch((err) => {
      setIsLoading(false);
      alert(err.response.data.message);
    });
};

export const negativePostVote = (body, id, setIsLoading) => {
  setIsLoading(true);
  axios
    .put(`${BASE_URL}/posts/${id}/votes`, {'direction': body}, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      //getArrayPosts();
      setIsLoading(false);
    })
    .catch((err) => {
      setIsLoading(false);
      alert(err.response.data.message);
    });
};

export const positiveCommentVote = (body, id, setIsLoading) => {
    setIsLoading(true);
    axios
      .post(`${BASE_URL}/comments/${id}/votes`, {'direction': body}, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        //getArrayComents();
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        alert(err.response.data.message);
      });
  };

  export const negativeCommentVote = (body, id, setIsLoading) => {
    setIsLoading(true);
    axios
      .put(`${BASE_URL}/comments/${id}/votes`, {'direction': body}, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        //getArrayComents();
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        alert(err.response.data.message);
      });
  };