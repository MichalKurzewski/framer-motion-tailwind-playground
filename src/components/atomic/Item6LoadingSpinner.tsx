import { motion, Variants } from "framer-motion";
import { ReactComponent as Rocket } from "../../assets/svg/rocket3.svg";
import { ReactComponent as Moon } from "../../assets/svg/moon-full.svg";

const variants = {
  rocket1: {
    init: {
      originY: 2.5,
      x: "-50%",
      y: "-50%",
      rotate: 237,
    },
    animate: {
      rotate: 597,
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "linear",
      },
    },
  },
  rocket2: {
    init: {
      originY: 2.5,
      x: "-50%",
      y: "-50%",
      rotate: 52,
    },
    animate: {
      rotate: 412,
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "linear",
      },
    },
  },
};
const loading: Variants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "linear",
    },
  },
};
const Item6LoadingSpinner = () => {
  return (
    <motion.div
      className="relative"
      drag
      whileHover={{ opacity: 0.5 }}
      initial={{ scale: 1 }}
    >
      <motion.div className="absolute-center w-40 h-40  " animate="animate">
        <svg className="">
          <path
            className="fill-transparent"
            id="text-path"
            d="
    M 40, 80
    a 40,40 0 0,1 80,0
    a 40,40 0 0,1 -80,0
  "
          />
          <motion.text variants={loading}>
            <textPath
              xlinkHref="#text-path"
              className="font-head dark:fill-slate-200 text-2xl"
            >
              LOADING&emsp;&emsp;LOADING
            </textPath>
          </motion.text>
        </svg>
      </motion.div>
      <Moon className="absolute-center w-20 h-20 dark:fill-slate-200 " />

      <motion.div
        className="w-10 h-8 absolute"
        variants={variants.rocket1}
        initial="init"
        animate="animate"
      >
        <Rocket className="absolute   dark:fill-slate-200 " />
      </motion.div>
      <motion.div
        className="absolute w-10 h-8"
        variants={variants.rocket2}
        initial="init"
        animate="animate"
      >
        <Rocket className="absolute  dark:fill-slate-200 " />
      </motion.div>
    </motion.div>
  );
};

export default Item6LoadingSpinner;
