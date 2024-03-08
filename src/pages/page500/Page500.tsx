import React from "react";
import { Link } from "react-router-dom";

const Page500 = () => (
  <div>
    <h1>잘못된 접근입니다. 다시 시도해주세요.</h1>
    <br />
    <Link to="/">홈으로 돌아가기</Link>
  </div>
);

export default Page500;
