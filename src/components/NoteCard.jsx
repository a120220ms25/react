import React, { useState } from "react";
import styled from "styled-components";

const NoteCard = ({ description, handelDelete }) => {
  return (
    <StyledDiv>
      <button onClick={handelDelete}> X </button>
      <p>{description}</p>
    </StyledDiv>
  );
};

export default NoteCard;

const StyledDiv = styled.div`
  display: flex;
  justify-content: left;
  text-align: center;
  border: 1px solid white;
  width: 400px;
  height: 50px;
  margin: 20px auto;
  p {
    line-height: 50px;
  }
  button {
    margin-right: 30px;
    margin: 10px;
    padding: 10px;
    text-align: center;
    line-height: 10px;
  }
`;
