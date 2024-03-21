import axios from "axios";
import AuthApi from "./Auth";

const AxiosInstance = axios.create({
  baseURL: "https://api-sns.gridge-test.com", //기본 서버 주소
  withCredentials: true,
  headers: {
    //토큰 부분 추가
  },
});

AxiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    console.log("인터셉트", error.response);
    if (error.config.sent) {
      return Promise.reject(error);
    } else if (
      error.response.data.error === "INVALID_AUTH_TOKEN" ||
      error.response.data.statusCode == 403
    ) {
      error.config.sent = true;
      const token = localStorage.getItem("jwt");
      if (token) {
        const response = await AuthApi.reJwt(token);
        console.log("인터셉터 후 자동토큰재발급성공", response);
        if (response.result.jwt) {
          error.config.headers.Authorization = `Bearer ${response.result.jwt}`;
          console.log("헤더에 저장");
        }
        return AxiosInstance(error.config);
      }
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);
export default AxiosInstance;
