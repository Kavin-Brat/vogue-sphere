import bgImage2 from "../../assets/img/bg-image2.jpg";
import { motion } from "framer-motion";

const Banner: React.FC = () => {
  const carouselStyles = {
    backgroundImage: `url(${bgImage2})`,
  };

  return <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -10, opacity: 0 }} transition={{ duration: 0.2 }} className="z-0 relative h-[250px] xl:h-[350px] 2xl:h-[450px] w-[100%] bg-no-repeat bg-cover bg-center" style={carouselStyles}></motion.div>;
};

export default Banner;
