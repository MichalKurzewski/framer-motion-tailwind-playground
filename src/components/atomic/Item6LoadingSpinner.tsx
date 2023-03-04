import { animate, motion, Variants } from "framer-motion";
import { ReactComponent as Rocket } from "../../assets/svg/rocket3.svg";
import { ReactComponent as Moon } from "../../assets/svg/moon-full.svg";
const rocket1: Variants = {
  init: {
    originY: 2.1,
    x: "-50%",
    y: "-50%",
    // originX: -2,
    rotate: 180,
  },
  animate: {
    rotate: 540,
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "linear",
    },
  },
};
const rocket2: Variants = {
  init: {
    originY: 2.1,
    x: "-50%",
    y: "-50%",
    rotate: 0,
  },
  animate: {
    rotate: 360,
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "linear",
    },
  },
};
const loading: Variants = {
//   init: {
//     originY: 2.1,
//     x: "-50%",
//     y: "-50%",
//     rotate: 0,
//   },
  animate: {
    rotate: 360,
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "linear",
    },
  },
};
const Item6LoadingSpinner = () => {
  return (
    <motion.div className="relative" drag whileHover={{ opacity: 0.5 }}>
      <motion.div
        className="absolute-center"
        // variants={loading}
        // initial="init"
        animate="animate"
      >
        <svg className=" w-[108px] h-[108px]">
          <path
            className="fill-transparednt w-22"
            id="text-path"
            d="
    M 20, 56
    a 35,35 0 0,1 70,0
    a 35,35 0 0,1 -70,0
  "
          />
          <text>
            <textPath xlinkHref="#text-path" className="font-head text-2xl">
              LOADING
            </textPath>
          </text>
          {/* <text width="600">
            <textPath xlinkHref="#text-path" className="font-head text-2xl ">
              LOADING
            </textPath>
          </text> */}
        </svg>
      </motion.div>
      <Moon className="absolute-center w-20 h-20 dark:fill-slate-200 " />

      <motion.div
        className="w-6 h-10 absolute"
        variants={rocket1}
        initial="init"
        animate="animate"
      >
        <Rocket className="absolute   dark:fill-slate-200 " />
      </motion.div>
      <motion.div
        className="absolute w-6 h-10"
        variants={rocket2}
        initial="init"
        animate="animate"
      >
        <Rocket className="absolute  dark:fill-slate-200 " />
      </motion.div>

      {/* <div className="absolute-center font-head uppercase text-4xl">
        Loading
      </div> */}
    </motion.div>
  );
};

export default Item6LoadingSpinner;
