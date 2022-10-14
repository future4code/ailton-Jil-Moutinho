import React, { useContext, useState } from "react";
import { GlobalContext } from "../../global/GlobalContext";
import ProductImg from "../../assets/productImg.jpeg";
import Less from "../../assets/SubIcon.png";
import More from "../../assets/addIcon.png";
import Garbage from "../../assets/garbageIcon.png";
import {
  GetAllPurchase,
  DelPurchase,
  SumUnits,
  SubUnits,
  CalculateBalance,
} from "../../services/request";
import {
  Container,
  ItemCard,
  Pgreen,
  DivPrice,
  DivQty,
  DivUnits,
  GarbageImg,
} from "./styled";

export const CardCart = () => {
  const { cart, setBalance } = useContext(GlobalContext);
  const [allPurchase, setAllPurchase] = useState([]);

  const result = GetAllPurchase(cart, setAllPurchase);

  const onClickSum = (item) => {
    const body = {
      id_product: item?.id_product,
      id_purchase: item?.id_purchase,
    };
    SumUnits(body);
    
    CalculateBalance(setBalance, cart);
  };

  const onClickSub = (item) => {
    const body = {
      id_product: item?.id_product,
      id_purchase: item?.id_purchase,
    };
    SubUnits(body);
    CalculateBalance(setBalance, cart);
  };

  const onClickDel = (id_purchase) => {
    DelPurchase(id_purchase);
    CalculateBalance(setBalance, cart);
  };

  const productsCart = allPurchase?.map((item) => {
    return (
      <ItemCard key={item.id_purchase}>
        <img src={ProductImg} alt="Foto" />
        <div>
          <p>{item.name}</p>
          <DivPrice>
            <Pgreen>R$ {item.price}</Pgreen>
            <DivUnits>
              <img
                src={Less}
                alt="Subtration sign"
                onClick={() => onClickSub(item)}
              />
              <DivQty> {item.quantity}</DivQty>
              <img
                src={More}
                alt="Plus sign"
                onClick={() => onClickSum(item)}
              />
            </DivUnits>
          </DivPrice>
        </div>
        <GarbageImg
          src={Garbage}
          alt="Garbage"
          onClick={() => onClickDel(item?.id_purchase)}
        />
      </ItemCard>
    );
  });

  return <Container>{productsCart}</Container>;
};
