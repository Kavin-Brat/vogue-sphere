import { useState } from "react";
import { motion } from "framer-motion";
import { FIELDLABELS } from "../../../constants/Labels";

const ContentTabNav: React.FC = () => {
  const [openPrdctMenuModal, setOpenPrdctMenuModal] = useState(false);
  const [subMenus, setSubMenus] = useState([]);

  const list = ["Bestsellers", "Recommended for you", "Trending", "Collections", "New arrivals", "New season styles", "Discounted"];

  return (
    <div className="overflow-x-auto">
      <div className="flex flex-row space-x-5 justify-start items-start w-full py-[8px] 2xl:py-[14px] ">
        {list &&
          list.length > 0 &&
          list.slice(0, 7).map((menu_name) => {
            return (
              <>
                <div
                  className="flex-shrink-0 py-[4px]"
                  onMouseOver={() => {
                    setOpenPrdctMenuModal(true);
                    setSubMenus(menu_name);
                  }}
                  onMouseOut={() => {
                    setOpenPrdctMenuModal(false);
                  }}
                >
                  <motion.div
                    initial={openPrdctMenuModal}
                    whileHover={{ scale: 0.97 }}
                    className={
                      subMenus === menu_name && openPrdctMenuModal
                        ? " cursor-pointer bg-regal-blue rounded-full border border-[#ffffff] w-auto py-[3px] px-[15px] flex justify-center items-center text-xs 2xl:text-base font-normal 2xl:font-medium text-[#ffffff] focus:outline-none focus:shadow-outline"
                        : "cursor-pointer bg-[#F3F9FB] rounded-full border border-[#ffffff] w-auto py-[3px] px-[15px] flex justify-center items-center text-xs 2xl:text-base font-normal 2xl:font-medium text-[#666666] focus:outline-none focus:shadow-outline"
                    }
                  >
                    {menu_name || FIELDLABELS.na}
                  </motion.div>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default ContentTabNav;
