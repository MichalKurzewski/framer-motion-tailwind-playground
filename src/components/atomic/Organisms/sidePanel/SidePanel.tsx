import { motion, Variants } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import useOnClickOutside from "../../../../hooks/useOnClickOutside";
import Link, { ILinkProps } from "./Link";
import { ReactComponent as Home } from "../../../../assets/svg/home.svg";
import { ReactComponent as GitHub } from "../../../../assets/svg/github.svg";
import LinksContainer from "./LinksContainer";

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
  const links:  ILinkProps[] = [
    {
      testId: "link-Codeng.co.uk",
      url: "https://codeng.co.uk",
      label: "Codeng.co.uk",
      Icon: Home,
    },
    {
      testId: "link-Github repo",
      url: "https://github.com/MichalKurzewski/framer-motion-tailwind-playground",
      label: "Github repo",
      Icon: GitHub,
    },
  ];

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
      <LinksContainer title="Links" data={links} />
    </motion.div>
  );
};

export default SidePanel;
