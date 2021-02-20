import jwtDecode from "jwt-decode";
import React, { useContext, useEffect, useState } from "react";
import { Button, Dropdown, Nav, Navbar } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import AuthContext from "../contexts/AuthContext";
import TokenContext from "../contexts/TokenContext";
import logo from "../images/logo.jpg";

const Header = () => {
  const { token, setToken } = useContext(TokenContext);
  const { authToken, setAuthToken } = useContext(AuthContext);
  const [userState, setUserState] = useState("登入");

  const history = useHistory();

  useEffect(() => {
    authToken ? setUserState("登出") : setUserState("登入");
  }, [authToken]);

  useEffect(() => {
    const firstToken = localStorage.getItem("token");
    setAuthToken(firstToken);
  }, [authToken]);

  useEffect(() => {
    authToken ? setToken(jwtDecode(authToken).username) : setToken("");
  }, [authToken]);

  const handleClick = () => {
    authToken ? alert("請先登出") : history.push("/signup");
  };
  return (
    <>
  


      <Navbar className="navbar" bg="light" variant="light" sticky="top">

     <StyledTitle>
         <h4>包成家</h4>
     </StyledTitle>   
        <StyledLogo>
          <img
            className="logo"
            src={logo}
            alt=""
            width="50px"
            height="50px"
          ></img>
        </StyledLogo>
        <Nav className="mr-auto">
          <Nav.Link href="/">首頁</Nav.Link>
          <Nav.Link href="/room">房型介紹</Nav.Link>
          <Nav.Link href="/travel">旅遊資訊</Nav.Link>
        </Nav>

        <StyledUserStateDiv>
          <div className="user">
            <Dropdown>
              <Dropdown.Toggle as="span" variant="success" id="dropdown-basic">
                {token ? token : "尚未登入"}
              </Dropdown.Toggle>
              {token ? (
                <Dropdown.Menu>
                  <Dropdown.Item href="/note">旅行備忘錄</Dropdown.Item>
                </Dropdown.Menu>
              ) : (
                ""
              )}
            </Dropdown>
          </div>

          <Link to="/login">
            <Button
              variant="light"
              onClick={() => {
                authToken ? localStorage.clear() : console.log("這時沒有token");
              }}
            >
              {" "}
              {userState}
            </Button>{" "}
          </Link>
          <Button onClick={handleClick} variant="dark">
            註冊
          </Button>
        </StyledUserStateDiv>
      </Navbar>
   

    </>
  );
};

export default Header;
const StyledTitle = styled.div`
color:black;
margin-right:10px;
`;
const StyledLogo = styled.div`
  img {
    border-radius: 50%;
  }
`;
const StyledTopHeaderDiv = styled.div`
  background-color: white;
  height: 15px;
`;
const StyledUserStateDiv = styled.div`

display: flex;
  padding: 2px;
  color: black;
  Button {
    margin: 5px;
  }
  .user {
    line-height: 40px;
    margin-right: 10px;
  
  }
  button{
    margin-top:8px;
  }
`;