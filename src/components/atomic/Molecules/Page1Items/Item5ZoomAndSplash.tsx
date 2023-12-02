import React from "react";
import { Variants } from "framer-motion";
import Item from "../Item";

const Item5ZoomAndSplash = () => {
  const itemVariants: Variants = {
    animate: {
      scale: [0.6, 1, 1],
      y: [-40, -40, 0],
      transition: {
        duration: 2,
        times: [0, 0.91, 1],
        repeat: Infinity,
        repeatType: "mirror",
      },
    },
  };

  return <Item label="Zoom Splash" variants={itemVariants} />;
};

export default Item5ZoomAndSplash;
