import styled from "styled-components";
import { greyCubo } from "../../constants/colors";

export const InputPassword = styled.input`
  border-radius: 2px;
  border: none;
  padding: 16px;
  justify-content: space-between;
`;
export const InputPContainer = styled.div`
  width: 328px;
  height: 56px;
  border-radius: 2px;
  border: 1px solid ${greyCubo};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputStyled = styled.input`
  width: 328px;
  height: 56px;
  border-radius: 2px;
  border: 1px solid ${greyCubo};
  padding: 16px;
  justify-content: space-between;
  text-decoration: none;
`;

export const LabelStyled = styled.label`
  position: relative;
  width: 78px;
  top: -67px;
  left: -115px;
  padding: 4px;
  background-color: white;
  font-size: 12px;
  letter-spacing: -0.29px;
  color: ${greyCubo};
  z-index: 1;
`;

export const ImgPassword = styled.img`
  margin-right: 16px;
  width: 24px;
  height: 24px;
`;