import styled from "styled-components";
import { supportDeviceSize } from "../../components/styles";
import mockupImg from "../../assets/home-mockup.png";
import logoImg from "../../assets/logo2.png";
export const LoginRoot = styled.div`
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
export const LoginBox1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 416px;

  background-color: white;
  border: 1px solid #cccccc;
  margin-bottom: 10px;
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
export const LogoImg = styled.div`
  width: 217px;
  height: 80px;
  background-size: cover;
  background-image: url(${logoImg});
  margin-top: 70px;
  margin-bottom: 57px;
`;
export const LoginInput = styled.input<{ icon?: string }>`
  width: 320px;
  height: 50px;
  border-radius: 30px;
  border: 1px solid #b2b2b2;
  padding: 10px 14px 10px 48px;
  background: url(${(props) => props.icon}) no-repeat left 20px center;
  background-size: 20px;
  margin-bottom: 10px;
`;
export const LoginButton = styled.div<{ disabled: boolean }>`
  width: 320px;
  height: 44px;
  border-radius: 30px;
  background-color: ${(props) => (props.disabled ? "#b2ddff" : "#2E90FA")};
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  text-align: center;
  margin-top: 10px;
  color: #ffffff;
  font-size: 16px;
  line-height: 44px;
  font-weight: 600;
`;
export const KaKaoButton = styled.div`
  display: flex;
  width: 320px;
  height: 44px;
  border-radius: 30px;
  background-color: #f8d706;
  margin-bottom: 30px;
  color: #2f1b1a;
  font-size: 16px;
  line-height: 44px;
  font-weight: 600;
  align-items: center;
  justify-content: center;
`;
export const Or = styled.div`
  width: 14px;
  height: 24px;
  font-weight: 400;
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
export const StoreContainer = styled.div`
  display: flex;
  gap: 10px;
`;
export const Text1 = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #7f7f7f;
  margin-bottom: 40px;
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
export const Signup = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #2e90fa;
  cursor: pointer;
`;
export const ErrorMessage = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #f04438;
  margin-bottom: 10px;
`;
export const PasswordToggle = styled.div`
  font-size: 16px;
  font-weight: 600;
  right: 20px;
  top: 13px;
  position: absolute;
`;
export const PasswordBox = styled.div`
  position: relative;
`;
