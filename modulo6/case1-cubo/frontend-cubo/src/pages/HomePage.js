import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../global/GlobalContext";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useProtectedPage } from "../hooks/useProtectedPage";
import { Button } from "../constants/ButtonStyles";
import {
  Container,
  MainContainer,
  GifDiv,
  RowDiv,
  MemberInfo,
  TradeContainer,
} from "./styles";
import {
  DelUser,
  GetAllShares,
  GetAvailableShares,
  UpdateUser,
} from "../services/requests";
import LoadingGif from "../assets/Loading.gif";
import DonutChart from "react-donut-chart";
import { colorsGrafic } from "../constants/colors";
import { goToLogin } from "../routes/Coordinators";
import { useNavigate } from "react-router-dom";
import { token } from "../constants/token";

export function HomePage() {
  useProtectedPage();
  const { isLoading, nickname } = useContext(GlobalContext);

  const [allMembers, setAllMembers] = useState([]);
  const [availableShares, setAvailableShares] = useState({});

  const navigate = useNavigate();

  let partnership = 0;

  useEffect(() => {
    GetAllShares(setAllMembers);
    GetAvailableShares(setAvailableShares);
  }, [token, partnership]);

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
      value: Math.round(item?.partnership),
    };
  });

  graficData.push({ label: "Available", value: availableShares });

  const handleClick = (item, clicked) => {
    if (clicked) {
      console.log(item);
    }
  };

  const handlePartnerhip = (event) => {
    partnership = event.target.value;
  };

  const updateShares = (nickname, partnership) => {
    const body = {
      nickname,
      partnership,
    };
    console.log("body", body);
    UpdateUser(body, setAllMembers, setAvailableShares);
  };

  const delMembership = (nickname) => {
    DelUser(nickname);
    goToLogin(navigate);
  };

  const logout = () => {
    localStorage.removeItem("token");
    goToLogin(navigate);
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
                <strong>Partnership( % )</strong>
              </span>
            </RowDiv>
            {Members}
          </MainContainer>
          <MainContainer>
            <DonutChart
              width={450}
              height={300}
              margin-top={6}
              strokeColor={"#FFFFFF"}
              data={graficData}
              colors={colorsGrafic}
              innerRadius={0.5}
              selectedOffset={0.05}
              rotation={0}
              onClick={(item, clicked) => handleClick(item, clicked)}
            />
          </MainContainer>
        </Container>
      )}
      <br />
      <TradeContainer>
        <span>Trade shares</span>
        <input
          name="partnership"
          placeholder="% to sell (-) or to buy (+)"
          type="number"
          onChange={handlePartnerhip}
        />
        <Button onClick={() => updateShares(nickname, partnership)}>
          Send
        </Button>
      </TradeContainer>
      <Button onClick={() => delMembership(nickname)}>Sell shares</Button>
      <Button onClick={() => logout()}>Logout</Button>
      <Footer />
    </>
  );
}
