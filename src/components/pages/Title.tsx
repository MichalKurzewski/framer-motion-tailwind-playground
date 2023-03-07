import { motion, Variants } from "framer-motion";
import { useLocation } from "react-router-dom";
import useMediaQuery from "../../hooks/useMediaQuery";
const Title = () => {
  const isXLarge = useMediaQuery("(min-width: 1280px)");
  const isLarge = useMediaQuery("(min-width: 1024px)");
  const isMedium = useMediaQuery("(min-width: 640px)");

  const size = isMedium
    ? isLarge
      ? isXLarge
        ? "XLarge"
        : "Large"
      : "Medium"
    : "Small";

  const here = useLocation();
  const isHome = here.pathname === "/Home" || here.pathname === "/";

  const parentVariants: Variants = {
    init: {
      x: isLarge?200:40,
      justifyContent: "start",
      transition: {},
    },

    animate: {
      x: 0,
      width: "100%",
      justifyContent: "space-between",
      transition: {
        when: "afterChildren",
        duration: 0.7,
        staggerChildren: 0.2,
      },
      transitionEnd: {},
    },
  };

  const firstDivVariants: Variants = {
    init: { originX: 0 },
    animate: {
      opacity: 1,
      y: 300,
      scale: 3,
      transition: { duration: 1 },
    },
  };

  const secondDivVariants: Variants = {
    init: { originX: "45%" },
    animate: {
      opacity: 1,
      y: 400,
      scale: 3,
      transition: { duration: 1 },
    },
  };

  const thirdDivVariants: Variants = {
    init: { originX: "100%" },
    animate: {
      opacity: 1,
      y: 500,
      scale: 3,
      transition: { duration: 1 },
    },
  };
  console.log(
    isMedium
      ? isLarge
        ? isXLarge
          ? "animateXLarge"
          : "animateLarge"
        : "animateMedium"
      : "animateSmall"
  );
  return (
    <>
      <motion.div
        className={`absolute w-full uppercase h-24 font-head txt-color text-xl sm:text-2xl lg:text-2xl xl:text-4xl transition-all tracking-wide lg:flex ${
          isHome ? "flex" : "hidden"
        }`}
      >
        <motion.div
          layout
          variants={parentVariants}
          initial="init"
          animate={isHome ? "animate" : "init"}
          className="flex items-center"
        >
          <motion.div className=" m-1.5 z-20" variants={firstDivVariants}>
            Michal's
          </motion.div>
          <motion.div
            className=" m-1.5 z-20 whitespace-nowrap"
            variants={secondDivVariants}
          >
            Framer Motion
          </motion.div>
          <motion.div className=" m-1.5 z-20" variants={thirdDivVariants}>
            Playground
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Title;
