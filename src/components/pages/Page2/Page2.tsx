import Item9Menu from "../../atomic/Molecules/Page2Items/Item9Menu";
import { motion } from "framer-motion";
import Item10Reorder from "../../atomic/Molecules/Page2Items/Item10Reorder";
import Item11Lottie from "../../atomic/Molecules/Page2Items/Item11Lottie";

const Page2: React.FC = (): JSX.Element => {
  return (
    <motion.div
      className="container mx-auto flex p-10 justify-evenly flex-wrap gap-20"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, x: -50, transition: { duration: 0.5 } }}
    >
      <Item9Menu />
      <Item10Reorder />
      <Item11Lottie />
    </motion.div>
  );
};

export default Page2;
