import { motion } from "framer-motion";
const Item3Opacity = () => {
  return (
    <motion.div
      className="relative div-item"
      whileHover={{ opacity: 1 }}
      initial={{opacity:1}}
      animate={{
        opacity: 0,
        transition: { duration: 1.5, repeat: Infinity, repeatType: "mirror" },
      }}
    >
      <div className="absolute-center txt-color-invert">Opacity</div>
    </motion.div>
  );
};

export default Item3Opacity;
