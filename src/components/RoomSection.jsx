import React from "react";
import styled from "styled-components";
import room1 from "../images/rooms/room1.jpg";

const RoomSection = () => {
  return (
    <StyledContainer>
      {/* <StyledRoomDiv>
        <div className="pic"></div>
        <img src="" />
        <h3></h3>
        <p></p>
        <p></p>
        <br />
        <a href="">訂房去>>>ㄋ</a>
      </StyledRoomDiv>
    </StyledContainer> */}
  );
};

export default RoomSection;

const StyledContainer = styled.div`
  max-width: 860px;
  margin: auto;
`;

const StyledRoomDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 60px auto;
  img {
    width: 50%;
    margin-right: 80px;
    transform: scale(1, 1);
    transition: all 1s ease-out;
    border-radius: 5px;
  }
  img:hover {
    transform: scale(1.1, 1.1);
  }
  a {
    text-decoration: none;
    border: 1px solid #2ea3f2;
    border-radius: 30px;
    padding: 15px;
    font-size: 18px;
  }
  a:hover {
    background-color: #ececec;
    border: #ececec;
    font-size: 20px;
  }
`;
