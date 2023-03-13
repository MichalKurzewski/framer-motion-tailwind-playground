import { useState } from "react";
import { motion, Variants } from "framer-motion";

const variants: Record<string, Variants> = {
  icon: {
    init: { x: 0, scale: 1.3 },
    animate: { x: -58, scale: 1, transition: { delay: 0.3 } },
  },
  label: {
    init: { display: "none", opacity: 0, x: 0 },
    animate: {
      display: "block",
      opacity: 1,
      x: 18,
      transition: { delay: 0.3 },
    },
  },
};

export interface ILinkProps {
  url: string;
  label: string;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}
const Link: React.FC<ILinkProps> = ({
  url,
  label,
  Icon,
}: ILinkProps): JSX.Element => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      className="relative h-8 font-body w-full hover:underline justify-center flex items-center"
      href={url}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial="init"
      animate={isHovered ? "animate" : "init"}
    >
      <motion.div
        className="absolute w-7 fill-slate-200 dark:fill-slate-800"
        variants={variants.icon}
      >
        <Icon />
      </motion.div>
      <motion.div className="p-3 text-sm" variants={variants.label}>
        {label}
      </motion.div>
    </motion.a>
  );
};

export default Link;
