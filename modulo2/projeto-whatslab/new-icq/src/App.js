import React from "react";
import Icq from "./components/icq";
import Enviar from "./img/aviao.svg"
import styled from "styled-components";

let arrayMsns = [
  {
    user: "Paulo",
    content: "Oi, sou Paulo",
  },
  {
    user: "Luiz",
    content: "Oi, sou Luiz",
  },
  {
    user: "Thiago",
    content: "Oi, sou Thiago",
  }
];

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const MessagesContainer = styled.div`
  display: flex;
  justify-content: end;
  flex-direction: column;
  height: 70vh;
  width: 75%;
  margin-top: 10px;
  overflor: scroll;
  `;


const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;

  height: 80%;
  width: 75%;
  border: 1px solid gray;
  border-radius: 5px;
  margin: 20px;
  padding: 20px;
`;

const InputsStyle = styled.input`
  display: inline;
  justify-content: space-between;
  width: 20%;
  hight: 35%;
  border: 1px solid gray;
  border-radius: 5px;
`;

const InputsStyle2 = styled.input`
  display: inline;
  justify-content: space-between;
  width: 75%;
  hight: 35%;
  border: 1px solid gray;
  border-radius: 5px;
`;

const SendButton = styled.img.hover`
  opacity: 0.5;
  box-shadow: 5px 5px rgb(150, 200, 200);
`


class App extends React.Component {
  state = {
    messages: arrayMsns,
    user: "",
    content: "",
  };

  changeUser = (event) => {
    this.setState({ user: event.target.value });
  };

  changeContent = (event) => {
    this.setState({ content: event.target.value });
  };

  addNewMsn = () => {
    const newMsn = {
      user: this.state.user,
      content: this.state.content,
    };

    this.setState({
      messages: [...this.state.messages, newMsn],
      user: "",
      content: ""
    });
  };

  render() {
    const componentesMsnICQ = this.state.messages.map((eachMessage) => {
      return (
        <Icq
          user= {eachMessage.user}          content= {eachMessage.content}
        />
      );
    });

    return (
      <AppContainer>
        <MessagesContainer>
        {componentesMsnICQ}
        </MessagesContainer>
        <FormContainer>
          <InputsStyle
            placeholder={"Nome do Usuário"}
            value={this.state.user}
            onChange={this.changeUser}
          />
          <InputsStyle2
            placeholder={"Mensagem. (Quer mandar mesmo?)"}
            value={this.state.content}
            onChange={this.changeContent}
          />
          <SendButton src={Enviar} alt="Aviao de enviar" onClick={this.addNewMsn}/>
        </FormContainer>
      </AppContainer>
    );
  }
}

export default App;
