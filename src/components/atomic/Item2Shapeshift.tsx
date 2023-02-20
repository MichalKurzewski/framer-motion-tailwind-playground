import { motion,  Variants } from "framer-motion";

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
    <motion.div className="relative" drag>
      <div className="absolute-center bg- z-10 txt-color-invert">
        Frames Shapeshift
      </div>
      <motion.div
        className="div-item"
        variants={motionVariants}
        animate="animate"
      />
    </motion.div>
  );
};

export default Item2ShapeShift;
