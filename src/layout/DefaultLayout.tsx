import React, { useEffect } from "react";
import AppHeader from "../components/Header";
import AppContent from "../components/Content";
import AppFooter from "../components/Footer";
import styled from "styled-components";
import { supportDeviceSize } from "../components/styles";
import AuthApi from "../apis/Auth";
import { useRecoilState } from "recoil";
import { idState, jwtState } from "../recoil/login";
import { useNavigate } from "react-router";

const DefaultLayout = () => {
  const [, setJwt] = useRecoilState(jwtState);
  const [, setIdNumber] = useRecoilState(idState);
  const navigate = useNavigate();

  // 페이지 첫 로딩시 로직
  useEffect(() => {
    // 벨리데이션
    const token = localStorage.getItem("jwt");
    if (!token) {
      alert("로그인을 해주세요");
      navigate("/login");
    }
  }, []);

  const RefreshLogin = async () => {
    try {
      const token = localStorage.getItem("jwt");
      if (token) {
        const response = await AuthApi.reJwt(token);
        console.log("토큰 재발급 성공", response);
        setIdNumber(response.result.id);
        setJwt(response.result.jwt);
      }
    } catch {
      console.log("토큰 재발급 실패");
    }
  };

  useEffect(() => {
    RefreshLogin();
  }, []);

  return (
    <Root>
      <AppHeader />
      <AppContent />
      <AppFooter />
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 1080px;
  height: 100vh;
  background-color: green;

  @media all and (max-width: ${supportDeviceSize}px) {
    width: 100vw;
  }
`;

export default DefaultLayout;
