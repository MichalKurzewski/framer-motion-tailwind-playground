import { motion } from "framer-motion";
import PicturesPresentation from "./picturesPresentation/PicturesPresentation";

const HomePage: React.FC = (): JSX.Element => {
  return (
    <>
      <motion.div
        className="mt-14 sm:mt-10 lg:mt-10 xl:mt-6 font-head text-2xl uppercase m-1.5"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
        exit={{ opacity: 0, x: -50, transition: { duration: 0.5 } }}
      >
        Welcome To:
      </motion.div>
      <div>
        <PicturesPresentation/>
      </div>
    </>
  );
};

export default HomePage;
