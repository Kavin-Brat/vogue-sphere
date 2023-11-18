import React from "react";

function TopMenubar() {
  return (
    <div className="flex flex-row w-full h-[60px] md:h-[90px] py-[10px] md:py-[20px]  px-[10px] md:px-[30px] border-b border-[#EDEDED]">
      <div className="basis-1/4 flex space-x-5">
        <div className="flex-none group">
          <div className="flex flex-col items-center justify-center w-11 h-11 rounded-md bg-[#F3F9FB] text-white hover:bg-[#F3F9FB] hover:shadow-lg cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
            <div className="w-7 h-[2px] bg-regal-blue my-[4px] rounded-md"></div>
            <div className="w-7 h-[2px] bg-regal-blue my-[4px] rounded-md"></div>
            <div className="w-7 h-[2px] bg-regal-blue my-[4px] rounded-md"></div>
          </div>
        </div>
        <div className="flex-none text-4xl font-bold text-regal-blue cursor-pointer">Vogue Sphere</div>
      </div>
      <div className="basis-1/2 grid justify-items-center">
        <div className="w-[250px] md:w-[542px] h-full">
          <input
            className=" w-full h-full bg-[#F3F9FB] appearance-none border rounded-md w-full py-2 px-3 font-normal text-metal-grey focus:outline-none focus:shadow-outline
          border border-none"
            id="username"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="basis-1/4 flex justify-between">
        <div className="basis-1/2 flex space-x-5">
          <div className="bg-purple-600">LoginLogo</div>
          <div className="bg-indigo-600">Sign in/Login in</div>
        </div>
        <div className="basis-1/2 flex justify-end space-x-5">
          <div className="bg-purple-600">CartLogo</div>
          <div className=" bg-pink-600">Cart</div>
        </div>
      </div>
    </div>
  );
}

export default TopMenubar;
