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

class Questions3 extends React.Component {
  state = {
    curtido: false,
  };

  onClickCurtida = () => {
    this.setState({
      curtido: !this.state.curtido,
    });
  };

  render() {
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
        </PostHeader>
      </PostContainer>
    )  
  }
}
export default Questions3;
