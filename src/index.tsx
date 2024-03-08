import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { RecoilRoot } from "recoil";
import "react-app-polyfill/stable";
import { GlobalStyle } from "./components/styles";
// 이외에 필요한 스타일 파일이 있다면 import 해주세요.

ReactDOM.render(
  <StrictMode>
    <RecoilRoot>
      <GlobalStyle />
      <App />
    </RecoilRoot>
  </StrictMode>,
  document.getElementById("root")
);
