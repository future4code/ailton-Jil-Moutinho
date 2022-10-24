import styled from "styled-components";

export const Container = styled.footer`
  background-image: linear-gradient(to bottom, #666666, #eaeaea, #ffffff);
  display: flex;
  align-items: center;
  padding: 10px; 
  margin-top: 16px;
  width: 100%;
  height: 100px;
  font-size: small;
  justify-content: space-evenly;
`;

export const DivContact = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: space-between;
  img {
    width: 3rem;
  }
`;

export const DivInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: space-between;
`;
