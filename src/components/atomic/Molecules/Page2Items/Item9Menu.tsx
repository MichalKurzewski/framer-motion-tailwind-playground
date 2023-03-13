import { useState } from "react";
import { motion, Variants } from "framer-motion";

//to stagger children animate and init must be the same and you supply only variants to the Elements
const variants: Record<string, Variants> = {
  item: {
    animate: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    init: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  },
  ul: {
    animate: {
      clipPath: "inset(0% 0% 0% 0% round 10px)",
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.7,
        delayChildren: 0.5,
        staggerChildren: 0.1,
      },
    },
    init: {
      clipPath: "inset(10% 50% 90% 50% round 10px)",
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.3,
      },
    },
  },
};
//todo instead hardcoded divs
const initialItems = ["Item 1", "Item 2", "Item 3", "Item 4"];

const Item9Menu = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.nav animate={isOpen ? "animate" : "init"} className="div-item p-2">
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex gap-2 font-head text-xl"
      >
        Menu
        <motion.div
          variants={{
            animate: { rotate: 180 },
            init: { rotate: 0 },
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
        >
          <svg width="15" height="15" viewBox="0 0 20 20">
            <path
              className=" fill-slate-600 dark:fill-slate-200"
              d="M0 7 L 20 7 L 10 16"
            />
          </svg>
        </motion.div>
      </motion.button>
      <motion.ul
        className="w-full bg-slate-100/10 dark:bg-slate-600/10 backdrop-blur-md p-4 border-[0.5px] rounded-xl shadow-md"
        variants={variants.ul}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        <ListItems />
      </motion.ul>
    </motion.nav>
  );
};

export default Item9Menu;

const ListItems = () => {
  return (
    <div>
      <motion.li variants={variants.item}>Item 1 </motion.li>
      <motion.li variants={variants.item}>Item 2 </motion.li>
      <motion.li variants={variants.item}>Item 3 </motion.li>
      <motion.li variants={variants.item}>Item 4 </motion.li>
    </div>
  );
};
