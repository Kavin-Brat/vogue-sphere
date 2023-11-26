import "./App.css";
import TopMenubar from "./components/TopMenubar/TopMenubar";
// External Imports
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { protectedRoutes, publicRoutes } from "./routes/routes";
import { AuthenticateUser } from "./utils/helper";
import ThemedSuspense from "./common-components/ThemedSuspense";
import { envVarConfig } from "./constants/Constants";

function App() {
  // creating browser routes with user authentication
  const router = createBrowserRouter(AuthenticateUser() ? [...protectedRoutes, ...publicRoutes] : publicRoutes, { basename: "/shop" });
  console.log("VITE_API_URL", envVarConfig.basename);
  return (
    <>
      <TopMenubar />
      <RouterProvider router={router} fallbackElement={<ThemedSuspense />} />
    </>
  );
}

export default App;
