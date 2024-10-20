import { Header } from "../Common/Header";
import dummyImage12 from "./../../assets/images/dummy_12.png";

export const Question3 = () => {
  return (
    <div className={"wrap"}>
      <Header btn_back bell isBellActive={true} profile />
      <div className="question3">
        <div className="title">
          <span>서연</span>님의 Pick!
        </div>

        <div className="info_area">
          <ul>
            <li>
              <div className="picture">
                <img src={dummyImage12} alt="" />
              </div>
              <div className="info">
                <div className="title">에딩 컵앤 소서 선물 Gift</div>
                <div className="text">
                  빈티지하고 클래식한 무드와 트랜디한 컬러의 테이블웨어입니다.
                  선물하기 좋은 포장과 엽서도 함께 증정...
                </div>
                <button className="like">
                  <i></i>완전 좋아
                </button>
              </div>
            </li>
            <li>
              <div className="picture">
                <img src={dummyImage12} alt="" />
              </div>
              <div className="info">
                <div className="title">에딩 컵앤 소서 선물 Gift</div>
                <div className="text">
                  빈티지하고 클래식한 무드와 트랜디한 컬러의 테이블웨어입니다.
                  선물하기 좋은 포장과 엽서도 함께 증정...
                </div>
                <button className="need">
                  <i></i>필요했어
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="btn_area_fixed pl-4 pr-4">
        <button className="btn_border">다시 하기</button>
        <button className="btn_pink2">정보 수정 완료</button>
      </div>
    </div>
  );
};
