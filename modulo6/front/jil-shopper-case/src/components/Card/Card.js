import React, { useContext, useEffect } from "react";
import ProductImg from "../../assets/productImg.jpeg";
import { GlobalContext } from "../../global/GlobalContext";
import { CalculateBalance, CreatePurchase } from "../../services/request";
import { Container, ItemCard, Button, Pgreen, DivPrice } from "./styled";

export const Card = () => {
  const { allProducts, cart, setBalance } = useContext(GlobalContext);

  const onClickAdd = (item) => {
    const body = {
      id_cart: cart,
      id_product: item.id,
      price: item.price,
      name: item.name,
    };
    CreatePurchase(body);
    CalculateBalance(setBalance, cart);
  };

  const productsCard = allProducts?.map((item) => {
    return (
      <ItemCard key={item.id}>
        <p>{item.name}</p>
        <img src={ProductImg} alt="Foto" />
        <p>Quantidade em estoque: {item.qty_stock}</p>
        <DivPrice>
          <p>R$ </p>
          <Pgreen>{item.price}</Pgreen>
        </DivPrice>
        <Button onClick={() => onClickAdd(item)}>+Adicionar</Button>
      </ItemCard>
    );
  });

  return <Container>{productsCard}</Container>;
};
