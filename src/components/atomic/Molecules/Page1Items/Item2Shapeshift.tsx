import { Variants } from "framer-motion";
import Item from "../Item";

const motionVariants: Variants = {
  animate: {
    scale: [0.75, 1.3, 1.3, 1, 1, 1, 1, 1],
    scaleX: [1, 1, 1, 1, 1, 1.25, 0.75, 1],
    scaleY: [1, 1, 1, 1, 1, 0.75, 1.25, 1],
    rotate: [0, 0, 270, 270, 0, 0, 0, 0],
    borderRadius: ["20%", "10%", "50%", "50%", "20%", "0%", "0%", "20%"],
    transition: { duration: 8, repeat: Infinity, repeatType: "mirror" },
  },
};
const Item2ShapeShift = () => {
  return (
    <Item variants={motionVariants} label="Frames Shapeshift"/>
  );
};

export default Item2ShapeShift;
