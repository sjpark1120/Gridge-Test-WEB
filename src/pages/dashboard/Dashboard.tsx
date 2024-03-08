import React from "react";
import { useRecoilState } from "recoil";
import { nameState } from "../../recoil/login";

const Dashboard = () => {
  const [name] = useRecoilState(nameState);

  return (
    <div>
      대시보드입니다.
      <h4 className="card-title mb-0">
        {name} 님, 너디너리 템플릿에 오신 것을 환영합니다 🎉
      </h4>
    </div>
  );
};

export default Dashboard;
