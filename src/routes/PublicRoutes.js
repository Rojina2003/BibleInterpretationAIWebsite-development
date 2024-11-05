import { lazy } from "react";

const routes = [
  {
    path: "/",
    exact: true,
    element: lazy(() => import("../pages/chat/Chat.jsx")),
  },
  
  {
    path: "/forgotten-password",
    element: lazy(() => import("../pages/account/ForgotPassword.jsx")),
  },
  {
    path: "/c/:id",
    element: lazy(() => import("../pages/chat/Chat.jsx")),
  },
  {
    path: "/reset-password",
    element: lazy(() => import("../pages/account/ResetPassword.jsx")),
  },
  {
    path: "/login",
    element: lazy(() => import("../pages/account/Login.jsx")),
  },
  {
    path: "/sign-up",
    element: lazy(() => import("../pages/account/Signup.jsx")),
  },
  {
    path: "/verify-otp",
    element: lazy(() => import("../pages/account/VerifyOtp.jsx")),
  },
  {
    path: "/terms-and-conditions",
    element: lazy(() => import("../pages/contentPages/Terms&Conditions.jsx")),
  },
  {
    path: "/privacy-policy",
    element: lazy(() => import("../pages/contentPages/PrivayPolicy.jsx")),
  },
  {
    path: "/about-us",
    element: lazy(() => import("../pages/contentPages/AboutUs.jsx")),
  },
  {
    path: "*",
    element: lazy(() => import("../components/NotFound.jsx")),
  },
];

export default routes;
