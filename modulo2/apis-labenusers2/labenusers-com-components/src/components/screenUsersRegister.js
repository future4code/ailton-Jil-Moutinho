import React from 'react'
import axios from "axios"
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
  padding: 10px
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

class ScreenRegister extends React.Component{
    state = {
        nameInput: '',
        emailInput: ''
    }

    handleName = (event) => {
        this.setState ({nameInput: event.target.value})
    }

    handleEmail = (event) => {
        this.setState ({emailInput: event.target.value})
    }
    
    registerUsers = () => {
        const urlRegister = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

        const body = {
        name: this.state.nameInput,
        email: this.state.emailInput,
        }

        axios.post(urlRegister, body, {
            headers: {
                Authorization: 'jil-moutinho-ailton'
            }      
        }).then ((res) => {
            console.log(res);
            alert('Usuário cadastrado')
        }).catch ((err) => {
            console.log(err);
            alert('Erro ao cadastrar!', err)
        })
    }

    render(){
        return(
            <All>
                <Header>
                <h2>Registro de novo usuário</h2>
                </Header>
                <Main>
                <InputStyle 
                    placeholder='Nome'
                    value={this.state.nameInput}
                    onChange={this.handleName}
                />
                <InputStyle 
                    placeholder='Email'
                    value={this.state.emailInput}
                    onChange={this.handleEmail}/>   
                <Button01 onClick={this.registerUsers}>Cadastrar</Button01> 

                <Button01 onClick={this.props.goToList}>Lista de usuários já cadastrados</Button01>
                </Main>
            </All>
        )
    }
} 


export default ScreenRegister;