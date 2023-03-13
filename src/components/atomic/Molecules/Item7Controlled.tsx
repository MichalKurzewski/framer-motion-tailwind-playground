import { useState } from "react";
import { motion } from "framer-motion";
import ControlPanel from "./ControlPanel/ControlPanel";

const Item7Controlled = (): JSX.Element => {
  //try useReducer
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);
  const [scale, setScale] = useState<number>(1);
  const [rotation, setRotation] = useState<number>(0);

  const data = [
    {
      name: "X",
      set: setX,
      value: x,
      min: -100,
      max: 100,
      step: 1,
    },
    {
      name: "Y",
      set: setY,
      value: y,
      min: -100,
      max: 100,
      step: 1,
    },
    {
      name: "Scale",
      set: setScale,
      value: scale,
      min: 0.1,
      max: 1.5,
      step: 0.1,
    },
    {
      name: "Rotation",
      set: setRotation,
      value: rotation,
      min: -180,
      max: 180,
      step: 1,
    },
  ];
  return (
    <div className="flex justify-between gap-2 ">
      <div className="border border-slate-600 dark:border-slate-400 rounded-md relative">
        <motion.div
          animate={{ x: x, y: y, scale: scale, rotate: rotation }}
          className="div-item"
        ></motion.div>
        <div className="absolute-center txt-color-invert">
          Controlled Element
        </div>
      </div>

      <ControlPanel data={data} />
    </div>
  );
};

export default Item7Controlled;
