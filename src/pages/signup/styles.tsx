import styled from "styled-components";
import { supportDeviceSize } from "../../components/styles";
import mockupImg from "../../assets/home-mockup.png";
export const SignupRoot = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  width: 1080px;
  height: 100vh;
  /* background-color: green; */

  @media all and (max-width: ${supportDeviceSize}px) {
    width: 100vw;
  }
`;
export const MainImg = styled.div`
  width: 520px;
  height: 780px;
  background-size: cover;
  background-image: url(${mockupImg});
  margin-right: 72px;
`;
export const LoginBox2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 416px;
  height: 86px;
  background-color: white;
  border: 1px solid #cccccc;
  margin-bottom: 20px;
`;
export const LoginBox3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 416px;
`;
export const StoreContainer = styled.div`
  display: flex;
  gap: 10px;
`;
export const Text2 = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #7f7f7f;
`;
export const Text3 = styled.div`
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 500;
  color: #7f7f7f;
`;
export const GoLogin = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #2e90fa;
  cursor: pointer;
`;
