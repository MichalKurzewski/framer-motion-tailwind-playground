import Switcher from "../atomic/Switcher";
import Links from "./Links";
import { motion, Variants } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { useAtom } from "jotai";
import { isMenuToggledAtom } from "../../JotaiStores/menuToggled";

const NavBar:React.FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = useAtom(isMenuToggledAtom);

  const variants: Record<string, Variants> = {
    smallNavbarExplode: {
      closed: {
        clipPath: "circle(0px at calc(100% - 52px) 48px)",
        opacity: [0, 0, 1, 0],
        height: "280px",

        transition: {
          delay: 0.3,
          duration: 1,
          times: [0, 0.1, 0.4, 1],
        },
      },
      open: (height = 380) => ({
        clipPath: `circle(${height * 2}px at calc(100% - 52px) 48px)`,
        opacity: [0, 1, 0],
        height: "280px",
        transition: {
          duration: 1,
          times: [0, 0.6, 1],
        },
        display: "block",
        transitionEnd: {
          display: "none",
        },
      }),
    },

    smallBar: {
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
    },

    init: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    },

    smallBarList: {
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
    },
  };
  const newLocal = (
    <motion.div
      id="smallBar"
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      className="sm:hidden -mt-4"
    >
      <motion.div variants={variants.smallBar}>
        <div className="flex justify-end">
          <div className="flex flex-col gap-2 mr-4">
            <Links variants={variants.smallBarList} />
          </div>
        </div>
      </motion.div>
      <motion.div
        className="absolute origin-center top-0 sm:hidden w-full bg-zinc-300 dark:bg-slate-700"
        variants={variants.smallNavbarExplode}
      ></motion.div>
    </motion.div>
  );
  return (
    <div>
      <div className="flex justify-between p-6 bg-transparent">
        <Switcher />

        <nav className="hidden sm:flex justify-between">
          <Links variants={variants.init} />
        </nav>

        <motion.nav
          className="sm:hidden z-30"
          initial={{ originX: "35%" }}
          animate={isOpen ? "open" : "closed"}
          whileTap={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
        >
          <div className="h-12 w-12  border-color">
            <MenuToggle toggle={() => setIsOpen(!isOpen)} />
          </div>
        </motion.nav>
      </div>

      {newLocal}
    </div>
  );
};

export default NavBar;
