import Item9Menu from "../../atomic/Molecules/Item9Menu";
import { motion } from "framer-motion";

const Page2: React.FC = (): JSX.Element => {
  return (
    <motion.div
      className="container mx-auto flex p-10 justify-evenly flex-wrap gap-20"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50, transition: { duration: 0.5 } }}
    >
      <Item9Menu />
    </motion.div>
  );
};

export default Page2;
