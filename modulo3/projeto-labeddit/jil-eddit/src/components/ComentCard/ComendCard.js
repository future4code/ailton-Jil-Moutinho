import React, { useState } from "react";
import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";
import ArrowCircleDownSharpIcon from "@mui/icons-material/ArrowCircleDownSharp";
import {
  positiveCommentVote,
  negativeCommentVote,
} from "../../services/couters";
import { CardContainer, LikeContai, EnviadoP } from "./styled";

const ComentCard = (props) => {
  const [isLoading, setIsLoading] = useState(false);
console.log(props);
  return (
    <CardContainer>
      <EnviadoP>Enviado por: {props?.username}</EnviadoP>
      <div> {props?.body} </div>
      <LikeContai>
        <ArrowCircleUpOutlinedIcon
          onClick={() => {
            positiveCommentVote(1, props?.id, setIsLoading);
          }}
        />
        {props.voteSum ? props.voteSum : 0}
        <ArrowCircleDownSharpIcon
          onClick={() => {
            negativeCommentVote(-1, props?.id, setIsLoading);
          }}
        />
      </LikeContai>
    </CardContainer>
  );
};

export default ComentCard;
