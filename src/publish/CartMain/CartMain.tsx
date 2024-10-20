import React from "react";
import { SwipeableDrawer, Box, Typography } from "@mui/material";
import { Global } from "@emotion/react";

import { Header } from "../Common/Header";
import likeit from "./../../assets/images/icon_likeit.svg";
import giftBox2 from "./../../assets/images/giftBox2.svg";
import dummyImage2 from "./../../assets/images/dummy_2.png";

const drawerBleeding = 48;

export const CartMain = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  return (
    <div className={"wrap"}>
      <Header
        btn_back
        setting
        bell
        profile
        isBellActive={true}
        title="바구니 이름"
      />
      <div className="p-4 cardList">
        <div className="Dday_wrap">
          <div className="graph">
            <div className="count">D-1</div>
            <p>마감일이 얼마 남지 않았어요 빨리 골라주세요ㄴㅇㄹㄴㅇㄹ</p>
            <div className="bar_wrap">
              <div className="bar">
                <div className="color" style={{ width: "20%" }}></div>
              </div>
              <div className="giftBox"></div>
            </div>
          </div>
          <div className="image"></div>
        </div>

        <div className="mt-5 rounding_border">
          <div className="giftBox_title">
            <div className="title">
              <p>바구니에 담긴 선물</p>
              <p>9</p>
            </div>
            <div className="icons">
              <button className="btn_zoomer"></button>
              <button className="btn_filter"></button>
            </div>
          </div>
          <div className="mt-3 gift_list">
            <ul>
              <li>
                <div className="box sold">
                  <div className="image">
                    <div className="photo">
                      <img src={dummyImage2} alt="제품 이미지" />
                      <div className="heart">
                        <i></i>1,200
                      </div>
                      <div className="desc">
                        <i>
                          <img src={likeit} alt="좋아요 아이콘" />
                        </i>
                        너무 맘에 들어
                      </div>
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
                      <div className="desc">
                        <i>
                          <img src={likeit} alt="좋아요 아이콘" />
                        </i>
                        너무 맘에 들어
                      </div>
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

      <>
        <Global
          styles={{
            ".MuiPaper-root.MuiPaper-root": {
              height: `calc(50% - ${drawerBleeding}px - 48px)`,
              overflow: "visible",
            },
          }}
        />
        <SwipeableDrawer
          anchor="bottom"
          open={open}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
          swipeAreaWidth={drawerBleeding}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: -drawerBleeding,
              borderTopLeftRadius: 24,
              borderTopRightRadius: 24,
              visibility: "visible",
              right: 0,
              left: 0,
              background: "linear-gradient(90deg, #ff4341, #ff4bc1)",
            }}
          >
            {/* <Box
              sx={{
                width: 30,
                height: 6,
                bgcolor: "grey.300",
                borderRadius: "3px",
                position: "absolute",
              }}
            /> */}
            <Typography
              sx={{
                p: 1,
                color: "white",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <i>
                <img src={giftBox2} alt="좋아요 아이콘" />
              </i>
              선물 추가하기
            </Typography>
          </Box>

          <div className="bottom_sheet">
            <button className="btn_border pink">
              <i className="gift"></i>선물 요정에게 추천 받아 추가하기
            </button>
            <button className="btn_border">
              <i className="zoomer"></i>상품 검색을 통해 선물 추가하기
            </button>
            <button className="btn_border">
              <i className="link"></i>외부 링크 가져오기
            </button>
          </div>
        </SwipeableDrawer>
      </>
    </div>
  );
};
