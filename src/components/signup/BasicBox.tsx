import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logoImg from "../../assets/logo2.png";
import kakaoIcon from "../../assets/kakao.png";
import mailIcon from "../../assets/mail.png";
import lockIcon from "../../assets/lock.png";
import settingIcon from "../../assets/settingIcon.png";
import userIcon from "../../assets/userIcon.png";
import noIcon from "../../assets/noIcon.png";
import okIcon from "../../assets/okIcon.png";
import { isVaildId, isValidPhoneNumber } from "../../utils/utility";
import { useRecoilState } from "recoil";
import {
  loginIdState,
  passwordState,
  phoneState,
  realNameState,
  signupState,
} from "../../recoil/signup";
import UserApi from "../../apis/User";
type Props = {
  onNext: () => void;
};
const LoginBox1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 416px;

  background-color: white;
  border: 1px solid #cccccc;
  margin-bottom: 10px;
`;
const LogoImg = styled.div`
  width: 217px;
  height: 80px;
  background-size: cover;
  background-image: url(${logoImg});
  margin-top: 50px;
  margin-bottom: 10px;
`;
const IntroText = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 30px;
  color: #7f7f7f;
`;
const KaKaoButton = styled.div`
  display: flex;
  width: 320px;
  height: 44px;
  border-radius: 30px;
  background-color: #f8d706;
  color: #2f1b1a;
  font-size: 16px;
  line-height: 44px;
  font-weight: 600;
  align-items: center;
  justify-content: center;
`;
const Or = styled.div`
  width: 14px;
  height: 24px;
  font-weight: 400;
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const LoginInput = styled.input<{ icon?: string }>`
  width: 320px;
  height: 50px;
  border-radius: 30px;
  border: 1px solid #b2b2b2;
  padding: 10px 14px 10px 48px;
  background: url(${(props) => props.icon}) no-repeat left 20px center;
  background-size: 20px;
  margin-bottom: 10px;
`;
const PasswordToggle = styled.div`
  font-size: 16px;
  font-weight: 600;
`;
const PasswordBox = styled.div`
  position: relative;
`;
const SignupButton = styled.div<{ disabled: boolean }>`
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
const ErrorMessage = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #f04438;
  margin-bottom: 30px;
  margin-top: 15px;
  text-align: center;
  width: 290px;
`;
const CheckIcon = styled.div<{ ischeck: boolean }>`
  width: 24px;
  height: 24px;
  background-size: cover;
  background-image: url(${(props) => (props.ischeck ? okIcon : noIcon)});
  right: 20px;
  top: 13px;
  position: absolute;
`;
const PasswordToggleBox = styled.div`
  position: absolute;
  display: flex;
  gap: 5px;
  right: 20px;
  top: 13px;
