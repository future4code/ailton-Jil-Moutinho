import styled from "styled-components";
import { Button } from "@mui/material";

export const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 98vw;
  margin-top: 10px;
  padding: 8px;
  align-items: center;
`;

export const FeedButton = styled(Button)`
  width: 300px;
  border-radius: 50px;
  margin-top: 10px;
  margin-bottom: 5px;
  align-items: center;
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 90vw;
  height: 110px;
  max-width: 450px;
  margin-bottom: 20px;
  gap: 10px;
`;
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 90vw;
  height: 150px;
  max-width: 450px;
  margin-bottom: 20px;
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const InputFeedTitle = styled.input`
  height: 100px;
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 5px;
  background-color: #ededed;
  border-color: #ededed;
`;

export const InputFeedPost = styled.input`
  height: 300px;
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 5px;
  background-color: #ededed;
  border-color: #ededed;
`;
export const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  /* width: 80vw; */
  /* height: 110px; */
  max-width: 450px;
  gap: 8px;
`;
export const WelcomeContain = styled.div`
  width: 80vw;
`;
