import { Variants } from "framer-motion";
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
    <Item
      variants={variants.opacity}
      label="Opacity"
      whileHover={{ opacity: 1 }}
    />
  );
};

export default Item3Opacity;
