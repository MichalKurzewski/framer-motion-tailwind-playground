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

const Item12OnHoverCircles = ({ numChildren = 6, radius = 100 }) => {
  const coords = getCircleCoords(numChildren, radius);
  const variants: Record<string, Variants> = {
    parent: {
      init: {
        borderRadius: "10%",
      },
      animate: {
        borderRadius: "50%",
        transition: {
          type: "spring",
          bounce: 0,
          duration: 0.7,
          delayChildren: 0.5,
          staggerChildren: 0.15,
        },
      },
    },
  };
  for (let i = 0; i < numChildren; i++) {
    variants["child" + i] = {
      init: {
        opacity: 0,
      },
      animate: {
        opacity: 1,
        y: coords[i].y,
        x: coords[i].x,
      },
    };
  }

  const [isOpen, setIsOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

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
    <motion.div
      className="div-item relative z-auto"
      whileHover="animate"
      variants={variants.parent}
      initial="init"
      animate={isOpen ? "animate" : "init"}
      onMouseEnter={hoverHandler}
      onMouseLeave={() => {
        setIsHovering(false);
      }}
    >
      <div className="absolute-center z-auto txt-color-invert">Radial menu</div>
      <div className="relative top-1/2 flex justify-center items-center">
        {Array.from({ length: numChildren }, (_, i) => (
          <motion.div
            key={"child" + i}
            className="absolute z-auto rounded-full w-14 h-14 bg-red-700 txt-color-invert flex justify-center items-center"
            variants={variants["child" + i]}
            onMouseEnter={hoverHandler}
          >
            {"Item" + (i + 1)}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Item12OnHoverCircles;
