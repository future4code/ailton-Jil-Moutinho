import React from "react";
import Questions1 from "./Questions1";
import Questions2 from "./Questions2";

class Etapa3 extends React.Component {
  render() {
    return (
      <div>
        <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
        <Questions1
          pergunta={"5. Por que você não terminou um curso de graduação?"}
        />
        <Questions2
          pergunta={"6. Você fez algum curso complementar?"}
          opcoes={["Nenhum", "Curso técnico", "Curso de inglês"]}
        />
      </div>
    );
  }
}

export default Etapa3;
