import React, { useState } from "react";
import BasicBox from "../../components/signup/BasicBox";
import BirthdayBox from "../../components/signup/BirthdayBox";
import AgreeBox from "../../components/signup/AgreeBox";
import { Link } from "react-router-dom";
import googlestoreImg from "../../assets/Mobile app store badge.png";
import applestoreImg from "../../assets/Mobile app store badge apple.png";
import {
  GoLogin,
  LoginBox2,
  LoginBox3,
  MainImg,
  SignupRoot,
  StoreContainer,
  Text2,
  Text3,
} from "./styles";

const Signup = () => {
  const [step, setStep] = useState(1);

  // 다음 버튼 클릭 시 다음 스텝으로 이동하는 함수
  const handleNextStep = () => {
    setStep(step + 1);
  };

  // 이전 버튼 클릭 시 이전 스텝으로 이동하는 함수
  const handlePrevStep = () => {
    setStep(step - 1);
  };

  return (
    <SignupRoot>
      <MainImg />
      <div>
        <div style={{ display: step == 1 ? "block" : "none" }}>
          <BasicBox onNext={handleNextStep} />
        </div>
        <div style={{ display: step == 2 ? "block" : "none" }}>
          <BirthdayBox onNext={handleNextStep} onPrev={handlePrevStep} />
        </div>
        <div style={{ display: step == 3 ? "block" : "none" }}>
          <AgreeBox onPrev={handlePrevStep} />
        </div>
        <LoginBox2>
          <Text2>계정이 있으신가요?</Text2>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <GoLogin>로그인</GoLogin>
          </Link>
        </LoginBox2>
        <LoginBox3>
          <Text3>앱을 다운로드 하세요</Text3>
          <StoreContainer>
            <img src={applestoreImg} width="120px" />
            <img src={googlestoreImg} width="135px" />
          </StoreContainer>
        </LoginBox3>
      </div>
    </SignupRoot>
  );
};

export default Signup;
