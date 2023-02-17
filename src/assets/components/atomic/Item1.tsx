import { motion } from "framer-motion";
const Item1 = () => {
    return (
      <motion.div
        className="w-32 h-32 rounded-md bg-slate-500"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
      ></motion.div>
    );
}
 
export default Item1;