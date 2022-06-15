import React from "react";
import styled from "styled-components";


const PostContainer = styled.div`
  border: 1px solid rgb(250, 200, 300);
  width: 75%;
  margin-bottom: 10px;
  border-radius: 10px;
  background-color: rgb(150, 200, 200);
  word-wrap: break-word;
`;



class Questions1 extends React.Component {
  state = {
    name: '',
    age: '',
    email: '',
    academicDegree: ''
  };

  changeName = (event) => {
    this.setState({ name: event.target.value });
  };

  changeAge = (event) => {
    this.setState({ age: event.target.value });
  };

  changeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  changeDegree = (event) => {
    this.setState({ academicDegree: event.target.value });
  };

  render() {
    let userName = ""

    if (this.props.name === ""){
      userName = "Anonimo"
    } else {
      userName = this.props.name
    }

    return (
      <PostContainer>
        <p>Qual seu nominho?</p>
        <input>
          placeholder={"Seu nome completo"}
          value={this.state.name}
          onChange={this.changeName}
        </input>

        <p>Idade?</p>
        <input>
          placeholder={"Sua idade"}
          value={this.state.age}
          onChange={this.changeAge}
        </input>

        <p>Email?</p>
        <input>
          placeholder={"E-mail valido"}
          value={this.state.email}
          onChange={this.changeEmail}
        </input>

        <p>Grau de escolaridade</p>
{/*         <select name='select'>
          <option value='médio'>Médio</option>
          <option value='graduado'>graduado</option>
          <option value='Pós'>Pós</option>
          onChange={this.changeDegree}
        </select> */}
{/*         <PostHeader>
        <p>{userName}: </p>
        <p>{this.props.name}</p>
        </PostHeader> */}
      </PostContainer>
    )  
  }
}
export default Questions1;


/*  addNewMsn = () => {
    const newMsn = {
      user: this.state.user,
      content: this.state.content,
    };
    if(this.state.content !== ""){
      this.setState({
        messages: [...this.state.messages, newMsn],
        user: "",
        content: ""
      });
    } else {
      alert("Campo mensagem em branco!")
    }
  };

  clickEnter = (event) => {
    if (event.key === "Enter"){
      this.addNewMsn ()
    };
  };

  render() {
    const componentesMsnICQ = this.state.messages.map((eachMessage) => {
      return (
        <Icq
          user= {eachMessage.user} content= {eachMessage.content}
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
            onKeyPress={this.clickEnter}
          />
          <SendButton src={Enviar} alt="Aviao de enviar" onClick={this.addNewMsn}/>
        </FormContainer>
      </AppContainer>
    );
  }
}

export default App; */