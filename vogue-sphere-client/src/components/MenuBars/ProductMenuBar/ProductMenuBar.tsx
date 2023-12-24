import React, { useState } from "react";
import { FIELDLABELS } from "../../../constants/Labels";
import { motion } from "framer-motion";
import ProductSubMenuItems from "./ProductSubMenuItems";
const ProductMenuBar: React.FC = () => {
  const [openPrdctMenuModal, setOpenPrdctMenuModal] = useState(false);
  const [subMenus, setSubMenus] = useState([]);

  const list = [
    {
      menu_name: "Men",
      sub_menus: ["Shirts", "Pants", "Sneakers", "Caps"],
    },
    {
      menu_name: "Women",
      sub_menus: ["Winterwear", "Kurtas & tees", "Dresses & Jumpsuits", "Sarees"],
    },
    {
      menu_name: "Kids",
      sub_menus: ["Clothings", "Shoes", "Watches", "Caps"],
    },
    {
      menu_name: "Sale",
      sub_menus: ["Clothing 50%-70%", "Sunglases 20%-50%", "Bags & Luggage 20%-50%", "Watches 10%-15%"],
    },
  ];

  return (
    <div className="relative hidden xl:flex flex-row space-x-5 justify-center items-center w-full xl:h-[38px] 2xl:h-[43px] xl:py-[8px] 2xl:py-[10px] xl:px-[20px] 2xl:px-[30px] border-b border-[#EDEDED]">
      {list &&
        list.length > 0 &&
        list.slice(0, 10).map((obj) => {
          let { menu_name, sub_menus } = obj;
          return (
            <>
              <div
                className="py-[4px]"
                onMouseOver={() => {
                  setOpenPrdctMenuModal(true);
                  setSubMenus(obj);
                }}
                onMouseOut={() => {
                  setOpenPrdctMenuModal(false);
                }}
              >
                <motion.div
                  initial={openPrdctMenuModal}
                  whileHover={{ scale: 0.97 }}
                  className={
                    subMenus.menu_name === menu_name && openPrdctMenuModal
                      ? " cursor-pointer bg-regal-blue rounded-full border border-[#ffffff] w-auto py-[3px] px-[15px] flex justify-center items-center text-xs 2xl:text-base font-normal 2xl:font-medium text-[#ffffff] focus:outline-none focus:shadow-outline"
                      : "cursor-pointer bg-[#F3F9FB] rounded-full border border-[#ffffff] w-auto py-[3px] px-[15px] flex justify-center items-center text-xs 2xl:text-base font-normal 2xl:font-medium text-[#666666] focus:outline-none focus:shadow-outline"
                  }
                >
                  {menu_name || FIELDLABELS.na}
                </motion.div>
              </div>
              <motion.div
                onMouseOver={() => setOpenPrdctMenuModal(true)}
                onMouseOut={() => setOpenPrdctMenuModal(false)}
                initial={false}
                animate={openPrdctMenuModal ? "open" : "closed"}
                variants={{
                  open: {
                    clipPath: "inset(0% 0% 0% 0% round 10px)",
                    transition: {
                      type: "spring",
                      bounce: 0,
                      duration: 0.9,
                      delayChildren: 0.9,
                      staggerChildren: 0.05,
                    },
                  },
                  closed: {
                    clipPath: "inset(10% 50% 90% 50% round 10px)",
                    transition: {
                      type: "spring",
                      bounce: 0,
                      duration: 0.3,
                    },
                  },
                }}
                className={openPrdctMenuModal ? "block cursor-pointer bg-regal-blue w-[50%] h-48 absolute top-10 left-50 rounded-lg" : "hidden cursor-pointer bg-regal-blue w-[40%] h-48 absolute top-10 left-50 rounded-lg"}
              >
                <ProductSubMenuItems sub_menus={subMenus.sub_menus} />
              </motion.div>
            </>
          );
        })}
    </div>
  );
};

export default ProductMenuBar;
