import { motion, Variants, TargetAndTransition } from "framer-motion";

interface IItemProps {
  children?: string | JSX.Element | JSX.Element[];
  whileHover?: TargetAndTransition;
  label?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement> | undefined;
  variants?: Variants;
}
const Item = (props: IItemProps): JSX.Element => {
  const MotionPart = () => (
    <motion.div
      className="div-item"
      variants={props.variants}
      initial="init"
      animate="animate"
      whileHover={props.whileHover}
    />
  );
  return (
    <div
      className={`relative ${props.onClick ? "cursor-pointer" : ""} ${
        props.className
      }`}
      onClick={props.onClick}
    >
      {(props.variants || props.whileHover) && <MotionPart />}
      {props.children}
      <div className="absolute-center txt-color-invert">{props.label}</div>
    </div>
  );
};

export default Item;
