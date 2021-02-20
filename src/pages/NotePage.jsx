import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NoteCard from "../components/NoteCard";
import TokenContext from "../contexts/TokenContext";
import UrlContext from "../contexts/UrlContext";

import userImg from "../images/user.png";

const NotePage = () => {
  const [inputState, setInputState] = useState([]);
  const [notes, setNotes] = useState([]);
  const { token, setToken } = useContext(TokenContext); //name;
  const [authToken, setAuthToken] = useState(null);
  const { url, setUrl } = useContext(UrlContext);

  // useEffect(() => {
  //   console.log("local-->" + localStorage.getItem("localnotes"));
  // }, [notes]);

  const handleAdd = () => {
    notes ? setNotes([...notes, inputState]) : setNotes([inputState]);
    localStorage.setItem("localnotes", [...notes, inputState]);
  };

  // const localnotes = localStorage.getItem("localnotes");
  // console.log(localnotes);

  useEffect(() => {
    const data = localStorage.getItem("localnotes");
    const dataArr = data && data.split(",");
    data && setNotes([...dataArr]);
    // const dataarr = JSON.parse(data);
    // dataarr ? setNotes(dataarr) : console.log("localStorage沒有備忘");
  }, []);

  return (
    <StyledTravelPage>
      <Header></Header>
      <StyledCardSection>
        <StyledCard>
          <img src={url ? url : userImg} alt="" />
          <h4>{token}</h4>
        </StyledCard>

        <div className="note">
          <h3>旅行備忘錄</h3>
          <input className="inputtext"
            onChange={(e) => {
              setInputState(e.target.value);
            }}
            type="text"
          />
          <button
            className="add"
            onClick={handleAdd}

            // ? notes
            //   ? setNotes([...notes, inputState])
            //   : setNotes([inputState])

            // console.log("notes" + notes);

            // const notesString = JSON.stringify(notes);
            // notesString
            //   ? localStorage.setItem("localStorageNote", notesString)
            //   : console.log("沒有備忘");
            // }}
          >
            加到備忘錄
          </button>

          {notes &&
            notes.map((note, index) => {
              return (
                <NoteCard
                  ket={index}
                  description={note}
                  handelDelete={() => {
                    setNotes([
                      ...notes.slice(0, index),
                      ...notes.slice(index + 1)
                    ]);
                    localStorage.setItem("localnotes", [
                      ...notes.slice(0, index),
                      ...notes.slice(index + 1)
                    ]);
                  }}
                />
              );
            })}
        </div>
      </StyledCardSection>
      <Footer></Footer>
    </StyledTravelPage>
  );
};

export default NotePage;

const StyledCardSection = styled.section`
text-align:center;
  color: white;
  background: rgba(0, 0, 0, 0.4);
  width: 900px;
  margin: 80px auto;
  /* border: 1px solid black; */
  display: flex;
  /* height: 800px; */
  .note {
    width: 550px;
    margin: 20px;
    text-align:center;
    .inputtext {
      color:black;
    }
  }
  .add {
    margin-left: 5px;
  }
  button{
    color:black;
  }
`;

const StyledCard = styled.div`
  /* border: 1px solid black; */
  width: 350px;

  img {
    background: url(url);
    width: 200px;
    border-radius: 50%;
    margin-top: 20px;
    margin-bottom: 10px;
    margin-left:20px;
  }
  h4 {
    margin-bottom: 10px;
    text-align:center;
    
  }
`;

const StyledTravelPage = styled.div`
  background: url("https://gallery.twtainan.net/image/991/1024x768") fixed;
  background-size: cover;
`;
