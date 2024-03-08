import React from "react";
import AppHeader from "../components/Header";
import AppContent from "../components/Content";
import AppFooter from "../components/Footer";
import styled from "styled-components";
import { supportDeviceSize } from "../components/styles";

const DefaultLayout = () => {
  /*const navigate = useNavigate()

  // 페이지 첫 로딩시 로직
  useEffect(() => {
    // 벨리데이션
    if (!user.name) {
      alert('로그인을 해주세요')
      navigate('/login')
    }
  }, [])*/

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
