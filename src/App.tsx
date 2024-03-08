import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const loading = <div>화면을 불러오는 중 입니다.</div>;

// Containers
const DefaultLayout = React.lazy(() => import("./layout/DefaultLayout"));

// Pages
const Login = React.lazy(() => import("./pages/login"));
const Page404 = React.lazy(() => import("./pages/page404/Page404"));
const Page500 = React.lazy(() => import("./pages/page500/Page500"));

//컴포넌트
const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={loading}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/404" element={<Page404 />} />
          <Route path="/500" element={<Page500 />} />
          <Route path="/*" element={<DefaultLayout />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
