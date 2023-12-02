import React from "react";
import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

function getCircleCoords(
  numChildren: number,
  radius: number,
  centerX: number = 0,
  centerY: number = 0
) {
  const angle = (2 * Math.PI) / numChildren;
  const coords = [];

  for (let i = 0; i < numChildren; i++) {
    const x = Math.round(centerX + radius * Math.cos(i * angle));
    const y = Math.round(centerY + radius * Math.sin(i * angle));
    coords.push({ x, y });
  }

  return coords;
}
function getVariants(
  coords: Array<{ x: number; y: number }>
): Record<string, Variants> {
  const variants: Record<string, Variants> = {
    parent: {
      init: {
        borderRadius: "10%",
      },
      animate: {
        borderRadius: "50%",
        transition: {
          type: "spring",
          duration: 0.4,
        },
      },
    },
  };

  coords.forEach((coord, i) => {
    variants["child" + i] = {
      init: {
        opacity: 0,
        y: 0,
        x: 0,
      },
      animate: {
        opacity: 1,
        y: coord.y,
        x: coord.x,
      },
    };
  });

  return variants;
}
interface IHoverCirclesProps {
  initNumberOfChildren?: number;
  offset?: number;
}
const Item12OnHoverCircles: React.FC<IHoverCirclesProps> = ({
  initNumberOfChildren = 4,
  offset = 125,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [numberOfChildren, setNumberOfChildren] =
    useState(initNumberOfChildren);
  const coords = getCircleCoords(numberOfChildren, offset);
  const [variants, setVariants] = useState(getVariants(coords));

  useEffect(() => {
    const newCoords = getCircleCoords(numberOfChildren, offset);
    setVariants(getVariants(newCoords));
  }, [numberOfChildren, offset]);

  const hoverHandler = () => {
    setIsOpen(true);
    setIsHovering(true);
  };

  useEffect(() => {
    if (isOpen && !isHovering) {
      const id = setTimeout(() => setIsOpen(false), 3000);
      return () => clearTimeout(id);
    }
  }, [isOpen, isHovering]);

  return (
    <div className="h-32">
      <motion.div
        className="div-item relative z-auto"
        variants={variants.parent}
        initial="init"
        animate={isOpen ? "animate" : "init"}
        onMouseEnter={hoverHandler}
        onClick={hoverHandler}
        onMouseLeave={() => {
          setIsHovering(false);
        }}
      >
        <div className="absolute-center txt-color-invert">Radial menu</div>

        <div className="relative top-1/2 flex justify-center items-center">
          {Array.from({ length: numberOfChildren }, (_, i) => (
            <motion.div
              key={"child" + i}
              initial="init"
              animate={isOpen ? "animate" : "init"}
              className="absolute z-40 backdrop-blur-sm rounded-full w-20 h-20 bg-red-600/20 dark:bg-red-300/60 txt-color-invert flex justify-center items-center cursor-pointer"
              variants={variants["child" + i]}
              whileHover={{
                scale: 1.2,
              }}
              whileTap={{ scale: 0.8 }}
            >
              {"Item" + (i + 1)}
            </motion.div>
          ))}
        </div>
      </motion.div>
      <div className="flex justify-center">
        <input
          className="w-24 cursor-pointer accent-slate-500"
          onMouseEnter={hoverHandler}
          onMouseLeave={() => {
            setIsHovering(false);
          }}
          type="range"
          min={1}
          max={10}
          step={1}
          onChange={(e) => setNumberOfChildren(+e.target.value)}
          value={numberOfChildren}
        />
      </div>
    </div>
  );
};

export default Item12OnHoverCircles;
