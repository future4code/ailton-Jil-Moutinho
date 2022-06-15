import React from "react";
import Questions1 from "./Questions1";
import Questions2 from "./Questions2";

class Etapa1 extends React.Component {
  render() {
    return (
      <div>
        <h3>ETAPA 1 - DADOS GERAIS</h3>
        <Questions1 pergunta={"1. Qual o seu nome?"} />
        <Questions1 pergunta={"2. Qual sua idade?"} />
        <Questions1 pergunta={"3. Qual seu email?"} />
        <Questions2
          pergunta={"4. Qual a sua escolaridade?"}
          opcoes={[
            "Ensino médio incompleto",
            "Ensino médio completo",
            "Ensino superior incompleto",
            "Ensino superior completo"
          ]}
        />
      </div>
    );
  }
}

export default Etapa1;