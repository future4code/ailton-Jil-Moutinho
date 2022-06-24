import React from "react";
import axios from "axios";
import styled from "styled-components";

const All = styled.div`
  background-color: lightgrey;
`;

const Header = styled.div`
  background-color: black;
  width: 100vw;
  height: 5vw;
  color: white;
  padding: 10px;
`;
const Main = styled.div`
  padding: 10px;
  background-color: #4e5754;
  align-content: center;
  color: white;
  height: 80vh;
  margin: 0 auto;
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
  height: 50%;
`;
const PlaylistCard = styled.div`
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  width: 70%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  align-items: center;
`;

class ScreenDetails extends React.Component {
  state = {
    playlistDetail: [],
    musicNameInput: "",
    artistInput: "",
    urlInput: "",
  };

  componentDidMount() {
    this.getPlaylistDetails();
  }

  getPlaylistDetails = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistId}/tracks`;

    axios
      .get(url, {
        headers: {
          Authorization: "jil-moutinho-ailton",
        },
      })
      .then((res) => {
        this.setState({ playlistDetail: res.data.result.tracks });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleName = (event) => {
    this.setState({ musicNameInput: event.target.value });
  };

  handleArtist = (event) => {
    this.setState({ artistInput: event.target.value });
  };

  handleUrl = (event) => {
    this.setState({ urlInput: event.target.value });
  };

  addTrack = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistId}/tracks`;

    const body = {
      name: this.state.musicNameInput,
      artist: this.state.artistInput,
      url: this.state.urlInput,
    };

    axios
      .post(url, body, {
        headers: {
          Authorization: "jil-moutinho-ailton",
        },
      })
      .then((res) => {
        alert("Música adicionada");
        this.getPlaylistDetails();
        this.setState({ musicNameInput: "", artistInput: "", urlInput: "" });
      })
      .catch((err) => {
        alert(`Erro ao adicionar a música: ${err.message}`);
      });
  };

  deletMusic = (item) => {
    if (window.confirm("Esta certo disso? Ler com voz de Silvio Santos")) {
      const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${item.id}/tracks/${this.props.playlistId}`;

      axios
        .delete(url, {
          headers: {
            Authorization: "jil-moutinho-ailton",
          },
        })
        .then((res) => {
          alert("Música apagada com sucesso!");

          this.getPlaylistDetails();
        })
        .catch((err) => {
          alert("Ocorreu um problema, tente novamente: ", err);
        });
    } else {
      alert("Que bom que não apagou essa música!");
    }
  };

  render() {
    const listOfMusicScreen = this.state.playlistDetail.map((item) => {
      return (
        <PlaylistCard key={item.id}>
          {item.name} - {item.artist}
          <iframe
            src={item.url}
            width="30%"
            height="90%"
            frameBorder="0"
            allowfullscreen=""
            allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>

          <ButtonDelete onClick={() => this.deletMusic(item.id)}>
            Deletar playlist
          </ButtonDelete>
        </PlaylistCard>
      );
    });

    return (
      <All>
        <Header>
          <h2>Lista de música {this.props.namePlaylist}</h2>
        </Header>
        <Main>
          {listOfMusicScreen}
          <InputStyle
            placeholder="Nome da música"
            value={this.state.musicNameInput}
            onChange={this.handleName}
          />
          <InputStyle
            placeholder="Artista / Autor"
            value={this.state.artistInput}
            onChange={this.handleArtist}
          />
          <InputStyle
            placeholder="url"
            value={this.state.urlInput}
            onChange={this.handleUrl}
          />
          <Button01 onClick={this.addTrack}>Adicionar a playlist</Button01>
        </Main>
      </All>
    );
  }
}

export default ScreenDetails;
