import bgImage1 from "../../assets/img/bg-image1.jpg";

const ProductCards: React.FC = (props) => {
  const { details } = props;
  return (
    <div className="w-[265px] h-auto">
      <img src={bgImage1} className="w-[265px] h-[380px] rounded-t-lg cursor-pointer" />
      <div className="pt-[5px] pl-[5px] pr-[5px] pb-[15px] rounded-b-lg shadow-3xl shadow-lg bg-[#FFFFFF] cursor-pointer">
        <div className="font-medium p-[2px] text-black">Green Cotton Dobby Jacket</div>
        <div className="font-medium p-[2px] text-green">MRP$: <span>1,399</span></div>
      </div>
    </div>
  );
};

export default ProductCards;
