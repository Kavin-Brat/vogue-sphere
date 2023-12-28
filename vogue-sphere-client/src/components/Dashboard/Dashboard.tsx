import CarouselDisplay from "./CarouselDisplay";

const Dashboard: React.FC = () => {
  return (
    <div className="flex justify-center w-full h-full bg-[#F3F9FB]">
      <div className="h-dvh w-[80%]">
        <CarouselDisplay />
      </div>
    </div>
  );
};

export default Dashboard;
