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
  margin-right: 5px; `
  


class Questions1 extends React.Component {
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
      msnCurtida = "iconeCoracaoPreto";
    } else {
      msnCurtida = "iconeCoracaoBranco";
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
export default Questions1;
