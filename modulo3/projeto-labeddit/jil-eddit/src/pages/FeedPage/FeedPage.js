import React, { useState } from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import Header from "../../components/Header/Header";
import PostCard from "../../components/PostCard/PostCard";
import useRequestData from "../../hooks/useRequestData";
import Loading from "../../components/Loading/Loading";
import { createPost } from "../../services/post";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import { Button } from "@mui/material";
import { goToPost } from "../../routes/coordinator";
import useForm from "../../hooks/useForm";

const FeedPage = () => {
  useProtectedPage();
  const navigate = useNavigate();
  const arrayPosts = useRequestData([], `${BASE_URL}/posts`);
  const [form, onChange, clear] = useForm({ title: "", body: "" });
  const [isLoading, setIsLoading] = useState(false);

  const onClickPost = (item) => {
    goToPost(navigate, item.id);
  };

  const postsFeed = arrayPosts?.map((item) => {
    return (
      <PostCard
        key={item?.id}
        username={item?.username}
        title={item?.title}
        body={item?.body}
        voteSum={item?.voteSum}
        onClick={() => onClickPost(item)}
      />
    );
  });

  const onSubmitForm = (event) => {
    event.preventDefault(); //n mostra no navegador
    createPost(form, clear, setIsLoading);
  };

  return (
    <div>
      <Header />

      <div>
        <form onSubmit={onSubmitForm}>
          <input
            name={"title"}
            value={form.title}
            onChange={onChange}
            type={"title"}
            label={"Título"}
            placeholder={"Título"}
            variant={"outlined"}
            fullwidth="true"
            margin={"dense"}
            required
          />
          <input
            name={"body"}
            value={form.body}
            onChange={onChange}
            type={"body"}
            label={"Escreva seu post..."}
            placeholder={"Escreva seu post..."}
            variant={"outlined"}
            fullwidth="true"
            margin={"dense"}
            required
          />
          <Button type={"submit"} variant="contained" color="primary">
            Postar
          </Button>
        </form>
        {arrayPosts.length > 0 ? postsFeed : <Loading />}
      </div>
    </div>
  );
};

export default FeedPage;
