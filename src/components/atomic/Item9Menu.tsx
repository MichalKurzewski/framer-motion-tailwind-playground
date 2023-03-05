import { useState } from "react";
import { motion, Variants } from "framer-motion";

//to stagger children animate and init must be the same and you supply only variants to the Elements
const itemVariants: Variants = {
  animate: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  init: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const Item9Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.nav animate={isOpen ? "animate" : "init"} className="menu">
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
        className="w-fit bg-slate-200 dark:bg-slate-600 p-4"
        variants={{
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
        }}
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
      <motion.li variants={itemVariants}>Item 1 </motion.li>
      <motion.li variants={itemVariants}>Item 2 </motion.li>
      <motion.li variants={itemVariants}>Item 3 </motion.li>
      <motion.li variants={itemVariants}>Item 4 </motion.li>
      <motion.li variants={itemVariants}>Item 5 </motion.li>
    </div>
  );
};
