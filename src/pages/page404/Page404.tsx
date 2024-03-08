import React from "react";
import { Link } from "react-router-dom";

export const Page404 = () => (
  <div>
    <h1>요청하신 페이지를 찾을 수 없습니다.</h1>
    <br />
    <Link to="/">홈으로 돌아가기</Link>
  </div>
);

export default Page404;
