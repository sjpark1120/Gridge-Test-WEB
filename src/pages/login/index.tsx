import React from "react";
import { useNavigate } from "react-router-dom";
import { InputWrap, LoginButton, LoginRoot, Wrap } from "./styles";
import { useRecoilState } from "recoil";
import { jwtState, nameState } from "../../recoil/login";

const Login = () => {
  const navigate = useNavigate();
  const [name, setName] = useRecoilState(nameState);
  const [, setJwt] = useRecoilState(jwtState);

  // Input 에서 엔터키 누를 경우
  const onKeyUp = (event: React.KeyboardEvent<HTMLElement>) => {
    const key = event.key || event.keyCode;
    if (key === "Enter" || key === 13) {
      handleLogin().then();
    }
  };

  // 로그인 버튼 클릭
  const handleLogin = async () => {
    try {
      if (Object.keys(name).length === 0) {
        alert("이름을 입력해 주세요.");
        return;
      }

      //서버통신 코드 작성

      setJwt("success login");

      navigate(`/`);
    } catch (error) {
      alert("네트워크 통신 실패. 잠시후 다시 시도해주세요.");
    }
  };

  return (
    <LoginRoot>
      <Wrap>
        <div
          style={{
            fontSize: "2.5rem",
            fontWeight: "600",
            marginBottom: "4rem",
          }}
        >
          로그인
        </div>
        <div
          style={{
            fontSize: "1.8rem",
            fontWeight: "600",
            marginBottom: "1rem",
          }}
        >
          이름
        </div>
        <InputWrap
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="이름을 입력해주세요."
          onKeyUp={onKeyUp}
        />
        <LoginButton onClick={handleLogin}>로그인</LoginButton>
      </Wrap>
    </LoginRoot>
  );
};

export default Login;
