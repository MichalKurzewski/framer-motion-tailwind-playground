import { motion, Variants } from "framer-motion";

interface IItemProps {
  children?: string | JSX.Element | JSX.Element[];
  whileHover?: any;
  label: string;
  additionalStyling?: string;
  onClick?: React.MouseEventHandler<HTMLElement> | undefined;
  variants?: Variants;
}
const Item = (props: IItemProps): JSX.Element => {
  return (
    <div
      className={`relative ${props.onClick ? "cursor-pointer" : ""} ${
        props.additionalStyling
      }`}
      onClick={props.onClick}
    >
      {props.variants && (
        <motion.div
          className="div-item"
          variants={props.variants}
          initial="init"
          animate="animate"
          whileHover={props.whileHover}
        />
      )}
      {props.children}
      <div className="absolute-center txt-color-invert">{props.label}</div>
    </div>
  );
};

export default Item;
