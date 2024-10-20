import { Header } from "../Common/Header";
import dummyImage2 from "./../../assets/images/dummy_2.png";
import dummyImage7 from "./../../assets/images/dummy_7.png";

export const GiftRecommList = () => {
  return (
    <div className={"wrap"}>
      <Header btn_back bell profile isBellActive={true} title="바구니 이름" />
      <div className="p-4 giftRecommList">
        <div className="slide">
          <ul>
            <li>
              <button>
                <img src={dummyImage7} alt="" />
                <p className="name">집들이</p>
              </button>
            </li>
            <li>
              <button>
                <img src={dummyImage7} alt="" />
                <p className="name">집들이</p>
              </button>
            </li>
            <li>
              <button>
                <img src={dummyImage7} alt="" />
                <p className="name">집들이</p>
              </button>
            </li>
            <li>
              <button>
                <img src={dummyImage7} alt="" />
                <p className="name">집들이</p>
              </button>
            </li>
            <li>
              <button>
                <img src={dummyImage7} alt="" />
                <p className="name">집들이</p>
              </button>
            </li>
            <li>
              <button>
                <img src={dummyImage7} alt="" />
                <p className="name">집들이</p>
              </button>
            </li>
            <li>
              <button>
                <img src={dummyImage7} alt="" />
                <p className="name">집들이</p>
              </button>
            </li>
            <li>
              <button>
                <img src={dummyImage7} alt="" />
                <p className="name">집들이</p>
              </button>
            </li>
            <li>
              <button>
                <img src={dummyImage7} alt="" />
                <p className="name">집들이</p>
              </button>
            </li>
          </ul>
        </div>
        <div className="slide_btns_area">
          <div className="btns">
            <button className="active">받고싶어한</button>
            <button className="">많이 선물 한</button>
          </div>
          <button className="btn_right_more"></button>
          <div className="btn_func">
            <button className="filter"></button>
            <button className="search"></button>
          </div>
        </div>

        <div className="cart">
          <div className="title">장바구니</div>
          <div className="gift_list">
            <ul>
              <li>
                <div className="box">
                  <div className="image">
                    <div className="photo">
                      <img src={dummyImage2} alt="제품 이미지" />
                      {/* <div className="heart">
                        <i></i>1,200
                      </div> */}
                      {/* <div className="desc">
                        <i>
                          <img src={likeit} alt="좋아요 아이콘" />
                        </i>
                        너무 맘에 들어
                      </div> */}
                    </div>
                  </div>
                  <p className="title">제품이름</p>
                  <p className="price">₩ 50,000</p>
                  <div className="tags">
                    <span>#태그</span>
                    <span>#태그</span>
                    <span>#태그</span>
                    <span>#태그</span>
                    <span>#태그</span>
                    <span>#태그</span>
                  </div>
                </div>
                <div className="box">
                  <div className="image">
                    <div className="photo">
                      <img src={dummyImage2} alt="제품 이미지" />
                      {/* <div className="desc">
                        <i>
                          <img src={likeit} alt="좋아요 아이콘" />
                        </i>
                        너무 맘에 들어
                      </div> */}
                    </div>
                  </div>
                  <p className="title">제품이름</p>
                  <p className="price">₩ 50,000</p>
                  <div className="tags">
                    <span>#태그</span>
                    <span>#태그</span>
                    <span>#태그</span>
                    <span>#태그</span>
                    <span>#태그</span>
                    <span>#태그</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
