import { lazy } from "react";
const Account = lazy(() => import("../components/Account/Account"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));
const Login = lazy(() => import("../components/Login/Login"));
const Dashboard = lazy(() => import("../components/Dashboard/Dashboard"));

// Private routes array
const protectedRoutes = [
  {
    path: "/account",
    children: [
      { index: true, element: <Account /> },
      { path: "cart", element: <>cart and checkout</> },
      { path: "orders", element: <>your orders</> },
      { path: "whishlist", element: <>whishlist</> },
      { path: "address_&_payment_info", element: <>address and payment info</> },
      { path: "reset_password", element: <>reset password</> },
      { path: "*", element: <PageNotFound /> },
    ],
  },
];

// Public routes array
const publicRoutes = [
  {
    path: "/dashboard",
    children: [
      { index: true, element: <Dashboard /> },
      { path: "women", element: <>women</> },
      { path: "kids", element: <>kids</> },
      { path: "men", element: <>men</> },
      { path: "product", element: <>Product page</> },
      { path: "*", element: <PageNotFound /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/about_us", element: <>about us</> },
  { path: "/other_info", element: <>other info</> },
  { path: "/help", element: <>help</> },
  { path: "/", element: <Dashboard /> },
  { path: "*", element: <PageNotFound /> },
];

export { protectedRoutes, publicRoutes };
