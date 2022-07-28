import React, { useState, useEffect } from "react";
import useRequestData from "../../hooks/useRequestData";
import useForm from "../../hooks/useForm";
import Header from "../../components/Header/Header";
import useProtectedPage from "../../hooks/useProtectedPage";
import axios from "axios";
import ComentCard from "../../components/ComentCard/ComendCard";
import PostCard from "../../components/PostCard/PostCard";
import Loading from "../../components/Loading/Loading";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import { createComent } from "../../services/post";
import { PostButton, PostContainer, InputComment, PostsContain } from "./styled";

const PostPage = () => {
  useProtectedPage();
  const params = useParams();
  const navigate = useNavigate();

  const [form, onChange, clear] = useForm({ body: "" });
  const [isLoading, setIsLoading] = useState(false);
  const arrayPosts = useRequestData([], `${BASE_URL}/posts`);
  const postDetails = arrayPosts?.filter((item) => item.id === params.id);
  const [arrayComents, setArrayComents] = useState([]);

  const getArrayComents = () => {
    setIsLoading(true)
    axios
      .get(`${BASE_URL}/posts/${params.id}/comments`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setArrayComents(res.data);
        setIsLoading(false)
      })
      .catch((err) => {
        setIsLoading(false)
        console.log(err);
        alert("Ocorreu um erro, tente novamente");
      });
  };

  useEffect(() => {
    getArrayComents();
  }, []);

  const comentsPost = arrayComents?.map((item, index) => {
    return (
      <ComentCard
        key={index}
        body={item?.body}
        voteSum={item?.voteSum}
        username={item?.username}
      />
    );
  });

  const onSubmitForm = (event) => {
    event.preventDefault(); //n mostra no navegador
    createComent(form, clear, params.id, setIsLoading);
    getArrayComents();
  };

  return (
    <div>
      <Header />
      <PostContainer>
        <PostCard
          key={postDetails[0]?.id}
          item={postDetails[0]}
          getArrayComents={getArrayComents}
        />
        <form onSubmit={onSubmitForm}>
          <InputComment
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
          <PostButton type={"submit"} variant="contained" color="secundary">
            Continuar
          </PostButton>
        </form>
        {!isLoading ? arrayComents.length == 0 ? <p>Não há comentários neste post. Seja o primeiro!</p> : <PostsContain>{comentsPost}</PostsContain> : <Loading />}
      </PostContainer>
    </div>
  );
};

export default PostPage;
