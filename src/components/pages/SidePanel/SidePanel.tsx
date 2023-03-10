import { motion, Variants } from "framer-motion";
import { useState, useRef } from "react";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import Link, { ILinkProps } from "./Link";
import { ReactComponent as Home } from "../../../assets/svg/home.svg";
import { ReactComponent as GitHub } from "../../../assets/svg/github.svg";
const variants: Record<string, Variants> = {
  sidePanel: {
    init: {
      opacity: 0.4,
      width: 60,
    },
    animate: {
      width: 220,
      opacity: 0.8,
      cursor: "default",
    },
  },
  text: {
    init: {
      scale: 0.6,
      rotate: -90,
    },
    animate: {
      scale: 1,
      rotate: 0,
    },
  },
  link: {
    init: {
      rotate: 0,
      display: "none",
      opacity: 0,
    },
    animate: {
      display: "block",
      opacity: 1,
    },
  },
};
const SidePanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const handleClickOutside = () => {
    setIsOpen(false);
  };
  useOnClickOutside(ref, handleClickOutside);
  const links: Record<string, ILinkProps> = {
    home: {
      url: "https://codeng.co.uk",
      label: "Codeng.co.uk",
      Icon: Home,
    },
    github: {
      url: "https://github.com/MichalKurzewski/framer-motion-tailwind-playground",
      label: "Github repo",
      Icon: GitHub,
    },
  };
  return (
    <motion.div
      drag
      ref={ref}
      className="z-40 px-1 py-4 absolute shadow-xl shadow-zinc-400 dark:shadow-slate-900 origin-left left-0 top-1/2 -translate-y-1/2 txt-color-invert h-[240px] bg-red-600 flex flex-col rounded-r-sm border-1 border-red-900 cursor-pointer"
      variants={variants.sidePanel}
      initial="init"
      animate={isOpen ? "animate" : "init"}
      onMouseEnter={() => setIsOpen(true)}
    >
      <motion.div
        className="p-6 flex justify-center font-head uppercase text-4xl "
        variants={variants.text}
      >
        Links
      </motion.div>
      <motion.div
        className="p-2 flex justify-center font-head uppercase text-lg "
        variants={variants.link}
      >
        <Link {...links.home} />
      </motion.div>
      <motion.div
        className="p-2 flex justify-center font-head uppercase text-lg "
        variants={variants.link}
      >
        <Link {...links.github} />
      </motion.div>
    </motion.div>
  );
};

export default SidePanel;
