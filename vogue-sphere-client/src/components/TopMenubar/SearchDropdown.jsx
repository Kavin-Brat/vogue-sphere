import React from "react";
import searchIcon from "../../icons/searchIcon.svg";
import { FIELDLABELS } from "../../constants/Labels";

function SearchDropdown() {
  return (
    <div>
      <div className="relative mt-1 xl:mt-2 rounded xl:rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2 xl:pl-3">
          <img src={searchIcon} className="w-[10px] h-[10px] xl:w-[20px] xl:h-[20px]" />
        </div>
        <div className="w-[150px] md:w-[300px] xl:w-[800px] h-[30px] xl:h-[45px]">
          <input
            className="w-[150x] md:w-[300px] xl:w-[500px] h-full bg-[#F3F9FB] appearance-none border rounded xl:rounded-l-md w-full py-2 xl:py-2 pl-6 pr-2 xl:pl-10 xl:pr-3 text-xs xl:text-base font-extralight xl:font-normal text-metal-grey focus:outline-none focus:shadow-outline
          border border-none"
            id="search"
            type="text"
            placeholder={FIELDLABELS.mainSearch}
          />
        </div>
        <div className="hidden xl:block absolute inset-y-0 right-0 flex items-center xl:border-l xl: border-[#EDEDED] xl:rounded-r-md">
          <select id="currency" name="currency" className="bg-[#F3F9FB] w-[80px] xl:w-[300px] h-full rounded-r xl:rounded-r-md border-0 py-0 pl-1 xl:pl-2 pr-3 xl:pr-7 text-xs xl:text-base text-gray-500 focus:outline-none focus:shadow-outline">
            <option>All Categories</option>
            <option>USDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSD</option>
            <option>CADCADCADCAD</option>
            <option>EUREUREUREUR</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default SearchDropdown;
