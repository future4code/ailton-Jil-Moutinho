import React from "react";
import axios from "axios";
import styled from "styled-components";
import ScreenMusicsPlaylist from "./musicsPlaylist";

const Main = styled.div`
  background-color: lightgrey;
  text-align: center;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  align-items: center;
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

const UserCard = styled.div`
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  width: 20%;
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
`;

const ButtonDelete = styled.button`
  border: 1px solid black;
  border-radius: 10px;
`;

class Playlists extends React.Component {
  state = {
    playlistList: [],
    screen: "list",
    findName: "",
    userId: "",
  };

  changeScreen = (userId) => {
    if (this.state.screen === "list") {
      this.setState({ screen: "sreenMusics", userId: userId });
    } else {
      this.setState({ screen: "list", userId: "" });
    }
  };

  componentDidMount() {
    this.getPlaylists();
  }

  getPlaylists = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

    axios
      .get(url, {
        headers: {
          Authorization: "jil-moutinho-ailton",
        },
      })
      .then((res) => {
        this.setState({ playlistList: res.data });
      })
      .catch((err) => {
        alert("Ocorreu um problema, tente novamente: ", err);
      });
  };

  deletUser = (id) => {
    if (window.confirm("Esta certo disso? Ler com voz de Silvio Santos")) {
      const urlDelete = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`;

      axios
        .delete(urlDelete, {
          headers: {
            Authorization: "jil-moutinho-ailton",
          },
        })
        .then((res) => {
          alert("Usuário apagado com sucesso!");
          {this.getPlaylists()}
        })
        .catch((err) => {
          alert("Ocorreu um problema, tente novamente: ", err);
        });
    }
  };

  handleFindName = (event) => {
    this.setState({ findName: event.target.value });
  };

  findUser = () => {
    const urlGetByName = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/search?name=${this.state.findName}`;

    axios
      .get(urlGetByName, {
        headers: {
          Authorization: "jil-moutinho-ailton",
        },
      })
      .then((res) => {
        this.setState({ playlistList: res.data });
        console.log(res.data);
      })
      .catch((err) => {
        alert("Ocorreu um problema, tente novamente: ", err);
      });
  };

  render() {
    const playlistListScreen = this.state.playlistList.map((user) => {
      return (
        <UserCard onClick={() => this.changeScreen(user.id)} key={user.id}>
          {user.name}
          <ButtonDelete onClick={() => this.deletUser(user.id)}>
            Deletar usuário
          </ButtonDelete>
        </UserCard>
      );
    });

    return (
      <div>
        {this.state.screen === "list" ? (
          <div>
            <Header>
              <h2>Lista de usuários cadastrados</h2>
            </Header>
            <Main>
              {this.state.playlistList.length === 0 && (
                <div>Nadinha...</div>
              )}
              {playlistListScreen}
              <h3>Procurando alguém específico?</h3>
              <InputStyle
                placeholder="Nome"
                type='text"'
                value={this.state.findName}
                onChange={this.handleFindName}
              />
              <Button01 onClick={this.findUser}>Procurar</Button01>
              <Button01 onClick={this.props.goToRegister}>
                Ir para cadastro de usuários
              </Button01>
            </Main>
          </div>
        ) : (
          <ScreenMusicsPlaylist
            userId={this.state.userId}
            changeScreen={this.changeScreen}
          />
        )}
      </div>
    );
  }
}

export default Playlists;
