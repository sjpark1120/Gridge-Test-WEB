import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ErrorMessage,
  KaKaoButton,
  LoginBox1,
  LoginBox2,
  LoginBox3,
  LoginButton,
  LoginInput,
  LoginRoot,
  LogoImg,
  MainImg,
  Or,
  PasswordBox,
  PasswordToggle,
  Signup,
  StoreContainer,
  Text1,
  Text2,
  Text3,
} from "./styles";
import { useRecoilState } from "recoil";
import { jwtState, nameState } from "../../recoil/login";
import kakaoIcon from "../../assets/kakao.png";
import mailIcon from "../../assets/mail.png";
import lockIcon from "../../assets/lock.png";
import googlestoreImg from "../../assets/Mobile app store badge.png";
import applestoreImg from "../../assets/Mobile app store badge apple.png";
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [name, setName] = useRecoilState(nameState);
  const [password, setPassword] = useState("");
  const [, setJwt] = useRecoilState(jwtState);
  const [errorText] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordToggleVisible, setIsPasswordToggleVisible] = useState(false);
  const [isLoginValid, setIsLoginValid] = useState(false);

  // 비밀번호 에서 엔터키 누를 경우
  const onKeyUp = (event: React.KeyboardEvent<HTMLElement>) => {
    const key = event.key || event.keyCode;
    if (key === "Enter" || key === 13) {
      handleLogin().then();
    }
  };

  // 로그인 버튼 클릭
  const handleLogin = async () => {
    try {
      if (!isLoginValid) {
        return; // 비활성화 상태일 때는 클릭 이벤트를 처리하지 않음
      }

      //서버통신 코드 작성

      setJwt("success login");

      navigate(`/`);
    } catch (error) {
      alert("네트워크 통신 실패. 잠시후 다시 시도해주세요.");
    }
  };

  const togglePasswordVisible = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  useEffect(() => {
    //로그인 버튼 활성화 체크
    if (name.length > 0 && password.length > 5) {
      setIsLoginValid(true);
    } else {
      setIsLoginValid(false);
    }
  }, [name, password]);

  useEffect(() => {
    //비밀번호 토글 보이기 안보이기
    if (password.length > 0) {
      setIsPasswordToggleVisible(true);
    } else {
      setIsPasswordToggleVisible(false);
    }
  }, [password]);

  return (
    <LoginRoot>
      <MainImg />
      <div>
        <LoginBox1>
          <LogoImg />
          <LoginInput
            placeholder="전화번호, 사용자 이름 또는 이메일"
            icon={mailIcon}
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            maxLength={20}
          />
          <PasswordBox>
            {isPasswordToggleVisible ? (
              <PasswordToggle onClick={togglePasswordVisible}>
                {isPasswordVisible ? "숨기기" : "비밀번호 표시"}
              </PasswordToggle>
            ) : null}
            <LoginInput
              placeholder="비밀번호"
              icon={lockIcon}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={isPasswordVisible ? "text" : "password"}
              onKeyUp={onKeyUp}
              maxLength={20}
            />
          </PasswordBox>
          <LoginButton onClick={handleLogin} disabled={!isLoginValid}>
            로그인
          </LoginButton>
          <Or>or</Or>
          <KaKaoButton>
            <img src={kakaoIcon} width="22px" />
            카카오 로그인
          </KaKaoButton>
          <ErrorMessage>{errorText}</ErrorMessage>
          <Text1>비밀번호를 잊으셨나요?</Text1>
        </LoginBox1>
        <LoginBox2>
          <Text2>계정이 없으신가요?</Text2>
          <Link to="/sign-up" style={{ textDecoration: "none" }}>
            <Signup>가입하기</Signup>
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
    </LoginRoot>
  );
};

export default Login;
