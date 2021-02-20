import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RoomPage from "./pages/RoomPage";
import TravelPage from "./pages/TravelPage";
import { data } from "./data";
import TokenContext from "./contexts/TokenContext";
import AuthContext from "./contexts/AuthContext";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import UrlContext from "./contexts/UrlContext";
import NotePage from "./pages/NotePage";
import NoMatchPage from "./pages/NoMatchPage";

export default function App() {
  const [authToken, setAuthToken] = useState(null); //localstorage authtoken
  const [token, setToken] = useState(null); //解析後name
  const [url, setUrl] = useState("");

  console.log(authToken);

  return (
    <div className="App">
      <TokenContext.Provider value={{ token, setToken }}>
        <AuthContext.Provider value={{ authToken, setAuthToken }}>
          <UrlContext.Provider value={{ url, setUrl }}>
            <BrowserRouter>
              <Switch>
                <Route path="/" exact>
                  <HomePage />
                </Route>
                <Route path="/room">
                  <RoomPage />
                </Route>
                <Route path="/travel">
                  <TravelPage card={data} />
                </Route>
                <Route path="/login">
                  <LoginPage />
                </Route>
                <Route path="/signup">
                  <SignupPage />
                </Route>
                <Route path="/note">
                  <NotePage />
                </Route>
                <Route path="*">
                  <NoMatchPage />
                </Route>
              </Switch>
            </BrowserRouter>
          </UrlContext.Provider>
        </AuthContext.Provider>
      </TokenContext.Provider>
    </div>
  );
}

