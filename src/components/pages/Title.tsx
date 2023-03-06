import { motion, Variants } from "framer-motion";
import { useLocation } from "react-router-dom";
import useMediaQuery from "../../hooks/useMediaQuery";
const Title = () => {
  const isXLarge = useMediaQuery("(min-width: 1280px)");
  const isLarge = useMediaQuery("(min-width: 1024px)");
  const here = useLocation();
  const isHome = here.pathname === "/Home" || here.pathname === "/";

  const parentVariants: Variants = {
    init: {
      x: 0,
      justifyContent: "start",
      transition: {},
    },

    animateSmall: {
      x: 0,
      width: "100%",
      paddingLeft: "0px",
      justifyContent: "space-between",
      transition: {
        when: "afterChildren",
        duration: 0.7,
        //  delay: 0.5,
        // delayChildren: 2,
        staggerChildren: 0.2,
      },
      //   transitionEnd: {},
    },
    animateLarge: {
      x: 0,
      width: "100%",
      paddingLeft: "0px",
      justifyContent: "space-between",
      transition: {
        when: "afterChildren",
        duration: 0.5,
        // delay: 0.5,
        // delayChildren: 2,
        staggerChildren: 0.2,
      },
      //   transitionEnd: {},
    },
    animateXLarge: {
      x: 0,
      width: "100%",
      paddingLeft: "0px",
      justifyContent: "space-between",
      transition: {
        when: "afterChildren",
        duration: 0.5,
        // delay: 0.5,
        // delayChildren: 2,
        staggerChildren: 0.2,
      },
      //   transitionEnd: {},
    },
  };

  const firstDivVariants: Variants = {
    init: { originX: 0 },

    animateSmall: {
      opacity: 1,
      y: 180,
      scale: 2,
      transition: { duration: 1 },
    },
    animateLarge: {
      y: 180,
      scale: 3,
      transition: { duration: 1 },
    },
    animateXLarge: {
      y: 200,
      scale: 3,
      transition: { duration: 1 },
    },
  };

  const secondDivVariants: Variants = {
    init: {},
    animateSmall: {
      opacity: 1,
      y: 220,
      scale: 2,
      transition: { duration: 1 },
    },
    animateLarge: {
      y: 250,
      scale: 3,
      transition: { duration: 1 },
    },
    animateXLarge: {
      y: 320,
      scale: 3,
      transition: { duration: 1 },
    },
  };

  const thirdDivVariants: Variants = {
    init: { originX: "100%" },
    animateSmall: {
      opacity: 1,
      y: 260,
      scale: 2,
      transition: { duration: 1 },
    },
    animateLarge: {
      y: 320,
      scale: 3,
      transition: { duration: 1 },
    },
    animateXLarge: {
      originX: "100%",
      y: 440,
      scale: 3,
      transition: { duration: 1 },
    },
  };
  console.log(
    isLarge ? (isXLarge ? "animateXLarge" : "animateLarge") : "animateSmall"
  );
  return (
    <>
      <motion.div
        className={`absolute w-full uppercase h-24 font-head txt-color lg:text-2xl xl:text-4xl transition-all tracking-wide lg:flex ${
          isHome ? "" : "hidden"
        }`}
      >
        <motion.div
          layout
          variants={parentVariants}
          initial="init"
          animate={
            isHome
              ? isLarge
                ? isXLarge
                  ? "animateXLarge"
                  : "animateLarge"
                : "animateSmall"
              : "init"
          }
          className="flex items-center"
        >
          <motion.div className=" m-1.5 z-20" variants={firstDivVariants}>
            Michal's
          </motion.div>
          <motion.div
            className=" m-1.5  z-20 whitespace-nowrap"
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
