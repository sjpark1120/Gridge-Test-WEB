import React, { Suspense, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import routes from "../../routes";
import { Content } from "./styles";

const loading = <div>화면을 불러오는 중 입니다.</div>;

const AppContent = () => {
  const location = useLocation();
  const [isExistsFilteredRoute] = useState(
    routes.filter((route) => route.path === location.pathname).length > 0
  );

  return (
    <Content>
      <Suspense fallback={loading}>
        {!isExistsFilteredRoute ? (
          <Navigate to="/404" />
        ) : (
          <Routes>
            {routes.map(
              (route, idx) =>
                route.element && (
                  <Route
                    key={idx}
                    path={route.path}
                    element={<route.element />}
                  />
                )
            )}
          </Routes>
        )}
      </Suspense>
    </Content>
  );
};

export default React.memo(AppContent);
