import React from "react";
import axios from "axios";

class ScreenRegister extends React.Component {
  state = {
    nameInput: "",
    emailInput: "",
  };

  handleName = (event) => {
    this.setState({ nameInput: event.target.value });
  };

  handleEmail = (event) => {
    this.setState({ emailInput: event.target.value });
  };

  registerUsers = () => {
    const urlRegister =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

    const body = {
      name: this.state.nameInput,
      email: this.state.emailInput,
    };

    axios
      .post(urlRegister, body, {
        headers: {
          Authorization: "jil-moutinho-ailton",
        },
      })
      .then((res) => {
        alert("Cadastrado com sucesso!");
        this.setState({ nameInput: "", emailInput: "" });
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  render() {
    return (
      <div>
        <h2>Registro de novo usuário</h2>
        <input
          placeholder="Nome"
          value={this.state.nameInput}
          onChange={this.handleName}
        />
        <input
          placeholder="Email"
          value={this.state.emailInput}
          onChange={this.handleEmail}
        />
        <button onClick={this.registerUsers}>Cadastrar</button>
        <button onClick={this.props.goToList}>
          Lista de usuários já cadastrados
        </button>
      </div>
    );
  }
}

export default ScreenRegister;
