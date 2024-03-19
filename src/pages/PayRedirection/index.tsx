//import axios from "axios";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PayRedirection = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const impSuccess = searchParams.get("imp_success");
    //const imp_uid = searchParams.get("imp_uid");
    //const merchant_uid = searchParams.get("merchant_uid");
    const error_msg = searchParams.get("error_msg");
    console.log(impSuccess);
    if (impSuccess === "true") {
      //결제성공api부분
      // axios({
      //   url: "https://api-sns.gridge-test.com/payment",
      //   method: "post",
      //   headers: { "Content-Type": "application/json" },
      //   data: {
      //     imp_uid,
      //     merchant_uid,
      //   },
      // }).then((data) => {
      //   // 서버 결제 API 성공시 로직
      //   console.log("결제성공", data);
      //   navigate("/pay");
      // });
      console.log("결제성공"); //api가 없는 관계로 바로 성공
      navigate("/pay");
    } else {
      //결제실패
      console.log("결제실패");
      alert(error_msg);
      navigate("/pay");
    }
  }, []);
  return <div>모바일 결제중...</div>;
};

export default PayRedirection;
