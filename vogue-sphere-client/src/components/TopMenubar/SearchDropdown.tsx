import React from "react";
import searchIcon from "../../icons/searchIcon.svg";
import { FIELDLABELS } from "../../constants/Labels";

const SearchDropdown: React.FC = () => {
  return (
    <div>
      <div className="relative mt-1 2xl:mt-2 rounded 2xl:rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2 2xl:pl-3">
          <img
            src={searchIcon}
            className="w-[10px] h-[10px] xl:w-[15px] xl:h-[15px] 2xl:w-[20px] 2xl:h-[20px]"
          />
        </div>
        <div className="w-[150px] md:w-[250px] xl:w-[450px] 2xl:w-[800px] h-[30px] 2xl:h-[45px]">
          <input
            className="w-[150x] md:w-[250px] xl:w-[450px] 2xl:w-[500px] h-full bg-[#F3F9FB] appearance-none border rounded 2xl:rounded-l-md w-full py-2 2xl:py-2 pl-6 xl:pl-8 2xl:pl-10 pr-2 2xl:pr-3 text-xs 2xl:text-base font-extralight 2xl:font-normal text-metal-grey focus:outline-none focus:shadow-outline
          border border-none"
            id="search"
            type="text"
            placeholder={FIELDLABELS.mainSearch}
          />
        </div>
        <div className="hidden xl:block absolute inset-y-0 right-0 flex items-center xl:border-l 2xl: border-[#EDEDED] xl:rounded-r-md">
          <select
            id="currency"
            name="currency"
            className="bg-[#F3F9FB] w-[80px] xl:w-[150px] 2xl:w-[300px] h-full rounded-r xl:rounded-r-md border-0 py-0 pl-1 2xl:pl-2 pr-3 xl:pr-5 2xl:pr-7 text-xs  2xl:text-base text-gray-500 focus:outline-none focus:shadow-outline"
          >
            <option className="text-gray-500 text-xs 2xl:text-base">
              All Categories
            </option>
            <option className="text-gray-500 text-xs 2xl:text-base">
              USDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSDUSD
            </option>
            <option className="text-gray-500 text-xs 2xl:text-base">
              CADCADCADCAD
            </option>
            <option className="text-gray-500 text-xs 2xl:text-base">
              EUREUREUREUR
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchDropdown;
