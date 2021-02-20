import React from "react";
import styled from "styled-components";
import logo from "../images/logo.jpg";
import fbLogo from "../images/fb_logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <StyledFooterDiv>
      <div className="main">
        <div className="container">
          <StyledLogoDiv>
            <img src={logo} alt="" width="80px"></img>
            <div className="name">
              <h6>包成家</h6>
              <h6>BaoChengFamily</h6>
            </div>
          </StyledLogoDiv>

          <StyledUl>
            <Link to="/">
              <li>首頁</li>
            </Link>
            <Link to="/room">
              <li>房型介紹</li>
            </Link>
            <Link to="/travel">
              <li>旅遊資訊</li>
            </Link>
          </StyledUl>

          <StyledLink>
            <img
              src="http://www.interconnect.tw/onmyway/wp-content/uploads/2017/06/instagram-logo-1-1.png"
              alt=""
              width="50px"
            />
            <a href="https://www.facebook.com/baochengfamily" target="blank">
              <img src={fbLogo} alt="" width="50px" />
            </a>
            <img
              src="http://www.interconnect.tw/onmyway/wp-content/uploads/2017/06/twitter-logo-button-1.png"
              alt=""
              width="50px"
            />
          </StyledLink>
        </div>
      </div>

      <StyledCopyRightDiv>
        <div>2021 &copy; BaoChengFamily.com</div>
      </StyledCopyRightDiv>
    </StyledFooterDiv>
  );
};

export default Footer;

const StyledFooterDiv = styled.div`
  height: 300px;
  background-color: black;

  .container {
    display: flex;
    justify-content: space-between;
    width: 70%;
    margin: auto;
  }
  .main {
    padding-top: 30px;
    display: flex;
  }
`;

const StyledLogoDiv = styled.div`
  display: flex;
  margin-right: 50px;
  height: 80px;
  img {
    border-radius: 50%;
  }
  .name {
    text-align: justify;
    margin: auto 10px;
    color: white;
  }
`;

const StyledUl = styled.ul`
  text-align: left;
  color: white;
  font-size: 18px;
  height: 235px;
  background-color: black;
  margin-right: 100px;
  text-decoration: none;
  a {
    text-decoration: none;
    font-size: 14px;
  }
  li {
    color: white;
    margin-bottom: 10px;
  }
  li:hover {
    color: #2ea3f2;
    text-decoration: none;
  }
`;

const StyledLink = styled.div`
  /* background-color: #fff; */
  text-align: right;
  img {
    padding-right: 15px;
  }
`;

const StyledCopyRightDiv = styled.div`
  color: white;
  font-size: 10px;
  text-align: center;
`;
