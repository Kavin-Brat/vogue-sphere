import CategoryCard from "../Cards/CategoryCard";
import { motion } from "framer-motion";

const ProductCategory: React.FC = () => {
  const list = [
    {
      product_name: "one",
      price: "234234",
    },
    {
      product_name: "two",
      price: "234234",
    },
    {
      product_name: "three",
      price: "234234",
    },
    {
      product_name: "four",
      price: "234234",
    },
    {
      product_name: "five",
      price: "234234",
    },
    {
      product_name: "six",
      price: "234234",
    },
    {
      product_name: "seven",
      price: "234234",
    },
    {
      product_name: "eight",
      price: "234234",
    },
    {
      product_name: "nine",
      price: "234234",
    },
    {
      product_name: "ten",
      price: "234234",
    },
  ];
  return (
    <div className="grid gap-x-[30px] gap-y-6 grid-cols-8 px-8 pt-10 pb-0 bg-[#F3F9FB]">
      {list &&
        list.length > 0 &&
        list.slice(0, 8).map((item) => {
          return <CategoryCard />;
        })}
    </div>
  );
};

export default ProductCategory;
