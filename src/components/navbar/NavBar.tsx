import Switcher from "../atomic/Switcher";
import Links from "./Links";
import { motion, useCycle, AnimatePresence } from "framer-motion";
import { MenuToggle } from "./MenuToggle";

const NavBar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  const smallNavbarExplodeVariants = {
    closed: {
      clipPath: "circle(0px at calc(100% - 80px) 48px)",
      opacity: [0, 0, 1, 0],
      height: "280px",
      zIndex: 0,
      transition: {
        delay: 0.3,
        duration: 1,
        times: [0, 0.1, 0.4, 1],
      },
    },
    open: (height = 380) => ({
      clipPath: `circle(${height * 2}px at calc(100% - 80px) 48px)`,
      opacity: [0, 1, 0],
      height: "280px",
      zIndex: 0,
      transition: {
        duration: 1,
        times: [0, 0.6, 1],
      },
      display: "block",
      transitionEnd: {
        display: "none",
      },
    }),
  };

  const smallBar = {
    closed: {
      height: "0px",
      transition: {
        delay: 0.7,
        duration: 1,
        staggerChildren: 0.1,
      },
      transitionEnd: {
        display: "none",
      },
    },
    open: {
      display: "block",
      height: "180px",
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.3,
        when: "beforeChildren",
      },
    },
  };

  const initVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const smallBarListVariants = {
    closed: {
      opacity: 0,
      y: -20,
    },
    open: {
      display: "block",
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  return (
    <div>
      <div className="flex justify-between p-6 bg-transparent">
    
          <Switcher />
 

        {/* <div className="uppercase font-head txt-color text-xl lg:text-4xl p-2 tracking-wide hidden md:block">
          Michal's Framer Motion Playground
        </div> */}

        <nav className="hidden sm:flex justify-between">
          <Links variants={initVariants} />
        </nav>

        <motion.nav
          className="sm:hidden z-30"
          initial={{ originX: "35%" }}
          animate={isOpen ? "open" : "closed"}
        >
          <div className="h-12 w-12 mr-8 border-color">
            <MenuToggle toggle={() => toggleOpen()} />
          </div>
        </motion.nav>
      </div>

      <motion.div
        id="smallBar"
        animate={isOpen ? "open" : "closed"}
        className="sm:hidden"
      >
        <motion.div variants={smallBar}>
          <div className="flex justify-end">
            <div className="flex flex-col gap-2 mr-4">
              <Links variants={smallBarListVariants} />
            </div>
          </div>
        </motion.div>
        <motion.div
          className="absolute top-0 sm:hidden w-full bg-slate-200 dark:bg-slate-700"
          variants={smallNavbarExplodeVariants}
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default NavBar;
