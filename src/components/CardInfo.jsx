import React, { useState } from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";


const CardInfo = ({ card }) => {
  return (
    <StyledCard>
      <div className="img">
        <img src={card.url} alt=""></img>
        {/* <img className="heart" alt="" src={heartImg}></img> */}
      </div>
      <div className="description">
        {/* <img className="heart2" alt="" src={heartImg2} /> */}
        <h4>{card.name}</h4>
        <p>介紹: {card.introduction}</p>
        <p>地址: {card.address}</p>
        <p>開放時間: {card.open_time}</p>
      </div>
    </StyledCard>
  );
};

export default CardInfo;

const StyledCard = styled.div`
  margin-top: 20px;
  height: 500px;
  background: rgba(0, 0, 0, 0.7);
  :hover {
    background: rgba(0, 0, 0, 0.6);
  }

  .img img {
    width: 100%;
  }
  .description {
    color: white;
    padding: 10px;
    position: relative;
    p {
      text-align: left;
    }
    .heart2 {
      width: 80px;
      position: absolute;
      top: -10px;
      right: 10px;
    }
    .heart {
      width: 80px;
      position: absolute;
      top: -10px;
      right: 10px;
    }
  }
`;
