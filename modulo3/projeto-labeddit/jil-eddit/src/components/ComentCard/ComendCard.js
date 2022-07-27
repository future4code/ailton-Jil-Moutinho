import React from "react";

const ComentCard = (props) => {
  return (
    <div>
      <div>Enviado por: {props.username}</div>
      <div> {props.body} </div>
      <div>
        <button>Curtir</button>
        Curtir
        <button>Descurtir</button>
      </div>
    </div>
  );
};

export default ComentCard;