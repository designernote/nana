import { Header } from "../Common/Header";
import dummyImage11 from "./../../assets/images/dummy_11.png";

export const Question2 = () => {
  return (
    <div className={"wrap"}>
      <Header btn_back bell isBellActive={true} profile />
      <div className="question2">
        <div className="big_title">
          친구들이 준비한 선물 리스트 중<br />
          <span>
            <span>서연</span>님 마음에 드는 선물을 선택해주세요
          </span>
        </div>

        <div className="select_area">
          <div className="photo">
            <img src={dummyImage11} alt="" />
            <div className="desc">
              <div className="title">후지호로 애니멀 법랑 주전자</div>
              <div className="text">
                인덕션, 가스레인지 사용가능한 귀여운 애니멀 디자인의 휘슬 주전자
              </div>
            </div>
          </div>

          <div className="emoji_area">
            <div className="area_one">
              <button className="like active">
                <i></i>
                <p>완전 좋아</p>
              </button>
              <button className="like2">
                <i></i>
                <p>취향저격</p>
              </button>
              <button className="need">
                <i></i>
                <p>필요했어</p>
              </button>
            </div>
            <div className="area_two">
              <button className="soso">
                <i></i>
                <p>그저 그래</p>
              </button>
              <button className="bad">
                <i></i>
                <p>완전 별로</p>
              </button>
              <button className="had">
                <i></i>
                <p>이미 있어</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
