
import Switcher from "../atomic/Switcher";
import Links from "./Links";
import { motion, useCycle } from "framer-motion";
import { useRef } from "react";
import { MenuToggle } from "./MenuToggle";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
const NavBar = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);

  return (
    <div className="flex justify-between h-36 p-6">
      <Switcher />
      <div className="uppercase font-head txt-color text-xl lg:text-4xl p-2 tracking-wide hidden md:block">
        Michal's Framer Motion Playground
      </div>
      <nav className="hidden sm:block">
        <Links />
      </nav>
      <motion.nav
        className="sm:hidden"
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom="100vw"
        ref={containerRef}
      >
        <div className="h-12 w-12 mr-8 border-color">
          <MenuToggle toggle={() => toggleOpen()} />
        </div>
        <motion.div className=" h-18  border-2 bg-slate-600" variants={sidebar} />
      </motion.nav>
    </div>
  );
};

export default NavBar;
