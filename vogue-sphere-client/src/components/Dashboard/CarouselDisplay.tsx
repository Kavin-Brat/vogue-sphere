import leftArrow from "../../icons/square-caret-left-solid.svg";
import rightArrow from "../../icons/square-caret-right-solid.svg";
import bgImage1 from "../../assets/img/bg-image1.jpg";
import bgImage2 from "../../assets/img/bg-image2.jpg";
import bgImage3 from "../../assets/img/bg-image3.jpg";
import { useState } from "react";
import { motion } from "framer-motion";

const CarouselDisplay: React.FC = () => {
  const imgUrlList = [bgImage1, bgImage2, bgImage3];
  const [backgroudImgIndex, setBackgroundImgSrcIndex] = useState(0);

  const onClickIncrement = () => {
    setBackgroundImgSrcIndex((prevIndex) => (prevIndex === imgUrlList.length - 1 ? 0 : prevIndex + 1));
  };

  const onClickDecrement = () => {
    setBackgroundImgSrcIndex((prevIndex) => (prevIndex === 0 ? imgUrlList.length - 1 : prevIndex - 1));
  };

  const carouselStyles = {
    backgroundImage: `url(${imgUrlList[backgroudImgIndex]})`,
  };

  console.log("backgroudImgIndex", backgroudImgIndex);
  return (
    <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -10, opacity: 0 }} transition={{ duration: 0.2 }} className="z-0 relative h-[250px] xl:h-[350px] 2xl:h-[450px] w-[100%] bg-no-repeat bg-cover bg-center" style={carouselStyles}>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="flex justify-center items-center cursor-pointer absolute top-[100px] xl:top-[150px] 2xl:top-[200px] left-3 rounded-full h-[20px] xl:h-[30px] 2xl:h-[40px] w-[20px] xl:w-[30px] 2xl:w-[40px] bg-[#F3F9FB] hover:opacity-100 opacity-25"
      >
        <motion.img initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -10, opacity: 0 }} transition={{ duration: 0.2 }} onClick={onClickDecrement} src={leftArrow} alt="left-arrow" className="h-[12px] xl:h-[18px] 2xl:h-[25px] w-[12px] xl:w-[18px] 2xl:w-[25px]" />
      </motion.div>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="flex justify-center items-center cursor-pointer absolute top-[100px] xl:top-[150px] 2xl:top-[200px] right-3 rounded-full h-[20px] xl:h-[30px] 2xl:h-[40px] w-[20px] xl:w-[30px] 2xl:w-[40px] bg-[#F3F9FB] hover:opacity-100 opacity-25"
      >
        <motion.img initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -10, opacity: 0 }} transition={{ duration: 0.2 }} onClick={onClickIncrement} src={rightArrow} alt="right-arrow" className="h-[12px] xl:h-[18px] 2xl:h-[25px] w-[12px] xl:w-[18px] 2xl:w-[25px]" />
      </motion.div>
    </motion.div>
  );
};

export default CarouselDisplay;
