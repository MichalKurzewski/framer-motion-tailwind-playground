import { motion, Variants } from "framer-motion";

const leftTextVariants: Variants = {
  animate: {
    y:300,
    transition:{
      duration:1
    }
  },
};

const WelcomePage = () => {
  return (
    <motion.div initial="init" animate="animate">
      <div className="flex flex-col">
        <motion.div
          variants={leftTextVariants}
          className="flex absolute top-0 left-0 font-head text-2xl uppercase m-3"
        >
          Welcome To:
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WelcomePage;
