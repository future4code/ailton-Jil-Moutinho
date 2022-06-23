import React from 'react';
import styled from "styled-components";
import Logo from './img/logoJilbify.png';
import ScreenSearch from './components/screenSearch'; 
import ScreenSearchList from './components/screenList'; 

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

class App extends React.Component {
  state = {
    searchInput: '',
    userData: {},
    nameInput: '',
    screenUp: 'searchList',
    screenDown: 'list'
  };



  changeScreenUp = () => {
    switch (this.state.screenUp) {
      case "searchList":
        return <ScreenSearch goToBlank={this.goToBlank} />;
      case "blank":
          return <ScreenSearchList goToSearchList={this.goToSearchList} />;
      default:
        return <ScreenSearchList goToSearchList={this.goToSearchList} />;
    }
  };

  goToBlank = () => {
    this.setState({ screen: "blank" });
  };

  goToSearchList = () => {
    this.setState({ screen: "searchList" });
  };

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
        <div>{this.changeScreenUp()}</div>
        {/* <div>{this.changeScreenDown()}</div> */}
      </Main>
    </All>
  );
}
}

export default App;