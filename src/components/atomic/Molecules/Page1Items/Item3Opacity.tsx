import { motion, Variants } from "framer-motion";
import Item from "../Item";

const variants: Record<string, Variants> = {
  opacity: {
    initial: { opacity: 1 },
    animate: {
      opacity: 0,
      transition: { duration: 1.5, repeat: Infinity, repeatType: "mirror" },
    },
  },
};
const Item3Opacity = () => {
  return (
    <Item label="Opacity">
      <motion.div
        variants={variants.opacity}
        className="div-item"
        whileHover={{ opacity: 1 }}
        initial="initial"
        animate="animate"
      />
    </Item>
  );
};

export default Item3Opacity;
