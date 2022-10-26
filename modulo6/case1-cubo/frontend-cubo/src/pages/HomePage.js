import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../global/GlobalContext";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import Logo from "../assets/Logo.jpeg";
import { Container, MainContainer, MemberDiv } from "./styles";
import { GetAllShares } from "../services/requests";
import DonutChart from "react-donut-chart";
import { colorsGrafic } from "../constants/colors";

export function HomePage() {
  const { isLoading } = useContext(GlobalContext);

  let [allMembers, setAllMembers] = useState([]);

  useEffect(() => {
    GetAllShares(setAllMembers);
  }, []);

  const Members = allMembers?.map((item) => {
    return (
      <MemberDiv key={item?.nickname}>
        <span>{item?.nickname}</span>
        <span>{item?.first_name}</span>
        <span>{item?.last_name}</span>
        <span>{item?.partnership}%</span>
      </MemberDiv>
    );
  });

  let graficData = allMembers.map((item) => {
    return {
      label: item?.nickname,
      value: item?.partnership,
    };
  });

  const handleClick = (item, clicked) => {
    if (clicked) {
      console.log(item);
    }
  };

  return (
    <>
      <Header />
      {isLoading && <img src={Logo} alt="Loading. Página carregando" />}
      {!isLoading && (
        <Container>
          <MainContainer>
            <MemberDiv>
              {" "}
              <span>
                <strong>Nickname</strong>
              </span>
              <span>
                <strong>First name</strong>
              </span>
              <span>
                <strong>Last name</strong>
              </span>
              <span>
                <strong>Partnership ( % )</strong>
              </span>
            </MemberDiv>
            {Members}
          </MainContainer>
          <MainContainer>
            <DonutChart
              width={500}
              strokeColor={"#FFFFFF"}
              data={graficData}
              colors={colorsGrafic}
              innerRadius={0.5}
              selectedOffset={0.05}
              onClick={(item, clicked) => handleClick(item, clicked)}
            />
          </MainContainer>
        </Container>
      )}
      <Footer />
    </>
  );
}
