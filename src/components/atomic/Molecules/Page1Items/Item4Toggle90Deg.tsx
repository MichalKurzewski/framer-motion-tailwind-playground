import { motion, Variants } from "framer-motion";
import React, { useState } from "react";
import Item from "../Item";

const Item4Toggle90Deg: React.FC = (): JSX.Element => {
  const [isToggled, setIsToggled] = useState<boolean>(false);

  const variants: Record<string, Variants> = {
    item: {
      toggle: { rotate: isToggled ? 0 : 90 },
    },
  };

  return (
    <Item label="Toggle 90deg" onClick={() => setIsToggled(!isToggled)}>
      <motion.div
        className="div-item border-t-4 border-t-slate-600 dark:border-t-slate-400"
        variants={variants.item}
        animate="toggle"
      />
    </Item>
  );
};

export default Item4Toggle90Deg;
