import { useEffect } from "react";
import bgImage1 from "../../assets/img/bg-image1.jpg";

const CategoryCard: React.FC = (props) => {
  const { details } = props;

  const onClick = () => {
    var elem = document.getElementById("description");
    elem.scrollLeft = 0;
  };

  return (
    <div className="w-[150px] h-[200px] mx-2" onMouseOut={onClick}>
      <img src={bgImage1} className="w-[120px] h-[120px] rounded-full cursor-pointer shadow-3xl shadow-lg" />
      <div id="description" className="px-[5px] cursor-pointer overflow-hidden hover:overflow-scroll">
        <div className="font-medium p-[2px] text-black">Green Cotton asdkakshasdkakshasdkakshasdkakshasdkakshasdkaksh</div>
      </div>
    </div>
  );
};

export default CategoryCard;
