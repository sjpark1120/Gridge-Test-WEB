import React, { useEffect, useState } from "react";
import googlestoreImg from "../../assets/Mobile app store badge.png";
import applestoreImg from "../../assets/Mobile app store badge apple.png";
import {
  EditButton,
  Explanation,
  Hobby,
  IdBox,
  InfoBox,
  InfoNumber,
  InfoText,
  IntroduceText,
  LogoImg,
  MainImg,
  ModalBody,
  ModalButton,
  ModalText,
  ModalTextBox,
  ModalTitle,
  ModalWrap,
  PayBox,
  Paycontainer,
  ProfileContanier,
  ProfileImg,
  RealName,
  StoreBox,
  StoreContainer,
  StoreText,
  SubButton,
  SubText,
  Terms,
  UnSubButton,
  UserId,
  WhiteBox,
} from "./styles";
import { RequestPayParams, RequestPayResponse } from "./portone";
import { useRecoilState } from "recoil";
import { subscribeState } from "../../recoil/login";
import UserApi from "../../apis/User";
//import axios from "axios";
const Pay = () => {
  const [isSubscribe, setIsSubscribe] = useRecoilState(subscribeState);
  const [isFailModalVisible, setIsFailModalVisible] = useState(false);
  const [isCancleModalVisible, setIsCancleModalVisible] = useState(false);

  const [userId, SetUserId] = useState("");
  const [realName, setRealName] = useState("");
  const [feedCount, SetFeedCount] = useState(0);
  const [followerCount, SetFollowerCount] = useState(0);
  const [followingCount, SetFollowingCount] = useState(0);

  const onClickPayment = () => {
    //가맹점 식별
    if (!window.IMP) return;
    const { IMP } = window;
    IMP.init("imp70553052");

    //결제데이터 정의
    const data: RequestPayParams = {
      pg: "kakaopay.TC0ONETIME",
      pay_method: "card", // 결제수단
      merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
      amount: 9900, // 결제금액
      name: "1개월 구독", // 주문명
      buyer_name: "홍길동", // 구매자 이름
      buyer_email: "example@example.com", // 구매자 이메일
    };

    //결제 창 호출
    IMP.request_pay(data, callback);
  };

  const callback = (response: RequestPayResponse) => {
    const { success, error_msg } = response;
    if (success) {
      //결제성공
      // axios({
      //   url: "https://api-sns.gridge-test.com/payment",
      //   method: "post",
      //   headers: { "Content-Type": "application/json" },
      //   data: {
      //     imp_uid: response.imp_uid,
      //     merchant_uid: response.merchant_uid,
      //   },
      // }).then((data) => {
      //   // 서버 결제 API 성공시 로직
      //   console.log("결제성공", data);
      // });
      console.log("결제성공");
      setIsSubscribe(true);
    } else {
      //결제실패
      console.log("결제실패", error_msg);
      setIsFailModalVisible(true);
    }
  };

  const onClickCancle = () => {
    setIsCancleModalVisible(false);
    setIsSubscribe(false);
    console.log("구독취소");
  };

  const handleGetProfile = async () => {
    try {
      const loginId = localStorage.getItem("userId");
      if (!loginId) return;
      const response = await UserApi.getProfile(loginId);
      console.log(response);
      setRealName(response.result.realName);
      SetUserId(response.result.loginId);
      SetFeedCount(response.result.feedCount);
      SetFollowerCount(response.result.followerCount);
      SetFollowingCount(response.result.followingCount);
    } catch {}
  };

  useEffect(() => {
    handleGetProfile();
  }, []);
  return (
    <>
      {isCancleModalVisible ? (
        <ModalWrap>
          <ModalBody>
            <ModalTextBox>
              <ModalTitle>앗! 정말 구독을 취소하실 건가요?</ModalTitle>
              <ModalText>확인 버튼을 누르면, 구독이 종료됩니다.</ModalText>
            </ModalTextBox>
            <ModalButton
              onClick={onClickCancle}
              style={{ color: "#F04438", height: "50px", lineHeight: "50px" }}
            >
              확인
            </ModalButton>
            <ModalButton
              onClick={() => setIsCancleModalVisible(false)}
              style={{ height: "50px", lineHeight: "50px" }}
            >
              취소
            </ModalButton>
          </ModalBody>
        </ModalWrap>
      ) : null}
      {isFailModalVisible ? (
        <ModalWrap>
          <ModalBody>
            <ModalTextBox>
              <ModalTitle>결제 처리가 진행되지 않았습니다.</ModalTitle>
              <ModalText>결제를 다시 시도해주세요.</ModalText>
            </ModalTextBox>
            <ModalButton onClick={() => setIsFailModalVisible(false)}>
              확인
            </ModalButton>
          </ModalBody>
        </ModalWrap>
      ) : null}
      <ProfileContanier>
        <ProfileImg />
        <div>
          <div>
            <IdBox>
              <UserId>{userId}</UserId>
              <EditButton>프로필편집</EditButton>
            </IdBox>
            <InfoBox>
              <div>
                <InfoText>게시물</InfoText>
                <InfoNumber>{feedCount}</InfoNumber>
              </div>
              <div>
                <InfoText>팔로워</InfoText>
                <InfoNumber>{followerCount}</InfoNumber>
              </div>
              <div>
                <InfoText>팔로잉</InfoText>
                <InfoNumber>{followingCount}</InfoNumber>
              </div>
            </InfoBox>
          </div>
          <RealName>{realName}</RealName>
          <Hobby>여행</Hobby>
          <IntroduceText>
            여행 다니는거 좋아해요 세계를 돌아다닙니다
          </IntroduceText>
        </div>
      </ProfileContanier>
      <PayBox>
        <MainImg />
        <Paycontainer>
          <WhiteBox>
            <LogoImg />
            <Explanation>
              {isSubscribe
                ? "서비스를 구독해주셔서 감사합니다."
                : "서비스를 구독하고, 더 다양한 소식을 받아보세요"}
            </Explanation>
            <SubText>
              {isSubscribe ? "서비스 구독 중" : "월 9,900원으로 구독하기"}
            </SubText>
            {isSubscribe ? (
              <UnSubButton onClick={() => setIsCancleModalVisible(true)}>
                구독 해지하기
              </UnSubButton>
            ) : (
              <SubButton onClick={onClickPayment}>바로 구독 신청하기</SubButton>
            )}
            <Terms>이용약관 확인하기</Terms>
          </WhiteBox>
          <StoreBox>
            <StoreText>앱을 다운로드 하세요</StoreText>
            <StoreContainer>
              <img src={applestoreImg} width="120px" />
              <img src={googlestoreImg} width="135px" />
            </StoreContainer>
          </StoreBox>
        </Paycontainer>
      </PayBox>
    </>
  );
};

export default Pay;
