import React from "react";
import PlaylistCreate from "./components/playlistcreat";
import Playlists from "./components/playlists";
import styled from "styled-components";

const All = styled.div`
  background-color: lightgrey;
  text-align: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

class App extends React.Component {
  state = {
    screen: "register",
  };

  changeScreen = () => {
    switch (this.state.screen) {
      case "usersList":
        return <Playlists goToRegister={this.goToRegister} />;
      case "register":
          return <PlaylistCreate goToList={this.goToList} />;
      default:
        return <PlaylistCreate goToList={this.goToList} />;
    }
  };

  goToRegister = () => {
    this.setState({ screen: "register" });
  };

  goToList = () => {
    this.setState({ screen: "usersList" });
  };

  render() {
    return (
      <All>
        <div>{this.changeScreen()}</div>
      </All>
    );
  }
}

export default App;
