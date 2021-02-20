import React, { useEffect, useState } from "react";
import { getTemperature } from "../utils";
import sunImg from "../images/weather/sun.jpg";
import cloudImg from "../images/weather/cloud2.png";
import rainImg from "../images/weather/rain.png";
import styled from "styled-components";

const Weather = () => {
  const [weather, setWeather] = useState({
    today: "",
    tomorrow: "",
    third: "",
    rain: "",
    todayTem: "",
    tomorrowTem: "",
    thirdTem: ""
  });
  useEffect(() => {
    getTemperature()
      .then((res) => {
        const today = res.weatherElement[1].time[0].elementValue[0].value;
        const tomorrow = res.weatherElement[1].time[8].elementValue[0].value;
        const third = res.weatherElement[1].time[16].elementValue[0].value;
        const rain = res.weatherElement[0].time[0].elementValue[0].value;
        const todayTem = res.weatherElement[3].time[0].elementValue[0].value;
        const tomorrowTem = res.weatherElement[3].time[8].elementValue[0].value;
        const thirdTem = res.weatherElement[3].time[16].elementValue[0].value;

        setWeather({
          today: today,
          tomorrow: tomorrow,
          third: third,
          rain: rain,
          todayTem: todayTem,
          tomorrowTem: tomorrowTem,
          thirdTem: thirdTem
        });
      })
      .catch(() => {});
  }, []);

  // getTemperature();
  console.log("weather" + weather);

  return (
    <StyledweatherSection>
      <StyledweatherContainer>
        <div className="row">
          <div className="weatherItem col-sm-6 col-md-3 col-lg-3">
            <p>今日天氣</p>
            <div className="weather">
              {weather.today === "晴" ? (
                <img src={sunImg} alt="" width="50px" />
              ) : (
                <img src={cloudImg} alt="" width="50px" />
              )}
              {weather.today}
            </div>
            {weather.todayTem}°C
          </div>
          <div className="weatherItem col-sm-6 col-md-3 col-lg-3">
            <p>明日天氣</p>
            <div className="weather">
              {weather.tomorrow === "晴" ? (
                <img src={sunImg} alt="" width="50px" />
              ) : (
                <img src={cloudImg} alt="" width="50px" />
              )}
              {weather.tomorrow}
            </div>
            {weather.tomorrowTem}°C
          </div>
          <div className="weatherItem col-sm-6 col-md-3 col-lg-3">
            <p>後天天氣</p>
            <div className="weather">
              {weather.third === "晴" ? (
                <img src={sunImg} alt="" width="50px" />
              ) : (
                <img src={cloudImg} alt="" width="50px" />
              )}
              {weather.third}
            </div>
            {weather.thirdTem}°C
          </div>

          <div className="rainItem col-sm-6 col-md-3 col-lg-3">
            <p>降雨機率</p>
            <div className="weather">
              <img src={rainImg} alt="" width="50px" />雨
            </div>
            {weather.rain}%
          </div>
        </div>
      </StyledweatherContainer>
    </StyledweatherSection>
  );
};

export default Weather;

const StyledweatherContainer = styled.div`
  display: flex;
  margin: 25px;
  justify-content: center;
  text-align:center;
  .weatherItem {
    width: 200px;
    border-left: 1px solid #ececec;
  }
  .rainItem {
    width: 200px;
    border-left: 1px solid #ececec;
    border-right: 1px solid #ececec;
  }
  .weather {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 5px;
    margin-bottom: 5px;
  }
`;

const StyledweatherSection = styled.div`
  width: 85%;
  margin: auto;
`;
