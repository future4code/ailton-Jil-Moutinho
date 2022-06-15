import React from 'react'
import styled from 'styled-components'
import {IconeComContador} from '../IconeComContador/IconeComContador'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'

import salvoNao from '../../img/Naobookmark.svg'
import salvoSim from '../../img/bookmarkSim.svg'

/* **************AULA RENDERIZACAO DE LISTAS************** */


const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

class Post02 extends React.Component {
  state = {
    arrayDePost: [
      {fotoUsuario: <UserPhoto src='http://flimsy-scale.surge.sh/img/paulo.jpeg' alt=""></UserPhoto>,
      nomeUsuario:'paulo',
      fotoPost: <PostPhoto src='https://picsum.photos/200/150?random=1' alt=""></PostPhoto>
      },
      {nomeUsuario:'luiz',
      fotoUsuario: <UserPhoto src='https://media-exp1.licdn.com/dms/image/C4D03AQHr7FHDGTQ7pg/profile-displayphoto-shrink_200_200/0/1611414322397?e=1659571200&v=beta&t=2ZztbflGFxhAvN7SlaO2lsexTkwnpLaYEasJtqJcHo4' alt=""></UserPhoto>,
      fotoPost: <PostPhoto src='https://picsum.photos/200/150?random=2' alt=""></PostPhoto>
      },
      {nomeUsuario:'indio',
      fotoUsuario: <UserPhoto src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAiN0BkR_SuKvlkQd6yCPHIDDblq7iWWTdq2rXxMLyUQ8feo2tZm775rU-bVjyO_i76i8&usqp=CAU' alt=""></UserPhoto>,
      fotoPost: <PostPhoto src='https://picsum.photos/200/150?random=3' alt=""></PostPhoto>
      }
    ],
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    salvo: false,
    valorInputUsuario: "",
    valorInputFotoDele: "",
    valorInputFotoPost: ""
  };

  adicionaPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputUsuario,
      fotoUsuario: <UserPhoto src={this.state.valorInputFotoDele} alt=""/>,
      fotoPost: <PostPhoto src={this.state.valorInputFotoPost} alt=""/>
    };

    const novoArrayPost = [...this.state.arrayDePost, novoPost];

    this.setState({ arrayDePost: novoArrayPost });
  };

  onChangeInputUsuario = (event) => {
    this.setState({ valorInputUsuario: event.target.value });
  };

  onChangeInputFotoDele = (event) => {
    this.setState({ valorInputFotoDele: event.target.value});
  };

  onChangeInputFotoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value });
  };

  onClickCurtida = () => {
    console.log('Curtiu!')
    this.setState({
      curtido: !this.state.curtido
    });
    if (this.state.curtido) {
    this.setState({
      numeroCurtidas: this.state.numeroCurtidas - 1
    })} else {
      this.setState({
      numeroCurtidas: this.state.numeroCurtidas + 1
    })}
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  onClickSalvar = () => {
    console.log('Salvou!')
    this.setState({
      salvo: !this.state.salvo
    });
  }









  render() {

    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    let iconeSalvar

    if(this.state.salvo) {
      iconeSalvar = salvoSim
    } else {
      iconeSalvar = salvoNao
    }


      const listaDePost = this.state.arrayDePost.map((post) => {
      return (
        <p>
          {post.fotoUsuario} - {post.nomeUsuario} - {post.fotoPost}
        </p>
      );
    });


    

    return (
      <div>
        <h1>Novo Post</h1>
        <div>
          <input
            value={this.state.valorInputUsuario}
            onChange={this.onChangeInputUsuario}
            placeholder={"Nome de usuário"}
          />
          <input
            value={this.state.valorInputFotoDele}
            onChange={this.onChangeInputFotoDele}
            placeholder={"URL de foto do perfil"}
          />
          <input
            value={this.state.valorInputFotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder={"URL de foto do seu post"}
          />
          <button onClick={this.adicionaPost}>Adicionar</button>
        </div>
        <div>{listaDePost}</div>
      </div>
    );
  }
}

export default Post02;
