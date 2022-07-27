import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useRequestData from "../../hooks/useRequestData";
import useForm from "../../hooks/useForm";
import { BASE_URL } from "../../constants/urls";
import { createComent } from "../../services/post";
import ComentCard from "../../components/ComentCard/ComendCard";
import PostCard from "../../components/PostCard/PostCard";
import Header from "../../components/Header/Header";
import useProtectedPage from "../../hooks/useProtectedPage";
import { Button } from "@mui/material";
import { goBack } from "../../routes/coordinator";

const PostPage = () => {
  useProtectedPage();
  const params = useParams();
  const navigate = useNavigate();
  const arrayPosts = useRequestData([], `${BASE_URL}/posts`);
  const [form, onChange, clear] = useForm({ body: "" });
  const [isLoading, setIsLoading] = useState(false);
  const arrayComents = useRequestData(
    [],
    `${BASE_URL}/posts/${params.id}/comments`
  );
  /* console.log(arrayPosts); */

  const postDetails = arrayPosts?.filter((item) => (item.id = params.id));

  /* console.log(postDetails); */

  const comentsPost = arrayComents?.map((item) => {
    return (
      <ComentCard
        key={item?.id}
        body={item?.body}
        voteSum={item?.voteSum}
        username={item?.username}
      />
    );
  });

  const onSubmitForm = (event) => {
    event.preventDefault(); //n mostra no navegador
    createComent(form, clear, params.id, setIsLoading);
  };

  return (
    <div>
      <Header />
      <Button
        variant="contained"
        color="primary"
        onClick={() => goBack(navigate)}
      >
        Voltar
      </Button>
      Post
      {/* {postDetails?.body} */}
      {/* <PostCard /> */}
      <form onSubmit={onSubmitForm}>
        <input
          name={"body"}
          onChange={onChange}
          value={form.body}
          label={"Adicionar comentário"}
          placeholder={"Adicionar comentário"}
          variant={"outlined"}
          fullwidth="true"
          margin={"dense"}
          required
        />
        <Button type={"submit"} variant="contained" color="primary">
          Continuar
        </Button>
      </form>
      <div>{comentsPost}</div>
    </div>
  );
};

export default PostPage;
