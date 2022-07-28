import React, { useEffect, useState } from "react";
import axios from "axios";
import useForm from "../../hooks/useForm";
import useProtectedPage from "../../hooks/useProtectedPage";
import Header from "../../components/Header/Header";
import PostCard from "../../components/PostCard/PostCard";
import Loading from "../../components/Loading/Loading";
import Pagination from "../../components/Pagination/Pagination";
import Swal from "sweetalert2";
import { createPost } from "../../services/post";
import { BASE_URL } from "../../constants/urls";
import {
  FeedContainer,
  FeedButton,
  InputContainer,
  FormContainer,
  InputFeedTitle,
  InputFeedPost,
  PostsContainer,
  WelcomeContain
} from "./styled";

const FeedPage = () => {
  useProtectedPage();
  /*   const navigate = useNavigate();
  const arrayPosts = useRequestData([], `${BASE_URL}/posts`); */
  const [arrayPostsAll, setArrayPostsAll] = useState();

  const [form, onChange, clear] = useForm({ title: "", body: "" });
  const [isLoading, setIsLoading] = useState(false);

  const getArrayPosts = (size, page) => {
    setIsLoading(true);
    axios
      .get(`${BASE_URL}/posts?page=${page}&size=${size}`, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        setIsLoading(false);
        setArrayPostsAll(res.data);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
        Swal.fire({
          title: 'Error!',
          text: `Ocorreu um erro, tente novamente. Erro ${err}`,
          icon: 'error',
          confirmButtonText: 'Sad, but ok!'
        })
      });
  };

  useEffect(() => {
    getArrayPosts();
  }, []);

  const postsFeed = arrayPostsAll?.map((item) => {
    return <PostCard key={item.id} item={item} />;
  });

  const onSubmitForm = (event) => {
    event.preventDefault(); //n mostra no navegador
    createPost(form, clear, setIsLoading, getArrayPosts);
  };

  const userName = localStorage.getItem('user');

  return (
    <div>
      <Header />
      <FeedContainer>
        <WelcomeContain>
          <p>Olá {userName}!</p> 
          <p>O que vamos postar hoje?</p>
          </WelcomeContain>
        <FormContainer>
          <form onSubmit={onSubmitForm}>
            <InputContainer>
              <InputFeedTitle
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
              <InputFeedPost
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
            </InputContainer>
            <FeedButton type={"submit"} variant="contained" color="primary">
              Postar
            </FeedButton>
          </form>
        </FormContainer>
        <PostsContainer>{!isLoading ? postsFeed : <Loading />}</PostsContainer>
        <Pagination getArrayPosts={getArrayPosts} setIsLoading={setIsLoading} />
      </FeedContainer>
    </div>
  );
};

export default FeedPage;
