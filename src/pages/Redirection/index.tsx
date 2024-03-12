import React, { useEffect } from "react";
import AuthApi from "../../apis/Auth";
import { useNavigate } from "react-router-dom";

const Redirection = () => {
  const navigate = useNavigate();
  const code = new URL(document.location.toString()).searchParams.get("code");
  const handleKakaoLogin = async (code: string) => {
    try {
      const response = await AuthApi.kakaoLogin(code);
      console.log(response, "카카오 로그이 ㄴ성공");
      navigate("/");
    } catch (error: any) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        alert(error.response.data.message);
      }
      navigate("/login");
    }
  };
  useEffect(() => {
    if (code) {
      handleKakaoLogin(code);
    }
  }, []);
  return <div>카카오 로그인 중</div>;
};

export default Redirection;
