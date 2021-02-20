import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import mainVision01Img from "../images/mainVision/001.jpg";
import mainVision02Img from "../images/mainVision/002.jpg";

import mainVision04Img from "../images/mainVision/004.jpg";
import aboutImg from "../images/about.jpg";
import roomImg from "../images/rooms/room1.jpg";
// import { Button } from "bootstrap";
import { Breadcrumb, Button, Carousel } from "react-bootstrap";
import styled from "styled-components";
import Weather from "../components/Weather";

const HomePage = () => {
  return (
    <div>
      <Header></Header>
      {/* main vision部分 放主照片 */}
      <section>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block  w-100 "
              src={mainVision02Img}
              alt="BaoChengFamily"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src={mainVision01Img}
              alt="BaoChengFamily"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={mainVision04Img}
              alt="BaoChengFamily"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
      <Weather></Weather>

      {/* about 部分 */}
      <StyledSection>
        <StyledContainer>
          <div className="img">
            <img src={aboutImg} alt="" width="200px" />
          </div>

          <StyledDescription>
            <StyledTitle>
              <h5>關於包成家</h5>
            </StyledTitle>

            <p>
              最能代表台南早期老屋的特色是天井的設計，包成家民宿主人結合喜歡戶外運動的專長，把攀岩的元素跟天井結合，在天井架設一座攀岩垂降場，配合體驗教育的概念提供更多元的教育環境，使進來這個空間的人可以感受不一樣的老屋活力。
              最能代表台南早期老屋的特色是天井的設計，
              包成家主人結合喜歡戶外運動的專長， 把攀岩的元素跟天井結合，
              在天井架設一座攀岩垂降場，
              配合體驗教育的概念期待提供更多元的教育環境，
              使進來這個空間的人可以感受不一樣的老屋活力！
            </p>
          </StyledDescription>
        </StyledContainer>
      </StyledSection>
      {/* 空間與環境 */}
      <section className="room">
        <StyledContainer>
          <StyledRoomDescription>
            <StyledTitle>
              <h5>空間與環境</h5>
            </StyledTitle>
            <p>
              全館可住宿最多24位，公共空間提供交誼廳、簡易廚房、廚具、餐具、電晶爐、微波爐、熱水器、飲水機、洗衣機、投幣式烘衣機，住宿期間提供DIY早餐，全館提供免費無線網路。
            </p>
            <a href="https://die4h.csb.app/room">看房型>>></a>
          </StyledRoomDescription>

          <img src={roomImg} alt="" height="250px" />
        </StyledContainer>
      </section>
      {/* 交通位置 */}
      <StyledSection>
        <StyledContainer>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.7552490793682!2d120.19520445059592!3d22.996025923016443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e76651d1aeab1%3A0xfc8e7673d1765a1d!2z5YyF5oiQ5a62!5e0!3m2!1szh-TW!2stw!4v1612106187637!5m2!1szh-TW!2stw"
            width="500"
            height="350"
            frameborder="0"
            border="0"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
          <StyledDescription>
            <StyledTitle>
              <h5>交通位置</h5>
            </StyledTitle>
            <p>地址：台南市中西區海安路二段128巷38號 </p>
            <p>電話：(+886 ) 965 123 456</p>
            <p>Email：baoChengFamily@gmail.com</p>
            <a href="https://die4h.csb.app/travel">看旅遊資訊>>></a>
          </StyledDescription>
        </StyledContainer>
      </StyledSection>
      {/* 訂房和天氣 */}
      <section>
        <StyledBookingDescription>
          <div className="booking">
            <p>立即預約訂房(+886 ) 965 123 456</p>

            <a href="https://www.booking.com/hotel/tw/bao-cheng-jia.zh-tw.html?aid=375639;label=msn-vcj2Xu%2ANdeso6eGkwAQckQ-11950573437%3Atikwd-17388470676%3Aloc-40%3Aneo%3Amte%3Adec%3Aqsbooking;sid=21d492f2d7e98da196d2fa5087b6eb60;dest_id=-2637868;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1612170884;srpvid=2d5d410184580171;type=total;ucfs=1&#hotelTmplhttp://www.booking.com/Share-Udv5Ex">
              線上預約訂房>>>
            </a>
          </div>
        </StyledBookingDescription>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;

const StyledSection = styled.section`
  background-color: #ececec;
`;
const StyledContainer = styled.div`
  width: 60%;
  margin: auto;
  display: flex;
  justify-content: left;
  padding: 50px 0;
`;
const StyledDescription = styled.div`
  margin-left: 100px;
  h5 {
    padding: 5px;
    margin-bottom: 50px;
    border: 1.5px solid black;
    border-radius: 5px;
    
  }
  a {
    text-decoration: none;
    border: 1px solid #2ea3f2;
    border-radius: 30px;
    padding: 8px;
    font-size: 15px;
  }
  a:hover {
    background-color: white;
    border: #ececec;
    font-size: 20px;
  }
  p {
    margin-bottom: 35px;
  }
`;
const StyledTitle = styled.div`
  height: 50px;
  padding: 5px;
  width: 150px;
  margin: auto;
  margin-bottom: 30px;
  text-align:center;
 
`;
const StyledRoomDescription = styled.div`
  margin-right: 50px;
  h5 {
    padding: 5px;
    margin-bottom: 50px;
    border: 1.5px solid black;
    border-radius: 5px;
  }
  a {
    text-decoration: none;
    border: 1px solid #2ea3f2;
    border-radius: 30px;
    padding: 8px;
    font-size: 15px;
  }
  a:hover {
    background-color: #ececec;
    border: #ececec;
    font-size: 20px;
  }
  p {
    margin-bottom: 35px;
  }
`;

const StyledBookingDescription = styled.div`
  justify-content: center;
  width: 60%;
  margin: auto;
  display: flex;
  padding: 100px 0;
  a {
    text-decoration: none;
    font-size: 25px;
  }
  a:hover {
    color: red;
  }
`;
