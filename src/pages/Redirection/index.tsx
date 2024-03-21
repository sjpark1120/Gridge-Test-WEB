import React, { useEffect } from "react";
import AuthApi from "../../apis/Auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { REST_API_KEY } from "../../apis/Kakao";
import { useRecoilState } from "recoil";
import { kakaoTokenState } from "../../recoil/signup";

const Redirection = () => {
  const navigate = useNavigate();
  const [, setKakaoToken] = useRecoilState(kakaoTokenState);
  const code = new URL(document.location.toString()).searchParams.get("code");
  const kakaoCode = async (code: string) => {
    axios
      .post(
        "https://kauth.kakao.com/oauth/token",
        `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=http://localhost:3000/login/kakao&code=${code}`,
        {
          headers: {
            "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
          },
        }
      )
      .then((response) => {
        console.log(response.data.access_token);
        handleKakaoLogin(response.data.access_token);
      })
      .catch(() => {
        console.log("카카오로그인 실패 ");
      });
  };
  const handleKakaoLogin = async (code: string) => {
    try {
      const response = await AuthApi.kakaoLogin(code);
      console.log(response, "카카오 로그인 성공");
      navigate("/");
    } catch (error: any) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        console.log(error.response.data.statusCode);
        alert(error.response.data.message);
        if (error.response.data.statusCode == "404") {
          setKakaoToken(code);
          navigate("/sign-up");
          return;
        }
      }
      navigate("/login");
    }
  };
  useEffect(() => {
    if (code) {
      kakaoCode(code);
    }
  }, []);
  return <div>카카오 로그인 중</div>;
};

export default Redirection;
