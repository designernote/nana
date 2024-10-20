import { Header } from "../Common/Header";
import dummyImage10 from "./../../assets/images/dummy_10.png";

export const FriendInfo = () => {
  return (
    <div className={"wrap"}>
      <Header btn_back bell isBellActive={true} profile title="친구 정보" />
      <div className="friendInfo">
        <ul>
          <li>
            <div className="profile">
              <div className="picture">
                <img src={dummyImage10} alt="" />
              </div>
              <div className="info">
                <div className="name">유지은</div>
                <div className="birth">
                  <i></i>
                  <span>생일</span>
                  <span>2008.08.08</span>
                </div>
                <div className="birth">
                  <i></i>
                  <span>친구 설정 기념일</span>
                  <span>2008.08.08</span>
                </div>
              </div>
            </div>
            <div className="btns">
              <button className="btn_friend_add">
                <i></i>친구 추가
              </button>
              <button className="btn_friend_del">
                <i></i>친구 삭제
              </button>
              <button className="btn_friend_with">
                <i></i>친구의 친구
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
