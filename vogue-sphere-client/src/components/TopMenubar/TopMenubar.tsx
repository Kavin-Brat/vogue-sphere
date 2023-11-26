import React from "react";
import SearchDropdown from "./SearchDropdown";
import userIcon from "../../icons/userIcon.svg";
import cartIcon from "../../icons/cartIcon.svg";

const TopMenubar: React.FC = () => {
  return (
    <div className="flex flex-row justify-center items-center w-full h-[50px] xl:h-[60px] 2xl:h-[90px] py-[10px] xl:py-[14px] 2xl:py-[10px] px-[12px] xl:px-[20px] 2xl:px-[30px] border-b border-[#EDEDED]">
      <div className="basis-1/4 flex space-x-2 2xl:space-x-5">
        <div className="flex-none group">
          <div className="flex flex-col items-center justify-center w-6 h-6 xl:w-8 xl:h-8 2xl:w-11 2xl:h-11 rounded-md bg-[#F3F9FB] text-white hover:bg-[#F3F9FB] hover:shadow-lg cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
            <div className="w-4 xl:w-5 2xl:w-7 h-[1px] 2xl:h-[2px] bg-regal-blue my-[2px] xl:my-[3px] 2xl:my-[4px] rounded-md"></div>
            <div className="w-4 xl:w-5 2xl:w-7 h-[1px] 2xl:h-[2px] bg-regal-blue my-[2px] xl:my-[3px] 2xl:my-[4px] rounded-md"></div>
            <div className="w-4 xl:w-5 2xl:w-7 h-[1px] 2xl:h-[2px] bg-regal-blue my-[2px] xl:my-[3px] 2xl:my-[4px] rounded-md"></div>
          </div>
        </div>
        <a
          className="
        flex justify-center items-center
        text-xs xl:text-base 2xl:text-4xl font-bold text-regal-blue cursor-pointer"
          href={`/shop/dashboard`}
        >
          Vogue Sphere
        </a>
      </div>
      <div className="basis-1/2 grid justify-items-center">
        <SearchDropdown />
      </div>
      <div className="basis-1/4 flex justify-between cursor-pointer">
        <div className="basis-1/2 flex space-x-2 2xl:space-x-3 flex justify-center items-center">
          <div className="">
            <img src={userIcon} className="w-3 h-3 xl:w-4 xl:h-4 2xl:w-5 2xl:h-5 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105" />
          </div>
          <a href={`/shop/login`} className="hidden xl:block text-xs 2xl:text-base  font-medium text-[#666666]">
            Sign up/Log in
          </a>

          <a href={`/shop/login`} className="text-xs font-normal text-[#666666]  block xl:hidden">
            Sign in
          </a>
        </div>
        <div className="basis-1/2 flex justify-end space-x-2 2xl:space-x-3 cursor-pointer">
          <div className="flex justify-center items-center">
            <img src={cartIcon} className="w-3 h-3 xl:w-4 xl:h-4 2xl:w-5 2xl:h-5 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105" />
          </div>
          <div className="flex justify-center items-center text-xs 2xl:text-base font-normal 2xl:font-medium text-[#666666]">Cart</div>
        </div>
      </div>
    </div>
  );
};

export default TopMenubar;
