import styled from "styled-components";
import { bluePersonare, orangePersonare, pinkPersonare } from "./colors";

export const ButtonConst = styled.button`
  width: 11rem;
  height: 2rem;
  color: white;
  background-image: linear-gradient(
    to top,
    ${pinkPersonare},
    ${bluePersonare},
    ${bluePersonare},
    ${orangePersonare}
  );
  border-radius: 0.7rem;
  font-size: 0.875rem;
  letter-spacing: 0.025rem;
  border: none;
`;
