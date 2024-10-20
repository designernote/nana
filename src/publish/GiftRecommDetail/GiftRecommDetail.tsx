import { Header } from "../Common/Header";
import dummyImage8 from "./../../assets/images/dummy_8.png";
import dummyImage9 from "./../../assets/images/dummy_9.png";

export const GiftRecommDetail = () => {
  return (
    <div className={"wrap"}>
      <Header btn_back bell profile isBellActive={true} title="바구니 이름" />
      <div className="giftRecommDetail">
        <div className="prd_area">
          <div className="photo">
            <img src={dummyImage8} alt="" />
          </div>

          <div className="info">
            <div className="brand">브랜드</div>
            <div className="name">제품이름</div>
            <div className="price">₩ 50,000</div>
            <div className="options">
              <p className="title">옵션</p>
              <span>옵션내용</span>
              <span>옵션내용</span>
              <span>옵션내용</span>
              <span>옵션내용</span>
            </div>
            <div className="essense">제품요약</div>
            <div className="contents">
              제품 요약 내용 1줄 2줄까지제품 요약 내용 1줄 2줄까지제품 요약 내용
              1줄 2줄까지제품 요약 내용 1줄 2줄까지제품 요약 내용 1줄 2줄까지
            </div>
            <div className="tags">
              <span>#태그</span>
              <span>#태그</span>
              <span>#태그</span>
              <span>#태그</span>
              <span>#태그</span>
              <span>#태그</span>
            </div>
          </div>

          <div className="cart_prd">
            <ul>
              <li>
                <div className="photo">
                  <img src={dummyImage9} alt="" />
                  <div className="capsule_pink">D-2</div>
                </div>
                <div className="name">
                  바구니 이름바구니 이름바구니 이름바구니 이름바구니 이름
                </div>
                <div className="btn_add_cart_area">
                  <button className="btn_add_cart">
                    <i></i>바구니에 추가하기
                  </button>
                </div>
              </li>
              <li>
                <div className="photo">
                  <img src={dummyImage9} alt="" />
                  <div className="capsule_pink">D-2</div>
                </div>
                <div className="name">바구니 이름</div>
                <div className="btn_add_cart_area">
                  <button className="btn_add_cart">
                    <i></i>바구니에 추가하기
                  </button>
                </div>
              </li>
              <li>
                <div className="photo">
                  <img src={dummyImage9} alt="" />
                  <div className="capsule_pink">D-2</div>
                </div>
                <div className="name">바구니 이름</div>
                <div className="btn_add_cart_area">
                  <button className="btn_add_cart">
                    <i></i>바구니에 추가하기
                  </button>
                </div>
              </li>
            </ul>
          </div>

          <div className="desc">
            <div className="title">제품 설명</div>
            <div className="texts"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
