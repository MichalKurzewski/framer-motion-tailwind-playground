import { motion } from "framer-motion";
import Item from "./Item";
const Item1HoverTap = () => {
  
  const label = "Hover Tap";
  return (
    <Item label={label}>
      <motion.div
        className="div-item cursor-pointer"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
      />
    </Item>
  );
};

export default Item1HoverTap;
