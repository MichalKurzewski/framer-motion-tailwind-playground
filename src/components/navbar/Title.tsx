import { motion, Variants } from "framer-motion";
import { useLocation } from "react-router-dom";
import useMediaQuery from "../../hooks/useMediaQuery";
import { useAtom } from "jotai";
import { isMenuToggledAtom } from "../../App";

interface TitleText {
  topWord: string;
  middleWord: string;
  bottomWord: string;
}

const Title = ({ topWord, middleWord, bottomWord }: TitleText) => {
  const isXLarge = useMediaQuery("(min-width: 1280px)");
  const isLarge = useMediaQuery("(min-width: 1024px)");
  const isMedium = useMediaQuery("(min-width: 640px)");
  const [isOpen] = useAtom(isMenuToggledAtom);

  const size = isMedium
    ? isLarge
      ? isXLarge
        ? "XLarge"
        : "Large"
      : "Medium"
    : "Small";

  const here = useLocation();
  const isHome = here.pathname === "/Home" || here.pathname === "/";
  const variants: Record<string, Variants> = {
    parent: {
      init: {
        opacity: 1,
        x: isLarge ? 200 : 40,
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
    },

    firstDiv: {
      init: { originX: 0 },
      animate: {
        opacity: 1,
        y: 180,
        scale: 3,
        transition: { duration: 1 },
      },
    },

    secondDiv: {
      init: {},
      animate: {
        marginLeft: "-68px",
        marginRight: "-104px",
        transition: { staggerChildren: 0.05 },
      },
    },

    thirdDiv: {
      init: { originX: "100%" },
      animate: {
        opacity: 1,
        y: 380,
        scale: 3,
        transition: { duration: 1 },
      },
    },
    secondDivLetters: {
      init: {},
      animate: {
        y: 280,
        scale: 3,
        opacity: 0.5,
        transition: { duration: 0.4 },
        transitionEnd: {},
      },
    },
  };
  return (
    <>
      <motion.div
        className={`absolute w-full uppercase h-24 font-head txt-color text-xl sm:text-2xl lg:text-2xl xl:text-4xl transition-all tracking-wide lg:flex ${
          isHome ? "flex " : "hidden "
        } ${isHome && isOpen && size === "Small" ? "mt-48" : ""}`}
      >
        <motion.div
          layout
          variants={variants.parent}
          initial="init"
          animate={isHome ? "animate" : "init"}
          className="flex items-center"
        >
          <motion.div className=" m-1.5 z-20" variants={variants.firstDiv}>
            {topWord}
          </motion.div>
          <motion.div
            className={`${
              isHome ? "-mt-14 xl:mt-0" : ""
            } z-20 m-1.5 whitespace-nowrap flex justify-between w-full`}
            variants={variants.secondDiv}
          >
            {[...middleWord].map((letter: string, index: number) => (
              <motion.div
                key={index}
                variants={variants.secondDivLetters}
                className="whitespace-pre"
              >
                {letter}
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className={`${isHome ? "-mt-32 xl:mt-0" : ""} m-1.5 z-20`}
            variants={variants.thirdDiv}
          >
            {bottomWord}
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Title;
