import React from "react";
/* import axios from "axios";
import ScreenDetails from "./screenDetails"; */
import styled from "styled-components";
import Logo from '../img/logoJilbify.png';

const All = styled.div`
  background-color: lightgrey;
`
const ImgLogo = styled.img`
width: 20vh;
`
const Header = styled.div`
  background-color: black;
  width: 100%;
  height: 20%;
  color: white;
  padding: 10px;
`;

const Main = styled.div`
  background-color: darkgray;
  align-content: center;
  color: white;
  height: 80vh;
`

class ScreenSearchList extends React.Component {
    render(){
        return (
            <All>
              <Header>
                <ImgLogo src={Logo} alt="logo" />
                <p>
                  Edit
                </p>
              </Header>
              <Main>
                  
              </Main>
            </All>
        )
    }
}

export default ScreenSearchList;