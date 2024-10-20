import { Header } from "../Common/Header";

export const FriendList = () => {
  return (
    <div className={"wrap"}>
      <Header btn_back bell isBellActive={true} profile title="친구 목록" />
      <div className="friendList">
        <ul>
          <li>
            <div className="picture"></div>
            <div className="info">
              <div className="name">친구 닉네임</div>
              <div className="birth">
                <i></i>
                <span>생일</span>
                <span>2008.08.08</span>
              </div>
            </div>
            <div className="icons">
              <button className="btn_timer active"></button>
              <button className="btn_more"></button>
              <div className="overlay">
                <button className="profile">
                  <i></i>프로필보기
                </button>
                <button className="trash">
                  <i></i>친구 삭제
                </button>
              </div>
            </div>
          </li>
          <li>
            <div className="picture"></div>
            <div className="info">
              <div className="name">친구 닉네임</div>
              <div className="birth">
                <i></i>
                <span>생일</span>
                <span>2008.08.08</span>
              </div>
            </div>
            <div className="icons">
              <button className="btn_timer"></button>
              <button className="btn_more"></button>
            </div>
          </li>
          <li>
            <div className="picture"></div>
            <div className="info">
              <div className="name">친구 닉네임</div>
              <div className="birth">
                <i></i>
                <span>생일</span>
                <span>2008.08.08</span>
              </div>
            </div>
            <div className="icons">
              <button className="btn_timer active"></button>
              <button className="btn_more"></button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
