import React, { useContext } from "react";
import { GlobalContext } from "../../global/GlobalContext";
import Logo from "../../assets/logoImg.png";
import Bag from "../../assets/bagIconGreen.png";
import UserForm from "./userForm";
import { useNavigate } from "react-router-dom";
import {
  Container,
  LogoDiv,
  CartDiv,
  SearchDiv,
  SearchInput,
  Button,
  BalanceDiv,
  InputsDiv,
  BalanceP,
} from "./styled";
import { goHome } from "../../routes/coordinator";

export const Header = () => {
  const { query, setQuery, balance, isOpen, setIsOpen } =
    useContext(GlobalContext);
    const navigate = useNavigate();

  const onChangeQuery = (event) => {
    setQuery(event.target.value);
  };

  let balanceDisplay = "0,00";
  if (balance !== 0) {
    balanceDisplay = balance;
  }

  const onClickCart = (isOpen) => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <LogoDiv>
        <img src={Logo} alt="Logo Shopper" onClick = {goHome(navigate)}/>
      </LogoDiv>
      <InputsDiv>
        <SearchDiv>
          <SearchInput
            placeholder="O que você procura?"
            value={query}
            onChange={onChangeQuery}
          />
          <Button>Buscar</Button>
        </SearchDiv>
        <br />
        <UserForm />
      </InputsDiv>
      <CartDiv onClick={() => onClickCart(isOpen)}>
        <img src={Bag} alt="Bag of groceries" />
        <BalanceDiv>
          <BalanceP>R$ {balanceDisplay}</BalanceP>
          <p>
            ABRIR <strong> v </strong>
          </p>
        </BalanceDiv>
      </CartDiv>
    </Container>
  );
};
