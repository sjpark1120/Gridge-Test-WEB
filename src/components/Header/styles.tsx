import styled from "styled-components";
import logoImg from "../../assets/logo2.png";
import searchIcon from "../../assets/search.png";
import dummyProfileImg from "../../assets/dummyProfile.png";

export const Header = styled.div`
  position: fixed;
  top: 0;
  max-width: 1440px;
  width: 100%;
  z-index: 999;

  background-color: #ffffff;
  border-bottom: #cccccc 1px solid;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 184px;
  padding-right: 184px;
  @media screen and (max-width: 1000px) {
    padding: 0 30px;
  }
`;
export const LogoImg = styled.div`
  width: 140px;
  height: 50px;
  background-size: cover;
  background-image: url(${logoImg});
  cursor: pointer;
`;
export const SearchBox = styled.input`
  width: 312px;
  height: 44px;
  padding: 10px 14px;
  border: 1px solid #b2b2b2;
  background: url(${searchIcon}) no-repeat left 14px center;
  background-size: 20px;
  border-radius: 8px;
  margin-right: 101px;
  padding-left: 40px;
  @media screen and (max-width: 1000px) {
    margin-right: 0;
  }
`;
export const HeaderButton = styled.div<{ icon?: string }>`
  width: 24px;
  height: 24px;
  background: url(${(props) => props.icon});
  background-size: cover;
  cursor: pointer;
`;
export const ProfileImg = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 35px;
  background-image: url(${dummyProfileImg});
  background-size: cover;
  border: 0.5px solid #ffffff;
  cursor: pointer;
`;
export const NavContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  @media screen and (max-width: 1000px) {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 61px;
    background-color: white;
    justify-content: space-between;
    padding: 0 56px;
  }
`;
export const FlexBox = styled.div`
  display: flex;
`;
export const MenuContainer = styled.div<{ isVisible?: boolean }>`
  display: ${(props) => (props.isVisible ? "none" : "flex")};
  width: 280px;
  height: 312px;
  border-radius: 8px;
  border: 1px solid #eaecf0;
  box-shadow: 0px 4px 6px -2px #10182808;
  box-shadow: 0px 12px 16px -4px #10182814;
  background-color: #ffffff;
  position: absolute;
  top: 44px;
  right: -9px;

  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
`;
export const MenuButtonContainer = styled.div`
  padding: 12px;
  display: flex;
  height: 47px;
  width: 240px;
  align-items: center;
  justify-content: flex-start;
  border-radius: 8px;
  cursor: pointer;
  :hover {
    background-color: #f8f8f8;
  }
`;
export const MenuButton = styled.div`
  font-size: 14px;
  font-weight: 400px;
  color: #667085;
`;
export const MenuIcon = styled.div<{ icon?: string }>`
  width: 24px;
  height: 24px;
  background-image: url(${(props) => props.icon});
  background-size: cover;
  margin-right: 16px;
`;
