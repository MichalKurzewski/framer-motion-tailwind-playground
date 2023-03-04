import { motion, Variants } from "framer-motion";

const Item5ZoomAndSplash = () => {

  const itemVariants:Variants = {
    animate: {
      scale: [0.6,1,1],
      y: [-40,-40, 0],
      transition: {
        duration:2,
        times: [0,0.9, 1],
        repeat:Infinity,
        repeatType:"mirror"
      },
    },
  };

  return (
    <motion.div className="relative txt-color-invert" drag>
      <motion.div
        className="div-item"
        variants={itemVariants}
        animate="animate"
      ></motion.div>
      <div className="absolute-center ">Zoom Splash</div>
    </motion.div>
  );
};

export default Item5ZoomAndSplash;
