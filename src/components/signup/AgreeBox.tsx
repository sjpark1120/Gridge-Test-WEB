import React, { useEffect, useState } from "react";
import styled from "styled-components";
import checkIcon from "../../assets/checkbox.png";
import nocheckIcon from "../../assets/nocheckbox.png";
import { useNavigate } from "react-router-dom";
type Props = {
  onPrev: () => void;
};
export const LoginBox1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 416px;

  background-color: white;
  border: 1px solid #cccccc;
  margin-bottom: 10px;
`;
const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #191919;
  margin-top: 60px;
  margin-bottom: 15px;
`;
const TextIntro = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: #7f7f7f;
  margin-bottom: 19px;
  width: 297px;
  text-align: center;
`;
const BackButton = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #2e90fa;
  margin-bottom: 40px;
  cursor: pointer;
`;
const CheckAllBoxContainer = styled.div`
  width: 356px;
  height: 50px;
  border-bottom: 1px solid #cccccc;
  padding: 16px 0px 16px 0px;
  font-size: 16px;
  font-weight: 500;
  color: #101828;
  display: flex;
  justify-content: space-between;
`;
const CheckBoxContainer = styled.div`
  width: 356px;
  height: 50px;
  font-size: 16px;
  font-weight: 500;
  color: #101828;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const AgreeContainer = styled.div`
  display: flex;
  gap: 6px;
  flex-direction: column;
  margin-bottom: 34px;
`;
const CheckBox = styled.input`
  width: 20px;
  height: 20px;
  border-radius: 6px;

  appearance: none;
  background: url(${(props) => (props.checked ? checkIcon : nocheckIcon)})
    no-repeat center;
  background-size: contain;
  cursor: pointer;

  &:checked {
    background: url(${checkIcon}) no-repeat center;
    background-size: contain;
  }
`;
const SignupButton = styled.div<{ disabled: boolean }>`
  width: 320px;
  height: 44px;
  border-radius: 30px;
  background-color: ${(props) => (props.disabled ? "#b2ddff" : "#2E90FA")};
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  text-align: center;
  color: #ffffff;
  font-size: 16px;
  line-height: 44px;
  font-weight: 600;
  margin-bottom: 10px;
`;
const MoreText = styled.div`
  color: #2e90fa;
`;
const AgreeBox: React.FC<Props> = ({ onPrev }) => {
  const navigate = useNavigate();
  const [is1Checked, setIs1Checked] = useState(false);
  const [is2Checked, setIs2Checked] = useState(false);
  const [is3Checked, setIs3Checked] = useState(false);
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [isSignupValid, setIsSignupValid] = useState(false);

  useEffect(() => {
    if (is1Checked && is2Checked && is3Checked) {
      setIsSignupValid(true);
    } else {
      setIsSignupValid(false);
    }
  }, [is1Checked, is2Checked, is3Checked]);

  const handleCheck1 = () => {
    setIs1Checked(!is1Checked);
  };
  const handleCheck2 = () => {
    setIs2Checked(!is2Checked);
  };
  const handleCheck3 = () => {
    setIs3Checked(!is3Checked);
  };
  const handleCheckAll = () => {
    if (isAllChecked) {
      setIsAllChecked(false);
      setIs1Checked(false);
      setIs2Checked(false);
      setIs3Checked(false);
    } else {
      setIsAllChecked(true);
      setIs1Checked(true);
      setIs2Checked(true);
      setIs3Checked(true);
    }
  };
  const handleSignup = () => {
    if (isSignupValid) {
      //가입 api연결
      navigate("/login");
    }
  };
  return (
    <LoginBox1>
      <Title>이용 약관에 동의</Title>
      <TextIntro>
        Tnovel은 회원님의 개인정보를 안전하게 보호합니다. 새 계정을 만드려면
        모든 약관에 동의하세요.
      </TextIntro>
      <AgreeContainer>
        <CheckAllBoxContainer>
          이용약관 3개에 모두 동의
          <CheckBox
            type="checkbox"
            checked={isAllChecked}
            onChange={handleCheckAll}
          />
        </CheckAllBoxContainer>
        <CheckBoxContainer>
          <div>
            <div>이용약관 (필수)</div>
            <MoreText>더 알아보기</MoreText>
          </div>
          <CheckBox
            type="checkbox"
            checked={is1Checked}
            onChange={handleCheck1}
          />
        </CheckBoxContainer>
        <CheckBoxContainer>
          <div>
            <div>데이터 정책 (필수)</div>
            <MoreText>더 알아보기</MoreText>
          </div>
          <CheckBox
            type="checkbox"
            checked={is2Checked}
            onChange={handleCheck2}
          />
        </CheckBoxContainer>
        <CheckBoxContainer>
          <div>
            <div>위치 기반 기능 (필수)</div>
            <MoreText>더 알아보기</MoreText>
          </div>
          <CheckBox
            type="checkbox"
            checked={is3Checked}
            onChange={handleCheck3}
          />
        </CheckBoxContainer>
      </AgreeContainer>
      <SignupButton onClick={handleSignup} disabled={!isSignupValid}>
        가입
      </SignupButton>
      <BackButton onClick={() => onPrev()}>돌아가기</BackButton>
    </LoginBox1>
  );
};

export default AgreeBox;
