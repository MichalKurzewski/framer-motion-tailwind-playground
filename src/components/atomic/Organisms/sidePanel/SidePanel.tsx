import { motion, Variants } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import useOnClickOutside from "../../../../hooks/useOnClickOutside";
import Link, { ILinkProps } from "./Link";
import { ReactComponent as Home } from "../../../../assets/svg/home.svg";
import { ReactComponent as GitHub } from "../../../../assets/svg/github.svg";

const variants: Record<string, Variants> = {
  sidePanel: {
    init: {
      backgroundColor: "rgb(220 18 38,0.6)",
      width: 60,
    },
    animate: {
      backgroundColor: "rgb(220 38 38,0.8)",
      width: 160,
      cursor: "default",
    },
  },
  border: {
    init: {
      opacity: 0,
      originX: 0,
    },
    animate: {
      opacity: 1,
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

const SidePanel: React.FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
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
  const sidepanelHoverHandler = () => {
    setIsOpen(true);
    setIsHovering(true);
  };

  useEffect(() => {
    if (isOpen && !isHovering) {
      const id = setTimeout(() => setIsOpen(false), 3000);
      return () => clearTimeout(id);
    }
  }, [isOpen, isHovering]);

  return (
    <motion.div
      ref={ref}
      className="side-panel"
      variants={variants.sidePanel}
      initial="init"
      animate={isOpen ? "animate" : "init"}
      onMouseEnter={sidepanelHoverHandler}
      onMouseLeave={() => {
        setIsHovering(false);
      }}
    >
      <motion.div
        className="px-4 py-7 flex justify-center font-head uppercase text-4xl tracking-wide"
        variants={variants.text}
      >
        Links
      </motion.div>
      <motion.div
        className="border-[0.25px] border-red-300/20"
        variants={variants.border}
      />
      <div className="flex justify-center">
        <div className="w-fit">
          <motion.div
            className="py-1 mt-5 flex justify-center font-head uppercase text-lg "
            variants={variants.link}
          >
            <Link {...links.home} />
          </motion.div>
          <motion.div
            className="p-4 flex justify-center font-head uppercase text-lg "
            variants={variants.link}
          >
            <Link {...links.github} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default SidePanel;
