import { motion } from "framer-motion";

const Footer: React.FC = () => {
  const onClickScrollUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="flex justify-center w-full h-full">
      <div className=" w-[80%]">
        <div className="h-[30px] hover:bg-[#F3F9FB] flex justify-center bg-regal-blue text-[#FFFFFF] hover:text-[#666666] font-medium cursor-pointer border border-[#EDEDED]" onClick={onClickScrollUp}>
          Back to top
        </div>
        <div className="bg-[#666666] flex place-content-center content-center justify-between py-12 px-20">
          <div className=" p-2 flex flex-col justify-between">
            <div className="py-2 flex justify-start text-[#FFFFFF] font-medium">1 ITEM CONTENT</div>
            <div className="py-[2px] flex justify-start text-[#FFFFFF] text-xs">2 ITEM CONTENT</div>
            <div className="py-[2px] flex justify-start text-[#FFFFFF] text-xs">3 ITEM CONTENT</div>
            <div className="py-[2px] flex justify-start text-[#FFFFFF] text-xs">4 ITEM CONTENT</div>
            <div className="py-[2px] flex justify-start text-[#FFFFFF] text-xs">5 ITEM CONTENT</div>
          </div>
          <div className=" p-2 flex flex-col justify-between">
            <div className="py-2 flex justify-start text-[#FFFFFF] font-medium">1 ITEM CONTENT</div>
            <div className="py-[2px] flex justify-start text-[#FFFFFF] text-xs">2 ITEM CONTENT</div>
            <div className="py-[2px] flex justify-start text-[#FFFFFF] text-xs">3 ITEM CONTENT</div>
            <div className="py-[2px] flex justify-start text-[#FFFFFF] text-xs">4 ITEM CONTENT</div>
            <div className="py-[2px] flex justify-start text-[#FFFFFF] text-xs">5 ITEM CONTENT</div>
          </div>
          <div className=" p-2 flex flex-col justify-between">
            <div className="py-2 flex justify-start text-[#FFFFFF] font-medium">1 ITEM CONTENT</div>
            <div className="py-[2px] flex justify-start text-[#FFFFFF] text-xs">2 ITEM CONTENT</div>
            <div className="py-[2px] flex justify-start text-[#FFFFFF] text-xs">3 ITEM CONTENT</div>
            <div className="py-[2px] flex justify-start text-[#FFFFFF] text-xs">4 ITEM CONTENT</div>
            <div className="py-[2px] flex justify-start text-[#FFFFFF] text-xs">5 ITEM CONTENT</div>
          </div>
          <div className=" p-2 flex flex-col justify-between">
            <div className="py-2 flex justify-start text-[#FFFFFF] font-medium">1 ITEM CONTENT</div>
            <div className="py-[2px] flex justify-start text-[#FFFFFF] text-xs">2 ITEM CONTENT</div>
            <div className="py-[2px] flex justify-start text-[#FFFFFF] text-xs">3 ITEM CONTENT</div>
            <div className="py-[2px] flex justify-start text-[#FFFFFF] text-xs">4 ITEM CONTENT</div>
            <div className="py-[2px] flex justify-start text-[#FFFFFF] text-xs">5 ITEM CONTENT</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
