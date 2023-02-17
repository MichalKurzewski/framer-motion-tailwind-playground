import { motion } from "framer-motion";
const Item1HoverTap = () => {
  return (
    <div>
      <motion.div
        className="relative div-item cursor-pointer"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
      >
        <div className="absolute-center txt-color-invert">Hover Tap</div>
      </motion.div>
    </div>
  );
};

export default Item1HoverTap;
