import React from "react";

const PostCard = (props) => {
  return (
    <div onClick={props.onClick}>
      <div>Enviado por: {props.username}</div>
      <div> {props.body} </div>
      <div>
        <button>Curtir</button>
        Curtir
        <button>Descurtir</button>
      </div>
      <div>
        <button>Comentário</button>
        {props.voteSum}
      </div>
    </div>
  );
};

export default PostCard;
