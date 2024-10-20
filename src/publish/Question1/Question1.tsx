import { Header } from "../Common/Header";

export const Question1 = () => {
  return (
    <div className={"wrap"}>
      <Header btn_back bell isBellActive={true} profile />
      <div className="question1">
        <div className="big_title">
          <span>서연</span>님을 위한 <br />
          선물바구니가 도착했어요!
        </div>
        <div className="visual_banner"></div>
      </div>
      <div className="bottom_btn">
        <p className="text">내 취향을 저격한선물은?</p>
        <button className="btn_pink2">선물 바구니 확인하러 가기</button>
      </div>
    </div>
  );
};
