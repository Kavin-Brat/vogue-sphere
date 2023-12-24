import { motion } from "framer-motion";

export const CustomBlueButton = ({ onClick, label, className }) => {
  return (
    <motion.button className={className} type="button" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={onClick}>
      {label || ""}
    </motion.button>
  );
};
