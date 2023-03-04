import { motion, Variants } from "framer-motion";
import { ReactComponent as Rocket } from "../../assets/svg/rocket3.svg";
import { ReactComponent as Moon } from "../../assets/svg/moon-full.svg";
const rocket1: Variants = {
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
};
const rocket2: Variants = {
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
      initial={{ scale: 1.2 }}
    >
      <motion.div className="absolute-center" animate="animate">
        <svg className=" w-[108px] h-[108px]">
          <path
            className="fill-transparent w-22"
            id="text-path"
            d="
    M 20, 56
    a 35,35 0 0,1 70,0
    a 35,35 0 0,1 -70,0
  "
          />
          <motion.text variants={loading}>
            <textPath
              xlinkHref="#text-path"
              className="font-head dark:fill-slate-200 text-xl"
            >
              LOADING&emsp;&emsp; LOADING
            </textPath>
          </motion.text>
        </svg>
      </motion.div>
      <Moon className="absolute-center w-20 h-20 dark:fill-slate-200 " />

      <motion.div
        className="w-10 h-8 absolute"
        variants={rocket1}
        initial="init"
        animate="animate"
      >
        <Rocket className="absolute   dark:fill-slate-200 " />
      </motion.div>
      <motion.div
        className="absolute w-10 h-8"
        variants={rocket2}
        initial="init"
        animate="animate"
      >
        <Rocket className="absolute  dark:fill-slate-200 " />
      </motion.div>
    </motion.div>
  );
};

export default Item6LoadingSpinner;
