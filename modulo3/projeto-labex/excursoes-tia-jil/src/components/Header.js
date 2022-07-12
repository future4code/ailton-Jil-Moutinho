import styled from "styled-components";
import { goToLogin } from "../router/Coordinator";
import logo from "../assets/img/logo.png";
import { useNavigate } from "react-router-dom";

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

function HeaderContainer() {
  const navigate = useNavigate();

  return (
    <Header>
      <img src={logo} alt={"Logo"} />
      <h2>Welcome to the best travel website on Earth!</h2>
      <button onClick={() => {goToLogin(navigate)}}>Login</button>
    </Header>
  );
}

export default HeaderContainer;
