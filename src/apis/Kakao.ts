const REST_API_KEY = "44a90896f3ee78d0e03712d6cd025cfd";
const REDIRECT_URI = "http://localhost:3000/login/kakao";
export const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
