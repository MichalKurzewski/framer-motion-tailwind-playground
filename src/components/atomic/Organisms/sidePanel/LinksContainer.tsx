import React from "react";
import { motion, Variants } from "framer-motion";
import Link, { ILinkProps } from "./Link";

interface ILinksContainerProps {
  title: string;
  data: ILinkProps[];
}
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
const LinksContainer = (props: ILinksContainerProps): JSX.Element => (
  <>
    <motion.div
      data-testid="links-text"
      className="py-7 flex justify-center text-slate-200 font-head uppercase text-4xl tracking-wide"
      variants={variants.text}
    >
      {props.title}
    </motion.div>
    <motion.div
      className="border-[0.25px] border-red-300/20"
      variants={variants.border}
    />
    <div className="flex justify-center">
      <div className="w-fit">
        {props.data.map((item: ILinkProps, index: number) => (
          <motion.div
            key={index}
            className="py-1 mt-5 flex justify-center font-head text-lg "
            variants={variants.link}
          >
            <Link {...item} />
          </motion.div>
        ))}
      </div>
    </div>
  </>
);

export default LinksContainer;
