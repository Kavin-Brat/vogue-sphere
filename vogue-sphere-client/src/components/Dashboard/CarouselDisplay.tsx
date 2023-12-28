import "./styles.css";
import leftArrow from "../../icons/square-caret-left-solid.svg";
import rightArrow from "../../icons/square-caret-right-solid.svg";

const CarouselDisplay: React.FC = () => {
  return (
    <div className="z-0 relative h-[250px] xl:h-[350px] 2xl:h-[450px] w-[100%] bg-no-repeat bg-cover bg-center carousel-display">
      <div className="flex justify-center items-center cursor-pointer absolute top-[100px] xl:top-[150px] 2xl:top-[200px] left-3 rounded-full h-[20px] xl:h-[30px] 2xl:h-[40px] w-[20px] xl:w-[30px] 2xl:w-[40px] bg-[#F3F9FB] hover:opacity-100 opacity-25">
        <img src={leftArrow} alt="left-arrow" className="h-[12px] xl:h-[18px] 2xl:h-[25px] w-[12px] xl:w-[18px] 2xl:w-[25px]" />
      </div>
      <div className="flex justify-center items-center cursor-pointer absolute top-[100px] xl:top-[150px] 2xl:top-[200px] right-3 rounded-full h-[20px] xl:h-[30px] 2xl:h-[40px] w-[20px] xl:w-[30px] 2xl:w-[40px] bg-[#F3F9FB] hover:opacity-100 opacity-25">
        <img src={rightArrow} alt="right-arrow" className="h-[12px] xl:h-[18px] 2xl:h-[25px] w-[12px] xl:w-[18px] 2xl:w-[25px]" />
      </div>
    </div>
  );
};

export default CarouselDisplay;
