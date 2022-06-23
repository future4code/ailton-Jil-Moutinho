import React from "react";
import styled from "styled-components";
import axios from "axios";
import ScreenDetails from "./screenDetails";

const All = styled.div`
  background-color: lightgrey;
`;
const Main = styled.div`
  padding: 10px;
  background-color: #4e5754;
  align-content: center;
  color: white;
  height: 80vh;
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
const ButtonDelete = styled.button`
  border: 1px solid black;
  border-radius: 10px;
`;
const PlaylistCard = styled.div`
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  width: 20%;
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
`;

class ScreenSearch extends React.Component {
  state = {
    nameInput: "",
    listOfplaylist: [],
    screenUp: "searchList",
    screenDown: "list",
    playlistId: "",
  };

  componentDidMount() {
    this.getList();
  }

  getList = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

    const axiosPass = {
      headers: {
        Authorization: "jil-moutinho-ailton",
      },
    };

    axios
      .get(url, axiosPass)
      .then((res) => {
        this.setState({ listOfplaylist: res.data.result.list });
      })
      .catch((err) => {
        alert(
          `Ocorreu um problema, tente novamente mais tarde: ${err.message}`
        );
      });
  };

  handleName = (event) => {
    this.setState({ nameInput: event.target.value });
  };

  registerPlaylist = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

    const body = {
      name: this.state.nameInput,
    };

    const axiosPass = {
      headers: {
        Authorization: "jil-moutinho-ailton",
      },
    };

    axios
      .post(url, body, axiosPass)
      .then((res) => {
        alert("Playlist cadastrada!");
        this.getList();
      })
      .catch((err) => {
        console.log(err);
        alert(`Erro ao cadastrar! ${err.message}`);
      });
  };

  deletPlaylist = (id) => {
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
          this.getList();
        })
        .catch((err) => {
          alert("Ocorreu um problema, tente novamente: ", err);
        });
    } else {
      alert("Que bom que não apagou a playlist!");
    }
  };

  changeScreen = (playlistId) => {
    if (this.state.screenDown === "list") {
      this.setState({ screenDown: "sreenDetails", playlistId: playlistId });
    } else {
      this.setState({ screenDown: "list", playlistId: "" });
    }
  };

  render() {
    const listOfPlaylistScreen = this.state.listOfplaylist.map((item) => {
      return (
        <PlaylistCard onClick={() => this.changeScreen(item.id)} key={item.id}>
          {item.name}
          <ButtonDelete onClick={() => this.deletPlaylist(item.id)}>
            Deletar playlist
          </ButtonDelete>
        </PlaylistCard>
      );
    });

    return (
      <All>
        <Main>
          {this.state.screenDown === "list" ? (
            <div>
              <div>
                {this.state.listOfplaylist.length === 0 && <div>Nadinha...</div>}
                {listOfPlaylistScreen}
              </div>
            
              <div>
                <p>Quer criar uma playlist sua novinha?</p>
                <InputStyle
                  placeholder="Nome"
                  value={this.state.nameInput}
                  onChange={this.handleName}
                />
                <Button01 onClick={this.registerPlaylist}>Criar</Button01>
              </div>
            </div>
          ) : ( 
            <ScreenDetails
              playlistId={this.state.playlistId}
              changeScreen={this.changeScreen}
            />
          )}
        </Main>
      </All>
    );
  }
}

export default ScreenSearch;
