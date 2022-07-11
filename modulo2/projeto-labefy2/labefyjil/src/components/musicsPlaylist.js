import React from "react";
import axios from "axios";
import styled from "styled-components";

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

class ScreenMusicsPlaylist extends React.Component {
  state = {
    userData: {},
    userEdition: "editButton",
    nameInput: "",
    emailInput: "",
  };

  componentDidMount() {
    this.getUserDetails();
  }

  getUserDetails = () => {
    const urlSearch = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${this.props.userId}`;

    axios
      .get(urlSearch, {
        headers: {
          Authorization: "jil-moutinho-ailton",
        },
      })
      .then((res) => {
        this.setState({ userData: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleName = (event) => {
    this.setState ({nameInput: event.target.value})
  }

  handleEmail = (event) => {
    this.setState ({emailInput: event.target.value})
  }

  registerUsers = () => {
    const urlEdit = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${this.props.userId}`;

    const body = {
      name: this.state.nameInput,
      email: this.state.emailInput,
    };

    axios.put(urlEdit, body, {
      headers: {
        Authorization: "jil-moutinho-ailton",
      },
    }).then((res) => {
      console.log(res);
      this.getUserDetails();
      alert('Usuário editado');
      this.setState({ nameInput: "", emailInput: "" });
    }).catch((err) => {
      alert("Erro ao editar o usuário", err);
    })
  };

  render() {
    return (
      <div>
        <Header>
          <h2>Edição de usuários</h2>
        </Header>
        <Main>
          <p>{this.state.userData.name}</p>
          <p>{this.state.userData.email}</p>
          <InputStyle
            placeholder="Nome"
            value={this.state.nameInput}
            onChange={this.handleName}
          />
          <InputStyle
            placeholder="Email"
            value={this.state.emailInput}
            onChange={this.handleEmail}
          />
          <Button01 onClick={this.registerUsers}>Salvar</Button01>
        </Main>
      </div>
    );
  }
}

export default ScreenMusicsPlaylist;
