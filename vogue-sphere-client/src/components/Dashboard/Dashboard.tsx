import CarouselDisplay from "./CarouselDisplay";
import ProductStory from "./ProductStory/ProductStory";

const Dashboard: React.FC = () => {
  return (
    <div className="flex justify-center w-full h-full">
      <div className="h-dvh w-[80%]">
        <CarouselDisplay />
        <ProductStory />
      </div>
    </div>
  );
};

export default Dashboard;
