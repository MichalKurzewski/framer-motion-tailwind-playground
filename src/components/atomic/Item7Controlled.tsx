import { useState } from "react";
import { motion } from "framer-motion";
import ControlPanel from "./ControlPanel/ControlPanel";

const Item7Controlled = () => {
  const [x, setX] = useState<number>(0);
  return (
    <div>
      <motion.div
        animate={{ x: x }}
        className="w-10 h-10 bg-slate-500"
      ></motion.div>
      <ControlPanel setX={setX} xValue={x} />
    </div>
  );
};

export default Item7Controlled;
