import React, { useState } from "react";
import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";
import ArrowCircleDownSharpIcon from "@mui/icons-material/ArrowCircleDownSharp";
import ArrowCircleUpTwoToneIcon from "@mui/icons-material/ArrowCircleUpTwoTone";
import ArrowCircleDownTwoToneIcon from "@mui/icons-material/ArrowCircleDownTwoTone";
import {
  positiveCommentVote,
  negativeCommentVote,
  delCommentVote,
} from "../../services/couters";
import { CardContainer, LikeContai, EnviadoP } from "./styled";

const ComentCard = ({ item, getArrayComents }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <CardContainer>
      <EnviadoP>Enviado por: {item?.username}</EnviadoP>
      <div> {item?.body} </div>
      <LikeContai>
        {item?.userVote === 1 ? (
          <ArrowCircleUpTwoToneIcon
            color="primary"
            onClick={() => {
              delCommentVote(item?.id, setIsLoading, getArrayComents);
            }}
          />
        ) : (
          <ArrowCircleUpOutlinedIcon
            color="primary"
            onClick={() => {
              positiveCommentVote(1, item?.id, setIsLoading, getArrayComents);
            }}
          />
        )}
        {item.voteSum ? item.voteSum : 0}
        {item?.userVote === -1 ? (
          <ArrowCircleDownTwoToneIcon
            color="primary"
            onClick={() => {
              delCommentVote(item?.id, setIsLoading, getArrayComents);
            }}
          />
        ) : (
          <ArrowCircleDownSharpIcon
            color="primary"
            onClick={() => {
              negativeCommentVote(-1, item?.id, setIsLoading, getArrayComents);
            }}
          />
        )}
      </LikeContai>
    </CardContainer>
  );
};

export default ComentCard;
