import styled from "styled-components";

export const InternalCard = styled.div`
  color: white;
  margin: 2px 2px;
  height: 58vh;
  p {
    font-size: 2.5vh;
    margin-left: 8px;
  }
  #photoProfile {
    height: 30vh;
    width: 18vw;
    object-fit: cover;
    object-position: top;
    overflow-y: hidden;
    border-radius: 10px;
    box-shadow: 0 0 2em gold;
    margin: 5px 25px auto;
  }
`;
export const ImgButton = styled.img`
  height: 45px;
  border-radius: 10px;
  :hover {
    height: 50px;
    box-shadow: 0 0 2em gold;
  }
  :active {
    opacity: 0.9;
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;
export const ButtonClear = styled.button`
  /* position: absolute;
bottom: 16vh;
right: 12vw; */
  color: red;
  border-radius: 10px;
  box-shadow: 0 0 2em red;
  margin: 5px 46px;
  align-items: center;
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
  width: 15vw;
  border-radius: 10px;
`;
