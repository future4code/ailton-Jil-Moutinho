import styled from "styled-components";

export const ChoosenContainer = styled.div`
  color: white;
  margin: 0 auto;
  margin-top: 10px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ChoosenList = styled.div`
  height: 58vh;
  width: 90%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  ::-webkit-scrollbar-track {
    background: none;
  }
  ::-webkit-scrollbar-thumb {
    background-color: green;
    border-radius: 20px;
    border: 3px solid black;
  }
  li {
    display: flex;
    flex-grow: 1;
    width: 90%;
    border: 0.5px solid white;
    box-shadow: 0 0 1em green;
    border-radius: 10px;
    list-style: none;
    color: white;
    align-items: center;
    margin: 3px auto;
    :hover {
      width: 99%;
    }
    img {
      height: 3rem;
      width: 3rem;
      object-fit: cover;
      border-radius: 50%;
      margin-right: 5px;
    }
  }
`;
export const ButtonClear = styled.button`
  /* position: absolute;
bottom: 5.8rem; */
  color: red;
  border-radius: 10px;
  box-shadow: 0 0 2em red;
  margin: 0 auto;
  align-items: center;
  width: 11rem;
  :hover {
    color: white;
    background-color: red;
  }
  :active {
    opacity: 0.9;
  }
`;
export const Loading = styled.img`
  height: 15vh;
  width: 10vw;
  border-radius: 10px;
  margin: 0 15%;
  align-items: center;
`;
