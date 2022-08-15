import React from "react";
import "./App.css";
import styled from "styled-components";
import axios from "axios";

const All = styled.div`
  background-color: lightgrey;
  text-align: center;
  width: 100%;
  higth: 100%;
`;

const Header = styled.div`
  background-color: darkblue;
  text-align: center;
  width: 100%;
  higth: 20%;
  color: white;
  align-content: center;
  ul {
    display: flex;
  }
  li {
    list-style-type: none;
    border-radius: 20px;
    border: solid 1px orange;
    margin-botton: 20px;
    padding: 10px;
  }
`;

const InputStyle = styled.input`
  border-radius: 20px;
  border: solid 1px orange;
  margin-botton: 20px;
  padding: 10px;
  margin-right: 10px;
`;

const Button01 = styled.button`
  border-radius: 20px;
  background-color: orange;
  margin-bottom: 20px;
  padding: 10px;
  box-shadow: 10px 5px 5px black;
`;

class App extends React.Component {
  state = {
    screen: "inputs",
    users: [],
    nameInput: "",
    emailInput: "",
  };

  onClickSreenLogin = () => {
    this.setState({
      screen: "inputs",
    });
  };

  onClickSreenUsers = () => {
    this.setState({
      screen: "usersList",
    });
  };

  onChangeName = (event) => {
    this.setState({
      nameInput: event.target.value,
    });
  };

  onChangeEmail = (event) => {
    this.setState({
      emailInput: event.target.value,
    });
  };

  componentDidUpdate() {
    this.getUsers();
    /*     localStorage.setItem("users", JSON.stringify(this.state.users))
     */
  }

  componentDidMount() {
    this.getUsers();
  }

  /*   componentDidMount() {
    const users = localStorage.getItem("users")
    if(users) {
    const usersInfo = localStorage.getItem("users")
    const convertedData = JSON.parse(usersInfo)
    this.setState({users: convertedData})
    }
  } */

  getUsers = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "jil-moutinho-ailton",
          },
        }
      )
      .then((response) => {
        this.setState({ users: response.data });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  createUser = () => {
    const body = {
      name: this.state.nameInput,
      email: this.state.emailInput,
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "jil-moutinho-ailton",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        this.getUsers();
        alert("Usuário cadastrado!");
      })
      .catch((error) => {
        console.log(error.message);
        alert(`Usuário não cadastrado! Erro: ${error}`);
      });
  };

  deletUser = (id) => {
    axios.delete(
      `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}
      `,
      {
        headers: {
          Authorization: "jil-moutinho-ailton",
        },
      }
    );
  };

  render() {
    return (
      <All>
        <Header>
          <h1>Exercícios de cadastro de usuários</h1>
          <ul>
            <li onClick={this.onClickSreenLogin}> Cadastro de usuários</li>
            <li onClick={this.onClickSreenUsers}> Lista de usuários</li>
          </ul>
        </Header>
        <main>
          {this.state.screen === "inputs" && (
            <section>
              <p>Nome usuário:</p>
              <InputStyle
                value={this.state.inputName}
                onChange={this.onChangeName}
              />
              <p>E-mail do usuário:</p>
              <InputStyle
                value={this.state.inputEmail}
                onChange={this.onChangeEmail}
              />
              <Button01 onClick={this.createUser}>Cadastrar</Button01>
            </section>
          )}
          {this.state.screen === "usersList" && (
            <section>
              <p>A lista tem: {this.state.users.length} usuários</p>
              {this.state.users.map((user) => {
                return (
                  <div key={user.id}>
                    <p>{user.name}</p>
                    <Button01
                      onClick={() => {
                        this.deletUser(user.id);
                      }}
                    >
                      Retirar usuário
                    </Button01>
                  </div>
                );
              })}
            </section>
          )}
        </main>
      </All>
    );
  }
}

export default App;
