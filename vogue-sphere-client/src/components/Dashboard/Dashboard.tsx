import Banner from "../Cards/Banner";
import CarouselDisplay from "./CarouselDisplay";
import ProductCategory from "./ProductCategory";
import ProductStory from "./ProductStory/ProductStory";

const Dashboard: React.FC = () => {
  return (
    <div className="flex justify-center w-full h-full">
      <div className="h-dvh w-[80%]">
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
