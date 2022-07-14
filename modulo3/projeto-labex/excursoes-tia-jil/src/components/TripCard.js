import styled from "styled-components";

const TripCard = styled.div`
  height: 20rem;
  width: 20rem;
  background-color: lightblue;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* img {
    width: 16rem;
    margin-left: 12px;
  } */
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

function TripCard() {

  return (
    <TripCard>

    </TripCard>
  );
}

export default TripCard;