import React, { useState } from "react";
import {
  FlexBox,
  Header,
  HeaderButton,
  LogoImg,
  MenuButton,
  MenuButtonContainer,
  MenuContainer,
  MenuIcon,
  NavContainer,
  ProfileImg,
  SearchBox,
} from "./styles";
import heartIcon from "../../assets/heart.png";
import plusIcon from "../../assets/plus-square.png";
import sendIcon from "../../assets/send.png";
import homeIcon from "../../assets/home.png";
import alertIcon from "../../assets/alert-circle.png";
import settingIcon from "../../assets/settings.png";
import bookmarkIcon from "../../assets/bookmark.png";
import userIcon from "../../assets/user.png";
import { useNavigate } from "react-router";
import AxiosInstance from "../../apis/CustomAxios";

const AppHeader = () => {
  const navigate = useNavigate();
  const [visibleMenu, setVisibleMenu] = useState(true);
  const handleLogout = () => {
    delete AxiosInstance.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    localStorage.removeItem("userId");
    navigate("/login");
  };

  return (
    <Header>
      <LogoImg onClick={() => navigate("/")} />
      <FlexBox>
        <SearchBox />
        <NavContainer>
          <HeaderButton icon={homeIcon} onClick={() => navigate("/")} />
          <HeaderButton icon={sendIcon} />
          <HeaderButton icon={plusIcon} />
          <HeaderButton icon={heartIcon} onClick={() => navigate("/pay")} />
          <div style={{ position: "relative" }}>
            <ProfileImg onClick={() => setVisibleMenu(!visibleMenu)} />
            <MenuContainer isVisible={visibleMenu}>
              <MenuButtonContainer onClick={() => navigate("/pay")}>
                <MenuIcon icon={userIcon} />
                <MenuButton>프로필</MenuButton>
              </MenuButtonContainer>
              <MenuButtonContainer>
                <MenuIcon icon={bookmarkIcon} />
                <MenuButton>저장됨</MenuButton>
              </MenuButtonContainer>
              <MenuButtonContainer>
                <MenuIcon icon={settingIcon} />
                <MenuButton>설정</MenuButton>
              </MenuButtonContainer>
              <MenuButtonContainer>
                <MenuIcon icon={alertIcon} />
                <MenuButton>문제 신고</MenuButton>
              </MenuButtonContainer>
              <MenuButtonContainer onClick={handleLogout}>
                <MenuIcon icon={settingIcon} />
                <MenuButton>로그아웃</MenuButton>
              </MenuButtonContainer>
            </MenuContainer>
          </div>
        </NavContainer>
      </FlexBox>
    </Header>
  );
};

export default AppHeader;
