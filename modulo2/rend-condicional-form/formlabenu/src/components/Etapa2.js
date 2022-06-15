import React from "react";
import Questions1 from "./Questions1";

class Etapa2 extends React.Component {
  render() {
    return (
      <div>
        <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
        <Questions1 pergunta={"5. Qual curso?"} />
        <Questions1 pergunta={"6. Qual a unidade de ensino?"} />
      </div>
    );
  }
}

export default Etapa2;
