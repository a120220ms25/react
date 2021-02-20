import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import room1 from "../images/rooms/room1.jpg";
import room2 from "../images/rooms/room2.jpg";
import room3 from "../images/rooms/room3.jpg";
import room4 from "../images/rooms/room4.jpg";
import publicSpace1 from "../images/publicArea/1.jpg";
import publicSpace2 from "../images/publicArea/2.jpg";
import publicSpace3 from "../images/publicArea/3.jpg";
import publicSpace4 from "../images/publicArea/4.jpg";
import publicSpace5 from "../images/publicArea/5.jpg";
import publicSpace6 from "../images/publicArea/6.jpg";
import mainVision01Img from "../images/mainVision/001.jpg";

const RoomPage = () => {
  return (
    <div>
      <Header></Header>
      {/* 主圖片 */}
      <StyledMainImg>
        <h5>Room & Rate</h5>
        <img src={mainVision01Img} alt="roomImg" width="100%" />
      </StyledMainImg>

      {/* sevice description */}
      <StyledSection>
        <StyledContainer>
          <StyledContainService>
            <p>
              包成家提供您舒適安全的住宿環境及多種服務設備。除了有免費咖啡茶包、飲水機、FREE
              WIFI、吹風機、洗烘衣機(付費)之外，還設有供旅人交流的公共空間與環島旅人沖涼服務。
            </p>
            <img
              src="http://www.interconnect.tw/onmyway/wp-content/uploads/2017/05/6icons-2.jpg"
              alt="serviceImg"
            />
          </StyledContainService>
        </StyledContainer>
      </StyledSection>

      {/* rooms1 */}
      <StyledContainer>
        <StyledRoomDiv>
          <div className="pic"></div>
          <img src={room1} width="10%" alt="room1" />
          <div>
            <h5>德鈴居 2F</h5>
            <p>【四人 X 套房 X 乾濕分離 X 雙人床+榻榻米】</p>
            <p>
              德鈴居，以爸爸媽媽的名而起，一道牆雖分割兩個空間，卻也給彼此有多一點的私人空間。適合全家一同出遊、結伴而行，又可以有自己獨立玩耍空間的朋友。
            </p>

            <br />
            <a
              href="https://www.booking.com/hotel/tw/bao-cheng-jia.zh-tw.html?aid=375639;label=msn-vcj2Xu%2ANdeso6eGkwAQckQ-11950573437%3Atikwd-17388470676%3Aloc-40%3Aneo%3Amte%3Adec%3Aqsbooking;sid=21d492f2d7e98da196d2fa5087b6eb60;dest_id=-2637868;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1612170884;srpvid=2d5d410184580171;type=total;ucfs=1&#hotelTmplhttp://www.booking.com/Share-Udv5Ex"
              target="blank"
            >
              訂房去>>>
            </a>
          </div>
        </StyledRoomDiv>
      </StyledContainer>
      {/* rooms2 */}
      <StyledContainer>
        <StyledRoomDiv>
          <div className="pic"></div>
          <img src={room2} alt="room2" />
          <div>
            <h5>松屋 3F</h5>
            <p>【雙人 X 套房 X 乾濕分離 X 雙人床】</p>
            <p>
              松屋，以阿公的名而起，是以前阿公逃離喧囂靜心的書房，一個獨立不被干擾的空間，適合情侶或是想要安靜的朋友。
              睡前，是阿公的閱讀時間，小說、雜誌翻了許多頁才會翻身入眠。小時候，就是這樣看著阿公的背影長大。
            </p>

            <br />
            <a
              href="https://www.booking.com/hotel/tw/bao-cheng-jia.zh-tw.html?aid=375639;label=msn-vcj2Xu%2ANdeso6eGkwAQckQ-11950573437%3Atikwd-17388470676%3Aloc-40%3Aneo%3Amte%3Adec%3Aqsbooking;sid=21d492f2d7e98da196d2fa5087b6eb60;dest_id=-2637868;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1612170884;srpvid=2d5d410184580171;type=total;ucfs=1&#hotelTmplhttp://www.booking.com/Share-Udv5Ex"
              target="blank"
            >
              訂房去>>>
            </a>
          </div>
        </StyledRoomDiv>
      </StyledContainer>
      {/* rooms3 */}
      <StyledContainer>
        <StyledRoomDiv>
          <div className="pic"></div>
          <img src={room3} width="10%" alt="room3" />
          <div>
            <h5>榮幸居 3F</h5>
            <p>【雙人 X 雅房 X 雙人床】</p>
            <p>
              榮幸居，以阿公阿嬤的名而起，方正的空間有獨立的對話空間，讓彼此的身心靈可以在這個空間得到解放與治癒。因老屋格局關係，本間無法有獨立衛浴。適合久違不見，結伴旅遊的朋友。如果湊到兩對朋友，即可打開松屋與榮幸居的秘密通道。
            </p>

            <br />
            <a
              href="https://www.booking.com/hotel/tw/bao-cheng-jia.zh-tw.html?aid=375639;label=msn-vcj2Xu%2ANdeso6eGkwAQckQ-11950573437%3Atikwd-17388470676%3Aloc-40%3Aneo%3Amte%3Adec%3Aqsbooking;sid=21d492f2d7e98da196d2fa5087b6eb60;dest_id=-2637868;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1612170884;srpvid=2d5d410184580171;type=total;ucfs=1&#hotelTmplhttp://www.booking.com/Share-Udv5Ex"
              target="blank"
            >
              訂房去>>>
            </a>
          </div>
        </StyledRoomDiv>
      </StyledContainer>
      {/* rooms4 */}
      <StyledContainer>
        <StyledRoom4Div>
          <div className="pic"></div>
          <img src={room4} width="10%" alt="room4" />
          <div>
            <h5>雨珠軒 3F</h5>
            <p>【五人 X 套房 X 乾濕分離 X 榻榻米】</p>
            <p>
              簡約的生活，是叔公嬸婆的追求。
              雨珠軒，以叔公嬸婆的名而起，廣大的空間有著淡淡的榻榻米香，是屬於那年代的味道，適合全家出遊、結伴而行，又可以有自己獨立玩耍空間的朋友。
            </p>

            <br />
            <a
              href="https://www.booking.com/hotel/tw/bao-cheng-jia.zh-tw.html?aid=375639;label=msn-vcj2Xu%2ANdeso6eGkwAQckQ-11950573437%3Atikwd-17388470676%3Aloc-40%3Aneo%3Amte%3Adec%3Aqsbooking;sid=21d492f2d7e98da196d2fa5087b6eb60;dest_id=-2637868;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1612170884;srpvid=2d5d410184580171;type=total;ucfs=1&#hotelTmplhttp://www.booking.com/Share-Udv5Ex"
              target="blank"
            >
              訂房去>>>
            </a>
          </div>{" "}
        </StyledRoom4Div>
      </StyledContainer>
      {/* 入住生活公約 */}
      <StyledSection>
        <StyledContainer>
          <StyledContainerNote>
            <div>
              <h5>入住生活公約</h5>
            </div>
            <div>
              <p>
                包成家已有五十年以上歷史，主人長大後再次回到自己小時候居住的地方，自己用心整理設計，維持了大部份空間的原本樣貌，所以沒有華麗的裝潢，甚至沒有擺上電視，舉凡古早式櫥窗、櫃子傢俱甚至格局，都只希望跟大家分享早期這大家族生活在同一棟房子、一起生活一起玩的記憶。
                <br />
                <br />
                房間的命名也是依據過去大家族當時是什麼長輩居住過什麼房間而產生的，所以訂房時請不要害羞的大聲說出你要的房型喔，第一步我們就是要一起找回家的親切感！
                <br />
                <br />
                而這裡真的是個家，不是飯店也不是旅館，在台南熱鬧的中西區市中心闢中取靜的忠明街巷弄中，我們期待讓遠道而來的你可以感受家的舒適，聽聽街道來往聲響、巷弄安靜，在這裡我們用平等的生活態度彼此接待、共同分享~
                歡迎你/妳與我們聯絡，來台南與我們一起，調整齒輪過生活。
              </p>
            </div>
          </StyledContainerNote>
        </StyledContainer>
      </StyledSection>

      {/* public area */}
      <section>
        <StyledContainer>
          <StyledContainerArea>
            <h5>公共環境空間</h5>
            <StyledRow>
              <StyledCol>
                <img
                  src={publicSpace1}
                  alt="publicSpace1"
                  width="260px"
                  height="160px"
                ></img>
              </StyledCol>
              <StyledCol>
                <img
                  src={publicSpace2}
                  alt="publicSpace1"
                  width="260px"
                  height="160px"
                ></img>
              </StyledCol>
              <StyledCol>
                <img
                  src={publicSpace3}
                  alt="publicSpace1"
                  width="260px"
                  height="160px"
                ></img>
              </StyledCol>
              <StyledCol>
                <img
                  src={publicSpace4}
                  alt="publicSpace1"
                  width="260px"
                  height="160px"
                ></img>
              </StyledCol>
              <StyledCol>
                <img
                  src={publicSpace5}
                  alt="publicSpace1"
                  width="260px"
                  height="160px"
                ></img>
              </StyledCol>
              <StyledCol>
                <img
                  src={publicSpace6}
                  alt="publicSpace1"
                  width="260px"
                  height="160px"
                ></img>
              </StyledCol>
            </StyledRow>
          </StyledContainerArea>
        </StyledContainer>
      </section>

      <Footer></Footer>
    </div>
  );
};

