import { Header } from "../Common/Header";
import dummy5 from "./../../assets/images/dummy_5.png";
import dummy6 from "./../../assets/images/dummy_6.svg";
import heart2 from "./../../assets/images/icon_heart2.svg";

export const CartListDetail = () => {
  return (
    <div className={"wrap"}>
      <Header btn_back={false} />

      <div className="cardDetail">
        <div className="image_area">
          <img src={dummy5} alt="" />
          <div className="black_area">
            <i>
              <img src={heart2} alt="" />
            </i>
            유지은님 외 3명이 이 선물을 좋아하고 있어요!
          </div>
        </div>
        <div className="prd_info">
          <div className="brand">마르마르디</div>
          <div className="title">바디오일 & 우드 괄사 & 콘 인센스 3종</div>
          <div className="price">
            <span>₩</span> 30,000
          </div>
        </div>
        <div className="tag_area">
          <div className="title">Tag</div>
          <ul>
            <li>
              <button>화장품</button>
            </li>
            <li>
              <button className="active">의류</button>
            </li>
            <li>
              <button>화장품</button>
            </li>
            <li>
              <button>화장품</button>
            </li>
            <li>
              <button>화장품</button>
            </li>
            <li>
              <button>화장품</button>
            </li>
            <li>
              <button>화장품</button>
            </li>
            <li>
              <button>화장품</button>
            </li>
            <li>
              <button>화장품</button>
            </li>
          </ul>
        </div>

        <div className="talk_area">
          <div className="title">선물 토크</div>
          <div className="chat_area">
            <div className="talking you">
              <div className="thum">
                <img src={dummy6} />
              </div>
              <div className="info">
                <p className="name">이세영</p>
                <div className="ballon">이거 내가 찾아본건데 어때?</div>
              </div>
            </div>
            <div className="talking me">
              <div className="del">
                <button className="btn_del">토크삭제</button>
              </div>
              <div className="info">
                <div className="ballon">나도 이거 찬성!!</div>
              </div>
            </div>
          </div>
        </div>

        <div className="talk_input_fixed">
          <input
            type="text"
            placeholder="이 제품을 추천/비추천하는 이유를 작성해보세요!"
          />
          <button className="btn_send"></button>
        </div>
      </div>
    </div>
  );
};
