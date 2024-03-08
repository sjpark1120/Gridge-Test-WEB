import axios, { AxiosInstance } from "axios";
import { JWT_KEY } from "../../config/constant";
import * as jsonwebtoken from "jsonwebtoken";
import { JwtPayload } from "jsonwebtoken";

const request: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API,
  timeout: 2500,

  headers: {
    accept: "application/json",
    Authorization: `Bearer ${window.localStorage.getItem(JWT_KEY)}`,
  },
});

request.interceptors.request.use(
  (config) => {
    const jwt = window.localStorage.getItem(JWT_KEY) ?? "";
    const decodedJwt: JwtPayload = jsonwebtoken.decode(jwt) as JwtPayload;
    const currentTime = new Date().getTime() / 1000;

    if (decodedJwt.exp ?? 0 < currentTime) {
      // 서버에 토큰 재발급 요청 코드 작성 필요
      console.log("서버에 토큰 재발급 요청");
    }
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default request;
