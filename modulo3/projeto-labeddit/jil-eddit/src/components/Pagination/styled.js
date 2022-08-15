import styled from "styled-components";

export const PaginationContain = styled.div`
  display: flex;
  flex-direction: row;
  width: 98vw;
  justify-content: center;
  align-items: center;
  align-self: center;
  padding: 4px;
  font-size: small;
  nav {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    gap: 8px;
    /*     ul{
       margin: 0;
       padding: 0;
    } */
  }
  span {
      width: 20px;
    border-color: lightgray;
border-radius: 20px;
padding: 1px;
    background-color: #F27649;
    color: white;
    cursor: pointer;
    :hover {
      background-color: #ff6489;
    }
  }
`;
