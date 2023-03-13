import Switcher from "../../Molecules/Switcher";
import Links from "./Links";
import { motion, Variants } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { useAtom } from "jotai";
import { isMenuToggledAtom } from "../../../../JotaiStores/menuToggled";
import { SmallNavbar } from "./SmallNavbar";

const variants: Record<string, Variants> = {
  init: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
};

const NavBar: React.FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = useAtom(isMenuToggledAtom);
  return (
    <>
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
      <SmallNavbar />
    </>
  );
};

export default NavBar;
