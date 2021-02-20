import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { userLogin } from "../utils";
import AuthContext from "../contexts/AuthContext";
import TokenContext from "../contexts/TokenContext";
import jwtDecode from "jwt-decode";
import Header from "../components/Header";
import Footer from "../components/Footer";

const loginInfo = {
  account: "",
  password: ""
};

const LoginPage = () => {
  const [login, setLogin] = useState(loginInfo);
  const history = useHistory();
  const { authToken, setAuthToken } = useContext(AuthContext);
  const { token, setToken } = useContext(TokenContext);

  const handleAdd = () => {
    userLogin(login)
      .then((res) => {
        if (res.data.code === "SUCCESS") {
          console.log("res=>" + res.data.result.authToken);
          setAuthToken(res.data.result.authToken);
          localStorage.setItem("token", res.data.result.authToken);
          const token = jwtDecode(res.data.result.authToken);
          console.log(token);
          setToken(token);
          alert("登入成功!");
          history.push("/travel");
        }
      })
      .catch((error) => {
        alert("帳號或密碼錯誤");
        console.log(error.message);
      });
  };

  return (
    <StyledLoginPage>
      <Header></Header>

      <StyledinputBox>
        <StyledloginBox>
          <Link to="/login" style={{ marginRight: 30 }}>
            會員登入
          </Link>
          <Link to="/signup">加入會員</Link>
        </StyledloginBox>
        <StyledInputBox>
          <input
            onChange={(e) => {
              setLogin({
                ...login,
                account: e.target.value
              });
            }}
            type="text"
            placeholder="使用者名稱"
          ></input>
        </StyledInputBox>
        <StyledInputBox>
          <input
            onChange={(e) => {
              setLogin({
                ...login,
                password: e.target.value
              });
            }}
            type="password"
            placeholder="密碼"
          ></input>
        </StyledInputBox>
        <div>
          {/* <Link to="/UserPage/user/:userId"> */}
          <StyledloginButton onClick={handleAdd}>登入</StyledloginButton>
          {/* </Link> */}
        </div>
      </StyledinputBox>
      <Footer></Footer>
    </StyledLoginPage>
  );
};

export default LoginPage;

const StyledinputBox = styled.div`
  margin: 100px auto;
  text-align: center;
  width: 250px;
  font-size: 25px;
  width: 500px;
  height: 450px;
  border: 5px solid black;
  background-color: #fff;
`;

const StyledloginBox = styled.div`
  width: 100%;
  margin: 50px auto;

  a {
    text-decoration: none;
  }
  a:hover {
    color: #7b68ee;
    border-bottom: solid 3px #7b68ee;
    padding-bottom: 8px;
    text-decoration: none;
  }
`;

const StyledInputBox = styled.div`
  margin-bottom: 35px;
`;

const StyledloginButton = styled.button`
  color: white;
  background-color: #00008b;
  width: 315px;
  border-radius: 5px;
`;

const StyledLoginPage = styled.div`
  background: url("https://i2.kknews.cc/SIG=30i4alk/ctp-vzntr/ETHkKW1TI76CT1.jpg");
  background-size: Cover;
`;
