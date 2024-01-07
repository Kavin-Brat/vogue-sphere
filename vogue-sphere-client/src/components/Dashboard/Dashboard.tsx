import { useDispatch, useSelector } from "react-redux";
import Banner from "../Cards/Banner";
import CarouselDisplay from "./CarouselDisplay";
import ProductCategory from "./ProductCategory";
import ProductStory from "./ProductStory/ProductStory";
import { updateDashboardDetails } from "../../store/dashboard";
import { RootState } from "../../store/store";

const Dashboard: React.FC = () => {
  const dashboardDetails = useSelector((state: RootState) => state.dashboard.value);
  const dispatch = useDispatch();
  return (
    <div className="flex justify-center w-full h-full">
      <div className="h-dvh w-[80%]">
        {dashboardDetails?.name ? dashboardDetails?.name : "NA"}
        <button className="border border-[red] m-1 p-1" onClick={() => dispatch(updateDashboardDetails({ name: "I'm here in the dashboard" }))}>
          Click to fect data
        </button>
        <CarouselDisplay />
        <ProductCategory />
        <ProductStory />
        <Banner />
        <ProductStory />
      </div>
    </div>
  );
};

export default Dashboard;
