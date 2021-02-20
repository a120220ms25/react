import React, { useEffect, useLayoutEffect, useReducer, useState } from "react";
import { Link, Route } from "react-router-dom";
import styled from "styled-components";
import AreaCard from "../components/AreaCard";
import CardInfo from "../components/CardInfo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { data } from "../data";
import mainVision03Img from "../images/mainVision/003.jpg";

const TravelPage = ({ card }) => {
  const [cardsInfo, setCardsInfo] = useState(card);
  const [renderCards, setRenderCards] = useState(card);
  const [title, setTitle] = useState("行政區景點資訊");
  const [clickName, setClickName] = useState("");
  useEffect(() => {
    setCardsInfo(data);
  }, [cardsInfo]);

  const handleClick = (name) => {
    setClickName(name);
    var newCard = [];

    if (name === "所有景點") {
      newCard = [...cardsInfo];
    }

    for (let i = 0; i < cardsInfo.length; i++) {
      const district = cardsInfo[i].district;
      if (district === name) {
        newCard.push(cardsInfo[i]);
      } else {
      }
    }

    setRenderCards(newCard);
    // console.log("nnnn" + name);
    setTitle(name);
  };

  return (
    <div>
      <Header></Header>
      <StyledMainImg>
        <img src={mainVision03Img} alt="" width="100%" />
        <h5>台南旅遊資訊</h5>
      </StyledMainImg>
      <StyledCardSection>
        <StyledCard>
          {/* <Link to="/travel/${clickName}"> */}
          <AreaCard onClick={handleClick}></AreaCard>
          {/* </Link> */}
        </StyledCard>

        <div className="title">{title}</div>

        <StyledTravelInfo>
          {cardsInfo &&
            renderCards.map((res) => {
              return (
                <>
                  {/* <Route path={`/travel/${res.id}`}> */}
                  <StyledCardInfo>
                    <CardInfo card={res}></CardInfo>
                  </StyledCardInfo>
                  {/* </Route> */}
                </>
              );
            })}
        </StyledTravelInfo>
      </StyledCardSection>
      <Footer></Footer>
    </div>
  );
};

export default TravelPage;

const StyledMainImg = styled.div`
  margin: auto;
  position: relative;
  h5 {
    left: 10%;
    top: 85%;
    color: white;
    position: absolute;
  }
`;
const StyledCard = styled.div`
  height: 100px;
  background-color: white;
  a {
    text-decoration: none;
  }
`;
const StyledCardSection = styled.section`
  background-color: white;
  .title {
    background-color: #f3e96b;
    height: 40px;
    font-size: 25px;
    line-height: 40px;
    letter-spacing: 30px;　 
    text-align:center;
  }
`;

const StyledTravelInfo = styled.div`
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  width: 1000px;
  align-items:stretch;

  }
`;

const StyledCardInfo = styled.div`
  width: 330px;
  padding: 10px;
  margin-bottom: 20px;
`;
