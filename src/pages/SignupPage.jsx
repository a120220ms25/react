import React, { useCallback, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

import AuthContext from "../contexts/AuthContext";
import jwtDecode from "jwt-decode";
import TokenContext from "../contexts/TokenContext";
import Header from "../components/Header";
import Footer from "../components/Footer";

//localstorage 瀏覽器資料庫 記錄在網址  key/value
//localStorage.setItem  /getItem

const defaultRegister = {
  appId: "weblab",
  email: "",
  username: "",
  password: ""
};

const SignupPage = () => {
  const history = useHistory();
  const [register, setRegister] = useState(defaultRegister);
  const { authToken, setAuthToken } = useContext(AuthContext);
  const { token, setToken } = useContext(TokenContext);

  const userRegister = useCallback(async () => {
    const newuserInfo = await axios.post(
      "https://api.weblab.tw/v1/auth/register",
      {
        appId: "weblab",
        email: register.email,
        username: register.username,
        password: register.password
      }
    );
    return newuserInfo;
  }, [register]);

  const handleClick = () => {
    userRegister(register)
      .then((res) => {
        // console.log(res);
        if (res.data.code === "SUCCESS") {
          // setAuthToken(res.data.result.authToken);
          // localStorage.setItem("token", res.data.result.authToken);
          history.push("/login");
          alert("註冊成功!請重新登入");
        } else {
          alert("註冊失敗->" + res.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // useEffect(() => {
  //   userRegister()
  //     .then((res) => {
  //       setRegister(res);
  //       console.log("success");
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //     });
  // }, []);

  return (
    <StyledSignupPage>
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
              setRegister({
                ...register,
                email: e.target.value
              });
            }}
            type="text"
            placeholder="電子信箱"
          ></input>
        </StyledInputBox>
        <StyledInputBox>
          <input
            onChange={(e) => {
              setRegister({
                ...register,
                username: e.target.value
              });
            }}
            type="text"
            placeholder="使用者名稱"
          ></input>
        </StyledInputBox>
        <StyledInputBox>
          <input
            onChange={(e) => {
              setRegister({
                ...register,
                password: e.target.value
              });
            }}
            type="password"
            placeholder="密碼"
          ></input>
        </StyledInputBox>
        <div>
          <StyledloginButton onClick={handleClick}>註冊</StyledloginButton>
        </div>
      </StyledinputBox>
    
    </StyledSignupPage>
  );
};

export default SignupPage;

const StyledinputBox = styled.div`
  margin: 100px auto;
  text-align: center;
  width: 250px;
  font-size: 25px;
  width: 500px;
  height: 450px;
  border: 2px solid black;
  background-color: #fff;
`;

const StyledloginBox = styled.div`
  width: 100%;
  margin: 35px auto;
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
  margin-bottom: 30px;
`;

const StyledloginButton = styled.button`
  width: 315px;
  color: white;
  background-color: #00008b;
  border-radius: 5px;
`;

const StyledSignupPage = styled.div`
  background: url("https://pic.52112.com/171201/Green_ombre_watercolor/2FnZ8g49xr.jpg");
  background-size: Cover;
  height: 100vh;
`;
