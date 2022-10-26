import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../global/GlobalContext";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useProtectedPage } from "../hooks/useProtectedPage";
import { Button } from "../constants/ButtonStyles";
import LoadingGif from "../assets/Loading.gif";
import { Container, MainContainer, GifDiv, RowDiv, MemberInfo } from "./styles";
import { DelUser, GetAllShares } from "../services/requests";
import DonutChart from "react-donut-chart";
import { colorsGrafic } from "../constants/colors";
import { goToHome } from "../routes/Coordinators";
import { useNavigate } from "react-router-dom";

export function HomePage() {
  useProtectedPage();
  const { isLoading, nickname } = useContext(GlobalContext);

  let [allMembers, setAllMembers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    GetAllShares(setAllMembers);
  }, []);

  const Members = allMembers?.map((item) => {
    return (
      <RowDiv key={item?.nickname}>
        <MemberInfo>{item?.nickname}</MemberInfo>
        <MemberInfo>{item?.first_name}</MemberInfo>
        <MemberInfo>{item?.last_name}</MemberInfo>
        <MemberInfo>{item?.partnership}%</MemberInfo>
      </RowDiv>
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

  const delMembership = (nickname) => {
    DelUser(nickname);
    goToHome(navigate);
  };

  return (
    <>
      <Header />
      {isLoading && (
        <GifDiv src={LoadingGif} alt="Loading. Página carregando" />
      )}
      {!isLoading && (
        <Container>
          <MainContainer>
            <RowDiv>
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
            </RowDiv>
            {Members}
          </MainContainer>
          <MainContainer>
            <DonutChart
              width={450}
              height={300}
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
      <br />
      <Button onClick={() => delMembership(nickname)}>Sell shares</Button>
      <Footer />
    </>
  );
}
