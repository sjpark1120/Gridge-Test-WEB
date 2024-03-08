import React from "react";

const AppSidebar = () => {
  return (
    <div style={{ backgroundColor: "purple" }}>
      <div>
        <h4 style={{ color: "white" }}>2019, 주식회사 소프트스퀘어드</h4>
      </div>
      <div>
        <h4 style={{ color: "white" }}>
          너디너리 데이터를 동의 없이 외부 유출시 형사 처벌을 받을 수 있습니다.
        </h4>
      </div>
    </div>
  );
};

export default React.memo(AppSidebar);
