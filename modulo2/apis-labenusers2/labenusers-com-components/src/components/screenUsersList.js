import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import ScreenDetails from "./ScreenDetails";

const UserCard = styled.div`
border: 1px solid black;
padding: 10px;
margin: 10px;
width: 20%;
display: flex;
justify-content: space-between;
border-radius: 5px
`

const ButtonDelete = styled.button`
border: 1px solid black;
border-radius: 10px;
`

class ScreenUsersList extends React.Component {
    state = {
        usersList: [],
        screen: 'userList',
        findName: '',
        userId: ''
    }

    changeScreen = () => {
        switch (this.state.screen) {
          case "userDetails":
            return <ScreenDetails goToRegister={this.goToRegister} />;
          default:
            return <ScreenUsersList goToList={this.goToList} />;
        }
      };

    componentDidMount() {
        this.getUsers()
    }

    getUsers = async() => {
        const urlUsers = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'

        axios.get(urlUsers, {
            headers: {
                Authorization: 'jil-moutinho-ailton'
            }
        }).then((res) => {
            this.setState({ usersList: res.data })
        }).catch((err) => {
            alert('Ocorreu um problema, tente novamente: ', err)
        })

        try {
            const res = await axios.get(urlUsers, {
                headers: {
                    Authorization: 'jil-moutinho-ailton'
                }
            })
            this.setState({ usersList: res.data })
        } catch (err) {
            alert('Ocorreu um problema, tente novamente: ', err)
        }

    }

    deletUser = (id) => {
        const urlDelete = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(urlDelete, {
            headers: {
                Authorization: 'jil-moutinho-ailton'
            }
        }).then((res) => {
            alert('Usuário apagado com sucesso!')
            {this.getUsers()}
        }).catch((err) => {
            alert('Ocorreu um problema, tente novamente: ', err)
        })
    }

/*     handleFindName = (event) => {
        this.setState({ FindName: event.target.value });
      };

    findUser = (FindName) => {
        const urlGetByName = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?${FindName}`

        axios.get(urlGetByName, {
            headers: {
                Authorization: 'jil-moutinho-ailton'
            }
        }).then((res) => {
            
       console.log(res.data);
            
        }).catch((err) => {
            alert('Ocorreu um problema, tente novamente: ', err)
        })
    } */

    render() {
        const usersListScreen = this.state.usersList.map((user) => {
            return (
                <UserCard key={user.id}>
                    {user.name}
                    <ButtonDelete onClick={() => this.deletUser(user.id)}>Deletar usuário</ButtonDelete>
                </UserCard>
            )
        })

        return (
            <div>
                <h2>Lista de usuários cadastrados</h2>
                {usersListScreen}
                <p>Procurando alguém específico?</p>
{/*                 <input
                    placeholder="Nome"
                    value={this.state.FindName}
                    onChange={this.handleEmail}
                />
                <button onClick={this.findUser}>Procurar</button> */}

                <button onClick={this.props.goToRegister}>Ir para cadastro de usuários</button>
            </div>
        )
    }
}


export default ScreenUsersList;