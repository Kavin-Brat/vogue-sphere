import bgImage1 from "../../assets/img/bg-image1.jpg";

const ProductCards: React.FC = () => {
  return (
    <div className="w-[260px] h-[380px]">
      <img src={bgImage1} className="w-[260px] h-[380px] rounded-t-lg" />
      <div className="pt-[5px] pl-[5px] pr-[5px] pb-[15px] bg-regal-blue text-white rounded-b-lg">
        <div className="p-[2px]">Green Cotton Dobby Jacket</div>
        <div className="p-[2px]">MRP$: 1,399</div>
      </div>
    </div>
  );
};

export default ProductCards;
