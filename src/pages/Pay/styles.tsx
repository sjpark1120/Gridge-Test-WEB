import styled from "styled-components";
import mockupImg from "../../assets/home-mockup.png";
import dummyProfileImg from "../../assets/dummyProfile.png";
import logoImg from "../../assets/logo2.png";

export const ProfileContanier = styled.div`
  margin-top: 30px;
  display: flex;
`;
export const ProfileImg = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 150px;
  background-image: url(${dummyProfileImg});
  background-size: cover;
  background-position: center;
  margin-left: 297px;
  margin-right: 121px;
`;
export const UserId = styled.span`
  font-size: 30px;
  font-weight: 500;
  color: #191919;
  margin-right: 10px;
`;
export const EditButton = styled.button`
  width: 66px;
  height: 22px;
  color: #191919;
  border: 0.5px solid #b2b2b2;
  border-radius: 3px;
  font-size: 12px;
  font-weight: 500;
`;
export const IdBox = styled.div`
  margin-bottom: 20px;
`;
export const InfoText = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: #191919;
  margin-right: 3px;
`;
export const InfoNumber = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: #191919;
`;
export const InfoBox = styled.div`
  display: flex;
  gap: 29px;
  margin-bottom: 15px;
`;
export const RealName = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #191919;
`;
export const Hobby = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #7f7f7f;
`;
export const IntroduceText = styled.pre`
  font-size: 16px;
  font-weight: 400;
  color: #191919;
`;
export const MainImg = styled.div`
  width: 520px;
  height: 780px;
  background-size: cover;
  background-image: url(${mockupImg});
  margin-right: 54px;
`;
export const Paycontainer = styled.div`
  width: 450px;
  height: 780px;
  background-color: #ffffff;
`;
export const PayBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 83px;
  margin-bottom: 107px;
`;
export const WhiteBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 416px;

  background-color: white;
  border: 1px solid #cccccc;
  margin: auto;
`;
export const LogoImg = styled.div`
  width: 217px;
  height: 80px;
  background-size: cover;
  background-image: url(${logoImg});
  margin-top: 58px;
  margin-bottom: 10px;
`;
export const Explanation = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #7f7f7f;
  margin-bottom: 23px;
`;
export const SubText = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #2c2c2c;
  margin-bottom: 81px;
`;
export const SubButton = styled.div`
  width: 320px;
  height: 44px;
  border-radius: 30px;
  background-color: #2e90fa;
  cursor: pointer;
  text-align: center;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 10px;
  text-align: center;
  line-height: 24px;
  padding: 10px;
`;
export const UnSubButton = styled.div`
  width: 320px;
  height: 44px;
  border-radius: 30px;
  background-color: #f04438;
  cursor: pointer;
  text-align: center;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 10px;
  text-align: center;
  line-height: 24px;
  padding: 10px;
`;
export const Terms = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #101828;
  margin-bottom: 179px;
`;
export const StoreText = styled.div`
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 500;
  color: #7f7f7f;
`;
export const StoreContainer = styled.div`
  display: flex;
  gap: 10px;
`;
export const StoreBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 416px;
  margin: 71px auto 103px auto;
`;

export const ModalWrap = styled.div`
  position: fixed;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalBody = styled.div`
  position: fixed;
  top: 40%; //모달을 화면가운데 놓기위함.
  left: 50%;
  width: 448px;
  height: 223px;
  text-align: center;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15); //테두리 그림자
  transform: translateX(-50%); //모듈창열었을때 위치설정 가운데로
  display: flex;
  flex-direction: column;
`;
export const ModalTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #191919;
`;
export const ModalText = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #7f7f7f;
`;
export const ModalButton = styled.div`
  height: 61px;
  border-top: 1px #cccccc solid;
  font-size: 14px;
  font-weight: 500;
  color: #000000;
  line-height: 61px;
  cursor: pointer;
`;
export const ModalTextBox = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
`;
