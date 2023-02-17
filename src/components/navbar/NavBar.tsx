import Switcher from "../atomic/Switcher";
import Links from "./Links";
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import useDarkMode from "../../hooks/useDarkMode";

const NavBar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  const smallBar = {
    open: (height = 380) => ({
      clipPath: `circle(${height * 2}px at 100% 0%)`,
      opacity: 0,
      height: "400px",
      transition: {
        duration: 1,
      },
    }),
    closed: {
      clipPath: "circle(0px at 100% 0%)",
      opacity: 1,
      height: "0px",
      transition: {
        delay: 0.5,
        duration: 1,
      },
    },
  };
  return (
    <div>
      <div className="flex justify-between  p-6">
        <Switcher />
        <div className="uppercase font-head txt-color text-xl lg:text-4xl p-2 tracking-wide hidden md:block">
          Michal's Framer Motion Playground
        </div>
        <nav className="hidden sm:block">
          <Links />
        </nav>
        <motion.nav className="sm:hidden" animate={isOpen ? "open" : "closed"}>
          <div className="h-12 w-12 mr-8 border-color">
            <MenuToggle toggle={() => toggleOpen()} />
          </div>
        </motion.nav>
      </div>
      <motion.div
        animate={isOpen ? "open" : "closed"}
        className="sm:hidden w-full bg-slate-200 dark:bg-slate-700"
        variants={smallBar}
      />
    </div>
  );
};

export default NavBar;
