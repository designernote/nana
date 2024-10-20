import { Header } from "../Common/Header";
import profile2 from "./../../assets/images/profile_button3.svg";

export const Mypage1 = () => {
  return (
    <div className={"wrap"}>
      <Header btn_back bell profile isBellActive={true} />
      <div className="mypage1">
        <div className="rounding_grey">
          <div className="nickname_area">
            <div className="picture">
              <img src={profile2} alt="" />
            </div>
            <div className="name">닉네임</div>
            <button className="btn_pencil2"></button>
          </div>
          <div className="wish_area">
            <div className="title">위시아이템</div>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
        <div className="rounding_grey">
          <div className="basket_area">
            <div className="title">현재 참여중인 바구니</div>
          </div>
          <div className="wish_area">
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>

        <div className="nav">
          <ul>
            <li>
              <button>
                친구 목록<em>999</em>
              </button>
            </li>
            <li>
              <button>받은 선물바구니</button>
            </li>
            <li>
              <button>추천 받았던 상품</button>
            </li>
            <li>
              <button>참여 바구니 목록</button>
            </li>
            <li>
              <button>타임어택</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
