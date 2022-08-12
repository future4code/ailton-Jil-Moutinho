import { Button } from "@mui/material";
import styled from "styled-components";

export const PostButton = styled(Button)`
  width: 300px;
  border-radius: 50px;
  margin-top: 10px;
  margin-bottom: 5px;
  align-items: center;
  background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
`;
export const InputComment = styled.input`
  height: 100px;
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #ededed;
  border-color: #ededed;
`;
export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  width: 98vw;
  margin-top: 15px;
  padding: 8px;
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const PostsContain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 98vw;
  margin-top: 15px;
  padding: 8px;
  gap: 8px;
`;
