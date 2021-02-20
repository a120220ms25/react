import React from "react";
import styled from "styled-components";
const NoMatchPage = () => {
  return (
    <StyledBackground>
      <StyledText>
        <p style={{ color: "red", marginTop: "50px" }}>頁面發生錯誤 !</p>
        <a href="/">點擊回首頁</a>
      </StyledText>
    </StyledBackground>
  );
};

export default NoMatchPage;

const StyledBackground = styled.div`
  img {
    margin-top: 50px;
  }
`;
const StyledText = styled.div`
  a {
    text-decoration: none;
  }
`;
