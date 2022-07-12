import logo from "./assets/img/logo.png";
import Foguete from "./assets/img/Foguete.jpg";
import React from "react";
import styled from "styled-components";
import { Router } from "./router/Router";
import { goToLogin } from "./router/Coordinator";

const Header = styled.div`
  height: 20vh;
  background-color: lightblue;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 16rem;
    margin-left: 12px;
  }
  button {
    height: 2rem;
    width: 8rem;
    margin: 1rem;
    border-radius: 10px;
    background-color: lightgrey;
    box-shadow: 5px 5px 5px blue;
    :hover {
      height: 2.2rem;
      width: 8.2rem;
      opacity: 1;
      background-color: grey;
      color: white;
    }
  }
`;
const MainContainer = styled.div`
  display: flex;
`;
const Main = styled.div`
  background-image: url(${Foguete});
  width: 87vw;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
`;
const Content = styled.div`
  color: white;
  margin: 1rem;
`;
/* const Nav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: lightblue;
  height: 80vh;
  width: 13rem;
  button {
    height: 2rem;
    width: 8rem;
    margin: 1rem;
    border-radius: 10px;
    background-color: lightgrey;
    box-shadow: 5px 5px 5px blue;
    :hover {
      height: 2.2rem;
      width: 8.2rem;
      opacity: 1;
      background-color: grey;
      color: white;
    }
  }
`; */



  /* <Header>
<img src={logo} alt={'Logo'} />
<h2>Welcome to the best travel website on Earth!</h2>
<button onClick={() => goToLogin()}>Login</button>
</Header>
<MainContainer>
<Main>
  <Content>

  </Content>
        </Main>
      </MainContainer> */