export default RoomPage;

const StyledMainImg = styled.div`
  position: relative;
  h5 {
    position: absolute;
    left: 10%;
    top: 85%;
    color: white;
  }
`;

const StyledSection = styled.div`
  background-color: #ececec;
`;

const StyledContainService = styled.div`

  padding: 50px;
  p {
    width: 860px;
    font-size: 15px;
    border-left: 5px solid #ffda00;
    padding-left: 30px;
    text-align: left;
  }
  img {
    margin-top: 50px;
    width: 600px;
  }
`;

const StyledContainer = styled.div`

  max-width: 960px;
  margin: auto;
`;

const StyledRoomDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 60px auto;
  border-bottom: 1px solid #bbbbbb;
  img {
    width: 300px;
    height: 250px;
    margin-right: 80px;
    transform: scale(1, 1);
    transition: all 1s ease-out;
    border-radius: 5px;
    margin-bottom: 70px;
  }
  img:hover {
    transform: scale(1.1, 1.1);
  }
  a {
    text-decoration: none;
    border: 1px solid #2ea3f2;
    border-radius: 30px;
    padding: 15px;
    font-size: 18px;
  }
  a:hover {
    background-color: #ececec;
    border: #ececec;
    font-size: 20px;
  }
`;

const StyledRoom4Div = styled.div`
  display: flex;
  justify-content: center;
  margin: 60px auto;
  img {
    width: 300px;
    height: 250px;
    margin-right: 80px;
    transform: scale(1, 1);
    transition: all 1s ease-out;
    border-radius: 5px;
    margin-bottom: 70px;
  }
  img:hover {
    transform: scale(1.1, 1.1);
  }
  a {
    text-decoration: none;
    border: 1px solid #2ea3f2;
    border-radius: 30px;
    padding: 15px;
    font-size: 18px;
  }
  a:hover {
    background-color: #ececec;
    border: #ececec;
    font-size: 20px;
  }
`;

const StyledContainerNote = styled.div`
  background-color: #ececec;
  padding: 50px 0;
  h5 {
    text-align: left;
    border-left: 5px solid #ffda00;
    padding-left: 20px;
    text-align: left;
  }
  p {
    padding: 10px;
    text-align: left;
  }
`;
const StyledCol = styled.div`
  margin: auto;
  margin-top: 50px;
`;


const StyledContainerArea = styled.div`

  padding-bottom: 80px;
  img {
    border-radius: 3px;
  }

  h5 {
    margin-top: 50px;
    text-align: left;
    border-left: 5px solid #ffda00;
    padding-left: 20px;
    text-align: left;
  }
`;

const StyledRow = styled.div`
display:flex ;
flex-wrap:wrap;`;

