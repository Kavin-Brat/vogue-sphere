import React from "react";
import { FIELDLABELS } from "../../../constants/Labels";

const ProductMenuBar: React.FC = () => {
  /* 
  Maximum menus
  Short Title - 10
  Short Title - 20
  */
  const list = ["Men", "Women", "Kids", "Sale"];
  return (
    <div className="hidden xl:flex flex-row space-x-5 justify-center items-center w-full xl:h-[38px] 2xl:h-[43px] xl:py-[8px] 2xl:py-[10px] xl:px-[20px] 2xl:px-[30px] border-b border-[#EDEDED]">
      {list &&
        list.length > 0 &&
        list.map((item) => {
          return (
            <select disabled className="cursor-pointer bg-[#F3F9FB] hover:bg-regal-blue hover:border-regal-blue rounded-full border border-[#ffffff] w-auto py-[3px] px-[15px] flex justify-center items-center text-xs 2xl:text-base font-normal 2xl:font-medium text-[#666666] hover:text-[#ffffff] focus:outline-none focus:shadow-outline">
              <option selected>{item || FIELDLABELS.na}</option>
            </select>
          );
        })}
    </div>
  );
};

export default ProductMenuBar;
