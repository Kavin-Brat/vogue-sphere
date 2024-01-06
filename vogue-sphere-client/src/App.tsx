import "./App.css";
import TopMenubar from "./components/MenuBars/TopMenubar/TopMenubar";
// External Imports
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { protectedRoutes, publicRoutes } from "./routes/routes";
import { AuthenticateUser } from "./utils/helper";
import ThemedSuspense from "./common-components/ThemedSuspense";
import { envVarConfig } from "./constants/Constants";
import ProductMenuBar from "./components/MenuBars/ProductMenuBar/ProductMenuBar";
import Footer from "./components/Footer/Footer";

function App() {
  // creating browser routes with user authentication
  const router = createBrowserRouter(AuthenticateUser() ? [...protectedRoutes, ...publicRoutes] : publicRoutes, { basename: "/shop" });
  console.log("VITE_API_URL", envVarConfig.basename);
  return (
    <>
      <TopMenubar />
      <ProductMenuBar />
      <RouterProvider router={router} fallbackElement={<ThemedSuspense />} />
      <Footer />
    </>
  );
}

export default App;
