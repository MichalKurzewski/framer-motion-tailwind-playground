import { motion } from "framer-motion";
import React, { Suspense } from "react";
import Item6LoadingSpinner from "../../atomic/Molecules/Page2Items/Item6LoadingSpinner";

//todo extract first frame from lottie to svg to do a fallback.
const Page2: React.FC = (): JSX.Element => {
  const Item11Lottie = React.lazy(
    () => import("../../atomic/Molecules/Page2Items/Item11Lottie")
  );
  return (
    <motion.div
      className="container mx-auto flex p-10 justify-evenly flex-wrap gap-20"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, x: -50, transition: { duration: 0.5 } }}
    >
      <Item6LoadingSpinner />
      <Suspense fallback={<div>Loading...</div>}>
        <Item11Lottie />
      </Suspense>
    </motion.div>
  );
};

export default Page2;