`;
const BasicBox: React.FC<Props> = ({ onNext }) => {
  const [signupData] = useRecoilState(signupState);

  const [errorText, setErrorText] = useState("");

  // const [phoneNum, setPhoneNum] = useState("");
  // const [name, setName] = useState("");
  // const [nickname, setNickname] = useState("");
  // const [password, setPassword] = useState("");

  const [phoneNum, setPhoneNum] = useRecoilState(phoneState);
  const [name, setName] = useRecoilState(realNameState);
  const [nickname, setNickname] = useRecoilState(loginIdState);
  const [password, setPassword] = useRecoilState(passwordState);

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordToggleVisible, setIsPasswordToggleVisible] = useState(false);
  const [isSignupValid, setIsSignupValid] = useState(false);

  const [checkPhoneNum, setCheckPhoneNum] = useState(false);
  const [checkName, setCheckName] = useState(false);
  const [checkNickname, setCheckNickname] = useState(false);
  const [checkPassword, setCheckPassword] = useState(false);

  const togglePasswordVisible = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleSignup = async () => {
    if (!isSignupValid) {
      return; // 비활성화 상태일 때는 클릭 이벤트를 처리하지 않음
    }
    console.log("회원가입 데이터", signupData);
    onNext();
  };

  const handledupId = async (id: string) => {
    try {
      const response = await UserApi.duplicateId(id);
      //console.log(response);
      setCheckNickname(true);
      setErrorText("");
      if (response.result.isExist) {
        setCheckNickname(false);
        setErrorText(
          "사용할 수 없는 사용자 이름입니다. 다른 이름을 사용하세요"
        );
      }
    } catch (error: any) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        alert(error.response.data.message);
      }
    }
  };

  useEffect(() => {
    //가입 버튼 활성화 체크
    if (checkPhoneNum && checkName && checkNickname && checkPassword) {
      setIsSignupValid(true);
    } else {
      setIsSignupValid(false);
    }
  }, [checkPhoneNum, checkName, checkNickname, checkPassword]);

  useEffect(() => {
    //비밀번호 토글 보이기 안보이기
    if (password.length > 0) {
      setIsPasswordToggleVisible(true);
    } else {
      setIsPasswordToggleVisible(false);
    }
  }, [password]);

  useEffect(() => {
    //전화번호 체크
    if (phoneNum.length > 0) {
      if (isValidPhoneNumber(phoneNum)) {
        setCheckPhoneNum(true);
        setErrorText("");
      } else {
        setCheckPhoneNum(false);
        setErrorText(
          "휴대폰 번호가 정확하지 않습니다. 국가번호를 포함하여 전체 전화번호를 입력해주세요."
        );
      }
    }
    if (phoneNum.length == 0) {
      setCheckPhoneNum(false);
    }
  }, [phoneNum]);
  useEffect(() => {
    //이름체크
    if (name.length > 0) {
      setCheckName(true);
    } else {
      setCheckName(false);
    }
  }, [name]);
  useEffect(() => {
    //닉네임체크
    if (nickname.length > 0) {
      if (isVaildId(nickname)) {
        handledupId(nickname);
      } else {
        setCheckNickname(false);
        setErrorText(
          "사용자 이름에는 문자, 숫자, 밑줄 및 마침표만 사용할 수 있습니다."
        );
      }
    }
    if (nickname.length == 0) {
      setCheckNickname(false);
    }
    //중복확인
  }, [nickname]);
  useEffect(() => {
    //비밀번호체크
    if (password.length > 6) {
      setCheckPassword(true);
    } else {
      setCheckPassword(false);
    }
  }, [password]);
  return (
    <LoginBox1>
      <LogoImg />
      <IntroText>친구들과 함께 여행 이야기를 공유하고 보세요.</IntroText>
      <KaKaoButton>
        <img src={kakaoIcon} width="22px" />
        카카오 로그인
      </KaKaoButton>
      <Or>or</Or>
      <div style={{ position: "relative" }}>
        {phoneNum.length > 0 ? <CheckIcon ischeck={checkPhoneNum} /> : null}
        <LoginInput
          placeholder="전화번호, 사용자 이름 또는 이메일"
          icon={mailIcon}
          value={phoneNum}
          onChange={(e) => setPhoneNum(e.target.value)}
          type="text"
          maxLength={20}
        />
      </div>
      <div style={{ position: "relative" }}>
        {checkName ? <CheckIcon ischeck={true} /> : null}
        <LoginInput
          placeholder="성명"
          icon={userIcon}
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          maxLength={20}
        />
      </div>
      <div style={{ position: "relative" }}>
        {nickname.length > 0 ? <CheckIcon ischeck={checkNickname} /> : null}
        <LoginInput
          placeholder="사용자 이름"
          icon={settingIcon}
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          type="text"
          maxLength={20}
        />
      </div>
      <PasswordBox>
        {isPasswordToggleVisible ? (
          <PasswordToggleBox>
            {checkPassword ? (
              <img src={okIcon} width="24px" />
            ) : (
              <img src={noIcon} width="24px" />
            )}
            <PasswordToggle onClick={togglePasswordVisible}>
              {isPasswordVisible ? "숨기기" : "비밀번호 표시"}
            </PasswordToggle>
          </PasswordToggleBox>
        ) : null}
        <LoginInput
          placeholder="비밀번호"
          icon={lockIcon}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type={isPasswordVisible ? "text" : "password"}
          maxLength={20}
        />
      </PasswordBox>
      <SignupButton onClick={handleSignup} disabled={!isSignupValid}>
        가입
      </SignupButton>
      <ErrorMessage>{errorText}</ErrorMessage>
    </LoginBox1>
  );
};

export default BasicBox;
