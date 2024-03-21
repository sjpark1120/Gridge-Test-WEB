import React from "react";

const Home = React.lazy(() => import("./pages/home"));
const Dashboard = React.lazy(() => import("./pages/dashboard/Dashboard"));
const Page404 = React.lazy(() => import("./pages/page404/Page404"));
const Page500 = React.lazy(() => import("./pages/page500/Page500"));
const Pay = React.lazy(() => import("./pages/Pay/Pay"));

const routes = [
  { path: "/", element: Home },
  { path: "/dashboard", element: Dashboard },
  { path: "/404", element: Page404 },
  { path: "/500", element: Page500 },
  { path: "/pay", element: Pay },
];

export default routes;
