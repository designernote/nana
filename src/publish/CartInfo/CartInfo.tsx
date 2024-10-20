import { useState } from "react";
import { Header } from "../Common/Header";
import dummy4 from "./../../assets/images/dummy_4.png";
import profile from "./../../assets/images/dummy_3.svg";
import giftBox from "./../../assets/images/giftBox.svg";
import friend from "./../../assets/images/icon_friend.svg";

export const CartInfo = () => {
  const [isOpen, setIsOpen] = useState(true);

  // const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const [isOpen2, setIsOpen2] = useState(true);

  // const openModal = () => setIsOpen(true);
  const closeModal2 = () => setIsOpen2(false);

  return (
    <div className={"wrap"}>
      <Header btn_back bell profile isBellActive={true} />
      <div className="cardInfo">
        <div className="list_rounding">
          <div className="writing">
            <div>
              <img src={profile} alt="" />
            </div>
            <div>
              <div className="dDay">D-2</div>
              <div className="title">월급루팡공주님 선물고르기</div>
            </div>
            <div>
              <button className="btn_pencil"></button>
            </div>
          </div>
          <button className="btn_shadow">
            <i>
              <img src={giftBox} alt="" />
            </i>
            선물 바구니 보러가기
          </button>
        </div>
        <div className="list_rounding">
          <div className="friend_list">
            <div>
              <p className="title">참여중인 친구목록</p>
              <button className="btn_txt">모두 친구추가</button>
            </div>
            <div>
              <ul>
                <li>
                  <button>
                    <div>
                      <img src={dummy4} alt="" />
                    </div>
                    <p>이세영</p>
                    <div className="overlay">
                      <button className="profile">
                        <i></i>프로필보기
                      </button>
                      <button className="profile2">
                        <i></i>친구 요청
                      </button>
                    </div>
                  </button>
                </li>
                <li>
                  <button>
                    <div>
                      <img src={dummy4} alt="" />
                    </div>
                    <p>이세영</p>
                  </button>
                </li>
                <li>
                  <button>
                    <div>
                      <img src={dummy4} alt="" />
                    </div>
                    <p>이세영</p>
                  </button>
                </li>
                <li>
                  <button>
                    <div>
                      <img src={dummy4} alt="" />
                    </div>
                    <p>이세영</p>
                  </button>
                </li>
                <li>
                  <button>
                    <div>
                      <img src={dummy4} alt="" />
                    </div>
                    <p>이세영</p>
                  </button>
                </li>
                <li>
                  <button>
                    <div>
                      <img src={dummy4} alt="" />
                    </div>
                    <p>이세영</p>
                  </button>
                </li>
                <li>
                  <button>
                    <div>
                      <img src={dummy4} alt="" />
                    </div>
                    <p>이세영</p>
                  </button>
                </li>
                <li>
                  <button>
                    <div>
                      <img src={dummy4} alt="" />
                    </div>
                    <p>이세영</p>
                  </button>
                </li>
                <li>
                  <button>
                    <div>
                      <img src={dummy4} alt="" />
                    </div>
                    <p>이세영</p>
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <button className="btn_shadow">
                <i>
                  <img src={friend} alt="" />
                </i>
                새로운 친구 초대하기
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="modal_new cartEdit">
          <div className="dim"></div>

          <div className="inner">
            <div className="handler">
              <button className="close" onClick={closeModal}></button>
            </div>
            <div className="input_area">
              <small>바구니 이름</small>
              <input type="text" placeholder="바구니 이름을 입력하세요" />
              <small>기념일 수정</small>
              <input type="text" placeholder="yyyy/mm/dd" />
            </div>
            <div className="edit_area">
              바구니 이미지 수정<button className="btn_edit">edit</button>
            </div>
            <div className="public">
              다른 사람에게 바구니 공개하기
              <div className="toggle_area">
                <input type="checkbox" id="toggle" hidden />

                <label htmlFor="toggle" className="toggleSwitch">
                  <span className="toggleButton"></span>
                </label>
              </div>
            </div>
            <button className="btn_public">바구니 정보 수정 완료</button>
          </div>
        </div>
      )}
      {isOpen2 && (
        <div className="modal_new share">
          <div className="dim"></div>

          <div className="inner">
            <div className="handler">
              <button className="close" onClick={closeModal2}></button>
            </div>
            <div className="title">친한 친구를 바구니에 초대해보세요</div>
            <div className="btn_share_area">
              <button className="kakao">카카오톡</button>
              <button className="link">링크복사</button>
            </div>
            <button className="btn_text">친구목록에서 초대하기</button>
          </div>
        </div>
      )}
    </div>
  );
};
