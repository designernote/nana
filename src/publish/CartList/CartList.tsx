// import "../App.css";
import { Header } from "../Common/Header";
import dummyImage from "./../../assets/images/dummy.svg";
import dummyImage2 from "./../../assets/images/dummy_2.png";

export const CartList = () => {
  return (
    <div className={"wrap"}>
      <Header btn_back bell profile isBellActive={true} title="바구니 목록" />
      <div className="p-4 cardList">
        <ul className="rounding">
          <li>
            <div className="cont">
              <div className="capsule">D-4</div>
              <div>
                <p className="text-sm font-bold">바구니 이름</p>
                <div className="mt-2 mr-4 text-xs persons">
                  참여자
                  <div className="thums">
                    <ul>
                      <li>
                        <img src={dummyImage} />
                      </li>
                      <li>
                        <img src={dummyImage} />
                      </li>
                      <li>
                        <img src={dummyImage} />
                      </li>
                      <li>+5</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <img src={dummyImage2} />
          </li>
        </ul>
      </div>

      <div className="btn_area_fixed">
        <button className="btn_pink">
          <i className="basket"></i>선물 바구니 만들기
        </button>
      </div>
    </div>
  );
};
