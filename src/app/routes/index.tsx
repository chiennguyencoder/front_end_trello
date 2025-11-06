import React, { Suspense, lazy } from "react";

import { createBrowserRouter } from "react-router-dom";
import { useAuth } from "@/shared/lib/useAuth";

const LoginPage = React.lazy(() => import("@/pages/LoginPage"));
const DashboardPage = React.lazy(() => import("@/pages/DashboardPage"));
const AppLayout = React.lazy(() => import("@/features/app/ui/AppLayout"));

const LazyLoad = (
  Component: React.LazyExoticComponent<React.ComponentType<any>>
) => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Component />
  </React.Suspense>
);

export const routes = createBrowserRouter([
  {
    path: "/login",
    element: LazyLoad(LoginPage),
  },
  {
    path: "/",
    // loader: useAuth,
    element: LazyLoad(AppLayout),
    children: [
      {
        index: true,
        element: LazyLoad(DashboardPage),
      },
    ],
  },
]);
