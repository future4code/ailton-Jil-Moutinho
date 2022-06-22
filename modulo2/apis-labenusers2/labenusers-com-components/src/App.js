import React from "react";
import ScreenRegister from "./components/screenUsersRegister";
import ScreenUsersList from "./components/screenUsersList";

class App extends React.Component {
  state = {
    screen: "register",
  };

  changeScreen = () => {
    switch (this.state.screen) {
      case "usersList":
        return <ScreenUsersList goToRegister={this.goToRegister} />;
      default:
        return <ScreenRegister goToList={this.goToList} />;
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
      <div>
        <header>
          <p>Ola mundo</p>
        </header>
        <div>{this.changeScreen()}</div>
      </div>
    );
  }
}

export default App;
