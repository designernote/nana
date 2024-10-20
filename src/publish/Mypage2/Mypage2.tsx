import { Header } from "../Common/Header";

export const Mypage2 = () => {
  return (
    <div className={"wrap"}>
      <Header btn_back bell profile isBellActive={true} title="내 정보 수정" />
      <div className="mypage2">
        <div className="picture">
          <button className="btn_modify">수정</button>
        </div>

        <div className="input_area">
          <small>닉네임</small>
          <input type="text" placeholder="닉네임을 입력해주세요." />
          <small>전화번호</small>
          <input type="number" placeholder="010-000-0000" />
        </div>
      </div>
      <div className="btn_area_fixed pl-4 pr-4">
        <button className="btn_pink2">정보 수정 완료</button>
      </div>
    </div>
  );
};
