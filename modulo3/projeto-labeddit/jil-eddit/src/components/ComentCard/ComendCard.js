import React, { useState } from "react";
import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";
import ArrowCircleDownSharpIcon from "@mui/icons-material/ArrowCircleDownSharp";
import ArrowCircleUpTwoToneIcon from "@mui/icons-material/ArrowCircleUpTwoTone";
import ArrowCircleDownTwoToneIcon from "@mui/icons-material/ArrowCircleDownTwoTone";
import {
  positiveCommentVote,
  negativeCommentVote,
} from "../../services/couters";
import { CardContainer, LikeContai, EnviadoP } from "./styled";

const ComentCard = ({ item }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <CardContainer>
      <EnviadoP>Enviado por: {item?.username}</EnviadoP>
      <div> {item?.body} </div>
      <LikeContai>
        {item?.userVote === 1 ? (
          <ArrowCircleUpTwoToneIcon color="primary" />
        ) : (
          <ArrowCircleUpOutlinedIcon
            onClick={() => {
              positiveCommentVote(1, item?.id, setIsLoading);
            }}
          />
        )}
        {item.voteSum ? item.voteSum : 0}
        {item?.userVote === -1 ? (
          <ArrowCircleDownTwoToneIcon />
        ) : (
          <ArrowCircleDownSharpIcon
            onClick={() => {
              negativeCommentVote(-1, item?.id, setIsLoading);
            }}
          />
        )}
      </LikeContai>
    </CardContainer>
  );
};

export default ComentCard;
