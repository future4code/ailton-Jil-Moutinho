import axios from "axios";
import { BASE_URL } from "../constants/urls";

export const positivePostVote = (body, id, setIsLoading, getArrayPosts) => {
  setIsLoading(true);
  axios
    .post(`${BASE_URL}/posts/${id}/votes`, {'direction': body}, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      getArrayPosts();
      setIsLoading(false);
    })
    .catch((err) => {
      setIsLoading(false);
      alert(err.response.data.message);
    });
};

export const negativePostVote = (body, id, setIsLoading, getArrayPosts) => {
  setIsLoading(true);
  axios
    .put(`${BASE_URL}/posts/${id}/votes`, {'direction': body}, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      getArrayPosts();
      setIsLoading(false);
    })
    .catch((err) => {
      setIsLoading(false);
      alert(err.response.data.message);
    });
};

export const positiveCommentVote = (body, id, setIsLoading, getArrayComents) => {
    setIsLoading(true);
    axios
      .post(`${BASE_URL}/comments/${id}/votes`, {'direction': body}, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        getArrayComents();
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        alert(err.response.data.message);
      });
  };

  export const negativeCommentVote = (body, id, setIsLoading, getArrayComents) => {
    setIsLoading(true);
    axios
      .put(`${BASE_URL}/comments/${id}/votes`, {'direction': body}, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        getArrayComents();
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        alert(err.response.data.message);
      });
  };

  export const delPostVote = (id, setIsLoading, getArrayPosts) => {
    setIsLoading(true);
    axios
      .delete(`${BASE_URL}/posts/${id}/votes`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        getArrayPosts();
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        alert(err.response.data.message);
      });
  };

  export const delCommentVote = (id, setIsLoading, getArrayComents) => {
    setIsLoading(true);
    axios
      .delete(`${BASE_URL}/comments/${id}/votes`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        getArrayComents();
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        alert(err.response.data.message);
      });
  };