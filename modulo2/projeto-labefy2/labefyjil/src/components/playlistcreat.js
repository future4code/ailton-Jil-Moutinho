import React from "react";
import axios from "axios";
import styled from "styled-components";

const All = styled.div`
  background-color: lightgrey;
  text-align: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

const Main = styled.div`
  background-color: lightgrey;
  text-align: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
  margin-top: 20px;
`;

const Header = styled.div`
  background-color: darkblue;
  text-align: center;
  width: 100%;
  height: 20%;
  color: white;
  align-content: center;
  padding: 10px;
`;

const InputStyle = styled.input`
  border-radius: 20px;
  border: solid 1px orange;
  margin-bottom: 20px;
  padding: 10px;
  margin-right: 10px;
`;

const Button01 = styled.button`
  border-radius: 20px;
  background-color: orange;
  margin-bottom: 20px;
  margin-right: 20px;
  margin-left: 20px;
  padding: 10px;
  box-shadow: 10px 5px 5px black;
`;

class PlaylistCreate extends React.Component {
  state = {
    nameInput: "",
  };

  handleName = (event) => {
    this.setState({ nameInput: event.target.value });
  };

  createPlaylist = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

    const body = {
      name: this.state.nameInput,
    };

    axios
      .post(url, body, {
        headers: {
          Authorization: "jil-moutinho-ailton",
        },
      })
      .then((res) => {
        console.log(res);
        alert("Usuário cadastrado");
      })
      .catch((err) => {
        console.log(err);
        alert("Erro ao cadastrar!", err);
      });
  };

  render() {
    return (
      <All>
        <Header>
          <h2>Criar nova playlist</h2>
        </Header>
        <Main>
          <InputStyle
            placeholder="Nome"
            value={this.state.nameInput}
            onChange={this.handleName}
          />

          <Button01 onClick={this.createPlaylist}>Criar</Button01>

          <Button01 onClick={this.props.goToList}>
            Lista de playlists
          </Button01>
        </Main>
      </All>
    );
  }
}

export default PlaylistCreate;
