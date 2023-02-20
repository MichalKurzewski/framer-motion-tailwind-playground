import Switcher from "../atomic/Switcher";
import Links from "./Links";
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./MenuToggle";

const NavBar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  const smallBarShade = {
    open: (height = 380) => ({
      clipPath: `circle(${height * 2}px at calc(100% - 80px) 48px)`,
      opacity: [0, 1, 0],
      height: "450px",
      transition: {
        duration: 1,
        times: [0, 0.6, 1],
      },
    }),
    closed: {
      clipPath: "circle(0px at calc(100% - 80px) 48px)",
      opacity: [0, 0, 1, 0],
      height: "450px",
      transition: {
        delay: 0.3,
        duration: 1,
        times: [0, 0.1, 0.4, 1],
      },
    },
  };

  const smallBar = {
    open: {
      height: "350px",
      transition: {
        duration: 0.5,
      },
    },
    closed: {
      height: "0px",
      transition: {
        delay: 0.7,
        duration: 1,
      },
    },
  };
  return (
    <div className="relative">
      <div className="flex justify-between  p-6">
        <div className="z-10">
          <Switcher />
        </div>
        <div className="uppercase font-head txt-color text-xl lg:text-4xl p-2 tracking-wide hidden md:block">
          Michal's Framer Motion Playground
        </div>
        <nav className="hidden sm:block">
          <Links />
        </nav>
        <motion.nav
          className="sm:hidden z-10"
          animate={isOpen ? "open" : "closed"}
        >
          <div className="h-12 w-12 mr-8 border-color">
            <MenuToggle toggle={() => toggleOpen()} />
          </div>
        </motion.nav>
      </div>
      <div className="sm:hidden">
        <motion.div
          variants={smallBar}
          animate={isOpen ? "open" : "closed"}
        >
          <div>
          <Links />
        </div>
        </motion.div>
        <motion.div
          className="absolute top-0 sm:hidden w-full bg-slate-200 dark:bg-slate-700"
          variants={smallBarShade}
          animate={isOpen ? "open" : "closed"}
        />
      </div>
    </div>
  );
};

export default NavBar;
