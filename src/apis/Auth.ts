import AxiosInstance from "./CustomAxios";
interface LoginData {
  loginId: string;
  password: string;
}
interface SignupData {
  loginId: string;
  password: string;
  realName: string;
  phone: string;
  birthDate: string;
}
const AuthApi = {
  login: async (loginData: LoginData) => {
    try {
      const response = await AxiosInstance.post("/auth/sign-in", loginData);
      console.log("response: ", response);
      if (response && response.status === 200) {
        AxiosInstance.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.result.jwt}`;
        console.log("jws토큰 헤더에 저장", response.data.result.jwt);
        localStorage.setItem("jwt", response.data.result.jwt); //jwtToken 저장
        localStorage.setItem("serverId", response.data.result.id); //서버loginId 저장
        localStorage.setItem("userId", loginData.loginId); // id 저장
      }
      return response.data;
    } catch (error) {
      console.error("Error in login:", error);
      throw error;
    }
  },
  signup: async (signupData: SignupData) => {
    try {
      const response = await AxiosInstance.post("/auth/sign-up", signupData);
      console.log("response: ", response);
      return response.data;
    } catch (error) {
      console.error("Error in signup:", error);
      throw error;
    }
  },
  reJwt: async (jwt: string) => {
    try {
      const response = await AxiosInstance.post("/auth/jwt", { jwt });
      console.log("response: ", response);
      if (response && response.status === 200) {
        AxiosInstance.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.result.jwt}`;
        console.log("jws토큰 헤더에 저장", response.data.result.jwt);
        localStorage.setItem("jwt", response.data.result.jwt); //jwtToken 저장
        localStorage.setItem("serverId", response.data.result.id); // id 저장
      }
      return response.data;
    } catch (error) {
      console.error("Error in rejwt:", error);
      throw error;
    }
  },
  kakaoLogin: async (code: string) => {
    try {
      const response = await AxiosInstance.get("/auth/kakao/sign-in-by-code", {
        params: {
          code,
        },
      });
      console.log("response: ", response);
      return response.data;
    } catch (error) {
      console.error("Error in kakao login:", error);
      throw error;
    }
  },
};
export default AuthApi;
