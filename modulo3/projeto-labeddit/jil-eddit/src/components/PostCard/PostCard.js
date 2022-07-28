import React, { useState } from "react";
import {
  CardContainer,
  EnviadoP,
  CounterContainer,
  LikeContai,
  ComentContai,
} from "./styled";
import { positivePostVote, negativePostVote } from "../../services/couters";
import { useNavigate } from "react-router-dom";
import { goToPost } from "../../routes/coordinator";
import ArrowCircleDownSharpIcon from "@mui/icons-material/ArrowCircleDownSharp";
import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ArrowCircleUpTwoToneIcon from "@mui/icons-material/ArrowCircleUpTwoTone";
import ArrowCircleDownTwoToneIcon from "@mui/icons-material/ArrowCircleDownTwoTone";

const PostCard = ({ item, getArrayComents }) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onClickPost = (item) => {
    goToPost(navigate, item?.id);
  };

  return (
    <CardContainer>
      <EnviadoP>Enviado por: {item?.username}</EnviadoP>
      <div
        onClick={() => {
          onClickPost(item);
        }}
      >
        {item?.body}{" "}
      </div>
      <CounterContainer>
        <LikeContai>
          {item?.userVote === 1 ? (
            <ArrowCircleUpTwoToneIcon color="primary" />
          ) : (
            <ArrowCircleUpOutlinedIcon
              onClick={() => {
                positivePostVote(1, item?.id, setIsLoading);
                /* getArrayComents(); */
              }}
            />
          )}
          {item?.voteSum ? item?.voteSum : 0}
          {item?.userVote === -1 ? (
            <ArrowCircleDownTwoToneIcon color="primary" />
          ) : (
            <ArrowCircleDownSharpIcon
              onClick={() => {
                negativePostVote(-1, item?.id, setIsLoading);
                /* getArrayComents(); */
              }}
            />
          )}
        </LikeContai>
        <ComentContai>
          <ChatBubbleOutlineOutlinedIcon />
          {item?.commentCount ? item?.commentCount : 0}
        </ComentContai>
      </CounterContainer>
    </CardContainer>
  );
};

export default PostCard;
