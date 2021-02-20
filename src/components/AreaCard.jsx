import React from "react";
import styled from "styled-components";

const AreaCard = ({ onClick }) => {
  const areaCards = [
    { id: 0, name: "北門區" },
    { id: 1, name: "將軍區" },
    { id: 2, name: "七股區" },
    { id: 3, name: "麻豆區" },
    { id: 4, name: "佳里區" },
    { id: 5, name: "鹽水區" },
    { id: 6, name: "所有景點" }
  ];

  const handleClick = (e) => {
    const clickName = e.target.innerHTML;
    onClick && onClick(clickName);
  };
  return (
    <StyledContainer>
      <StyledCardDiv>
        {areaCards.map((area) => {
          return (
            <StyledAreaCard onClick={handleClick}>{area.name}</StyledAreaCard>
          );
        })}
      </StyledCardDiv>
    </StyledContainer>
  );
};

export default AreaCard;

const StyledAreaCard = styled.div`
  width: 860px;
  border: 1px solid;
  padding: 10px;
  /* width: 300px; */
  margin: 8px auto;
  border-radius: 2px;
  margin-right: 20px;
  :hover {
    background-color: #007bff;
    border: #f3e96b;
    font-size: 18px;
    color: #f3e96b;
  }
`;
const StyledCardDiv = styled.div`
  display: flex;
  padding: 18px;
`;

const StyledContainer = styled.div`
  max-width: 860px;
  margin: auto;
  text-align: center;
`;
