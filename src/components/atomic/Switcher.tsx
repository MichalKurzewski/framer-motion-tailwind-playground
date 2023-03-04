import { ReactComponent as Sun } from "../../assets/svg/sun.svg";
import { ReactComponent as Moon } from "../../assets/svg/moon.svg";
import { ReactComponent as Rocket } from "../../assets/svg/rocket2.svg";
import useDarkMode from "../../hooks/useDarkMode";
import { motion } from "framer-motion";

export default function Switcher() {
  const { colorTheme, setTheme } = useDarkMode();
  const themeVariants = {
    animate: {
      rotateY: colorTheme === "dark" ? 0 : 180,
    },
  };
  const rocketVariants = {
    init: {
      x: "-70vw",
      opacity: 0,
    },
    animate: {
      x: colorTheme === "light" ? "0vw" : ["0vw", "0.8vw", "-70vw"],
      rotate: colorTheme === "light" ? 0 : [0, 180, 180, 0],
      opacity: colorTheme === "light" ? 1 : [1, 1, 1, 0],
      transition: {
        times: colorTheme === "light" ? [] : [0, 0.3, 0.99, 1],
        duration: 2.5,
        delay: 3,
      },
    },
  };
  return (
    <>
      <motion.button
        id="theme-toggle"
        variants={themeVariants}
        initial="animate"
        animate="animate"
        className="flex justify-start w-36 cursor-pointer"
        onClick={() => {
          setTheme(colorTheme);
        }}
      >
        <motion.div
          className="w-10 h-10 m-1"
          variants={rocketVariants}
          initial="init"
          animate="animate"
        >
          <Rocket className="rotate-45 dark:fill-slate-200 hidden sm:block " />
        </motion.div>
        {colorTheme === "light" && (
          <Moon
            id="moon-icon"
            className=" fill-slate-200 w-8 h-8 m-2 stroke-0"
          />
        )}
        {colorTheme === "dark" && (
          <Sun id="sun-icon" className=" fill-slate-800 w-8 h-8 m-2" />
        )}
      </motion.button>
    </>
  );
}
