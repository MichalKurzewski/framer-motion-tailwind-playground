import { motion } from "framer-motion";
import Item from "./Item";
const Item1HoverTap = () => {
  const label = "Hover Tap";
  return (
    <motion.div
      className="cursor-pointer"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 1.1 }}
    >
      <Item label={label} >
        <div className="div-item"/>
      </Item>
    </motion.div>
  );
};

export default Item1HoverTap;
