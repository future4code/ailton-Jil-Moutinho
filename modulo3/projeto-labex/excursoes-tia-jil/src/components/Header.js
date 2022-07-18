import styled from "styled-components";
import { goToLogin } from "../router/Coordinator";
import logo from "../assets/img/logoInvite.jpeg";
import header from "../assets/img/header.jpeg";
import { useNavigate } from "react-router-dom";

const Header = styled.div`
  height: 15vh;
  background-image: url(${header});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  text-shadow: 0.5rem 0.5rem 0.5rem purple;
  img {
    width: 15rem;
    margin-left: 12px;
    border: solid purple 2px;
  }
  button {
    height: 2rem;
    width: 8rem;
    margin: 1rem;
    border-radius: 10px;
    background-color: lightgrey;
    box-shadow: 10px 10px 5px purple;
    box-shadow: 5px 5px 5px blue;
    :hover {
      height: 2.2rem;
      width: 8.2rem;
      opacity: 1;
      background-color: purple;
      color: white;
    }
  }
`;

function HeaderContainer() {
  const navigate = useNavigate();

  return (
    <Header>
      <img src={logo} alt={"Logo"} />
      <button
        onClick={() => {
          goToLogin(navigate);
        }}
      >
        Login
      </button>
    </Header>
  );
}

export default HeaderContainer;
