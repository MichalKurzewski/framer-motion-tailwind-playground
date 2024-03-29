import React from "react";
import { motion, Variants } from "framer-motion";
import { MouseEventHandler } from "react";

interface PathVariants {
  d?: string;
  variants: Variants;
  transition?: object;
}

export const MenuToggle = ({
  toggle,
}: {
  toggle: MouseEventHandler<HTMLButtonElement>;
}): JSX.Element => (
  <motion.button
    className="w-full h-full flex justify-center items-center"
    onClick={toggle}
  >
    <ToggleButtonPaths />
  </motion.button>
);

const Path = (props: PathVariants) => (
  <motion.path className="stroke-color" strokeLinecap="round" {...props} />
);

const ToggleButtonPaths = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 20 20">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  );
};
