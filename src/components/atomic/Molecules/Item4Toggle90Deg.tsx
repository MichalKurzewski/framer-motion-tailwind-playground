import { motion } from "framer-motion";
import { useState } from "react";

const Item4Toggle90Deg = () => {
  const [isToggled, setIsToggled] = useState(false);

  const itemVariants = {
    toggle: { rotate: isToggled ? 0 : 90 },
  };

  return (
    <motion.div
      className="cursor-pointer relative txt-color-invert"
      onClick={() => setIsToggled(!isToggled)}
   
    >
      <motion.div
        className="div-item border-t-4 border-t-slate-600 dark:border-t-slate-400"
        variants={itemVariants}
        animate="toggle"
      ></motion.div>
      <div className="absolute-center ">Toggle 90deg</div>
    </motion.div>
  );
};

export default Item4Toggle90Deg;
