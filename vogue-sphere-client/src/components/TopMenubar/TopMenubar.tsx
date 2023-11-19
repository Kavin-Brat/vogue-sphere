import React from "react";
import SearchDropdown from "./SearchDropdown";
import userIcon from "../../icons/userIcon.svg";
import cartIcon from "../../icons/cartIcon.svg";

function TopMenubar() {
  return (
    <div className="flex flex-row justify-center items-center w-full h-[60px] xl:h-[90px] py-[10px] xl:py-[10px] px-[12px] xl:px-[30px] border-b border-[#EDEDED]">
      <div className="basis-1/4 flex space-x-2 xl:space-x-5">
        <div className="flex-none group">
          <div className="flex flex-col items-center justify-center w-7 h-7 xl:w-11 xl:h-11 rounded-md bg-[#F3F9FB] text-white hover:bg-[#F3F9FB] hover:shadow-lg cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
            <div className="w-4 xl:w-7 h-[1px] xl:h-[2px] bg-regal-blue my-[2px] xl:my-[4px] rounded-md"></div>
            <div className="w-4 xl:w-7 h-[1px] xl:h-[2px] bg-regal-blue my-[2px] xl:my-[4px] rounded-md"></div>
            <div className="w-4 xl:w-7 h-[1px] xl:h-[2px] bg-regal-blue my-[2px] xl:my-[4px] rounded-md"></div>
          </div>
        </div>
        <div
          className="
        flex justify-center items-center
        text-xs xl:text-4xl font-bold text-regal-blue cursor-pointer"
        >
          Vogue Sphere
        </div>
      </div>
      <div className="basis-1/2 grid justify-items-center">
        <SearchDropdown />
      </div>
      <div className="basis-1/4 flex justify-between cursor-pointer">
        <div className="basis-1/2 flex space-x-2 xl:space-x-3 flex justify-center items-center">
          <div className="">
            <img src={userIcon} className="w-3 h-3 xl:w-5 xl:h-5 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105" />
          </div>
          <div className="hidden xl:block text-sm font-medium text-[#666666]">Sign up/Log in</div>
          <div className="text-xs font-normal text-[#666666]  block xl:hidden">Sign in</div>
        </div>
        <div className="basis-1/2 flex justify-end space-x-2 xl:space-x-3 cursor-pointer">
          <div className="flex justify-center items-center">
            <img src={cartIcon} className="w-3 h-3 xl:w-5 xl:h-5 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105" />
          </div>
          <div className="flex justify-center items-center text-xs xl:text-sm font-normal xl:font-medium text-[#666666]">Cart</div>
        </div>
      </div>
    </div>
  );
}

export default TopMenubar;
