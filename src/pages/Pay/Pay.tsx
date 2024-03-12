import React from "react";
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
  UserId,
  WhiteBox,
} from "./styles";

const Pay = () => {
  return (
    <>
      <ProfileContanier>
        <ProfileImg />
        <div>
          <div>
            <IdBox>
              <UserId>happypuppy</UserId>
              <EditButton>프로필편집</EditButton>
            </IdBox>
            <InfoBox>
              <div>
                <InfoText>게시물</InfoText>
                <InfoNumber>83</InfoNumber>
              </div>
              <div>
                <InfoText>팔로워</InfoText>
                <InfoNumber>1560</InfoNumber>
              </div>
              <div>
                <InfoText>팔로잉</InfoText>
                <InfoNumber>23</InfoNumber>
              </div>
            </InfoBox>
          </div>
          <RealName>블루</RealName>
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
              서비스를 구독하고, 더 다양한 소식을 받아보세요
            </Explanation>
            <SubText>월 9,900원으로 구독하기</SubText>
            <SubButton>바로 구독 신청하기</SubButton>
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
