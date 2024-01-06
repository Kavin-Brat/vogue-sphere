import ProductCards from "../../Cards/ProductCards";
import { motion } from "framer-motion";
import leftArrow from "../../../icons/square-caret-left-solid.svg";
import rightArrow from "../../../icons/square-caret-right-solid.svg";

const ContentTabs: React.FC = () => {
  const list = [
    {
      product_name: "one",
      price: "234234",
    },
    {
      product_name: "two",
      price: "234234",
    },
    {
      product_name: "three",
      price: "234234",
    },
    {
      product_name: "four",
      price: "234234",
    },
    {
      product_name: "five",
      price: "234234",
    },
  ];
  return (
    <div className="z-0 relative grid gap-x-9 gap-y-6 grid-cols-5 pb-8 px-8 h-full bg-[#F3F9FB]">
      {list &&
        list.length > 0 &&
        list.map((item) => {
          return <ProductCards details={item} />;
        })}
      <div className="flex justify-center items-center cursor-pointer absolute top-[100px] xl:top-[150px] 2xl:top-[200px] left-3 rounded-full h-[20px] xl:h-[30px] 2xl:h-[40px] w-[20px] xl:w-[30px] 2xl:w-[40px] bg-[#F3F9FB] hover:opacity-100 opacity-25">
        <motion.img initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -10, opacity: 0 }} transition={{ duration: 0.2 }} /* onClick={onClickDecrement} */ src={leftArrow} alt="left-arrow" className="h-[12px] xl:h-[18px] 2xl:h-[25px] w-[12px] xl:w-[18px] 2xl:w-[25px]" />
      </div>
      <div className="flex justify-center items-center cursor-pointer absolute top-[100px] xl:top-[150px] 2xl:top-[200px] right-3 rounded-full h-[20px] xl:h-[30px] 2xl:h-[40px] w-[20px] xl:w-[30px] 2xl:w-[40px] bg-[#F3F9FB] hover:opacity-100 opacity-25">
        <motion.img initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -10, opacity: 0 }} transition={{ duration: 0.2 }} /* onClick={onClickIncrement} */ src={rightArrow} alt="right-arrow" className="h-[12px] xl:h-[18px] 2xl:h-[25px] w-[12px] xl:w-[18px] 2xl:w-[25px]" />
      </div>
    </div>
  );
};

export default ContentTabs;
/* mb-10 h-full bg-[red] */
