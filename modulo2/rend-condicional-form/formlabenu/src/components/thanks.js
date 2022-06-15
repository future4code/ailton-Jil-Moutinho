import React from "react";
import iconeCoracaoBranco from "../img/favorite-white.svg";
import iconeCoracaoPreto from "../img/favorite.svg";
import styled from "styled-components";

const PostContainer = styled.div`
  border: 1px solid rgb(250, 200, 300);
  width: 75%;
  margin-bottom: 10px;
  border-radius: 10px;
  background-color: rgb(150, 200, 200);
  word-wrap: break-word;
`;

const PostHeader = styled.div`
  height: 30px;
  display: inline-flex;
  align-items: center;
  padding-left: 10px;
`;

const IconImage = styled.img`
  padding-left: 5px;
`;

const UsuariosAzul = styled.p`
  color: rgb(48, 48, 95);
  font-weight: bold;
  margin-right: 5px;
  `


class Icq extends React.Component {
  state = {
    curtido: false,
  };

  onClickCurtida = () => {
    this.setState({
      curtido: !this.state.curtido,
    });
  };

  render() {
    let msnCurtida;

    if (this.state.curtido) {
      msnCurtida = iconeCoracaoPreto;
    } else {
      msnCurtida = iconeCoracaoBranco;
    }

    let userName = ""

    if (this.props.user === ""){
      userName = "Anonimo"
    } else {
      userName = this.props.user
    }

    return (
      <PostContainer>
        <PostHeader>
        <UsuariosAzul>{userName}: </UsuariosAzul>
        <p>{this.props.content}</p>
        <IconImage alt={"Icone"} src={msnCurtida} onClick={this.onClickCurtida} 
        />
        </PostHeader>
      </PostContainer>
    )  
  }
}
export default Icq;

/* addNewMsn = () => {
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
