import { LayoutGroup, motion } from "framer-motion";
import React, { Suspense } from "react";
import Item12OnHoverCircles from "../../atomic/Molecules/Page2Items/Item12OnHoverCircles";
import Item6LoadingSpinner from "../../atomic/Molecules/Page2Items/Item6LoadingSpinner";
import Item14PhoneApp from "../../atomic/Molecules/Page2Items/Item14PhoneApp";
import Item15Numbers from "../../atomic/Molecules/Page2Items/Item15Numbers";

//todo extract first frame from lottie to svg to do a fallback.
const Page2: React.FC = (): JSX.Element => {
  const Item11Lottie = React.lazy(
    () => import("../../atomic/Molecules/Page2Items/Item11Lottie")
  );
  return (
    <motion.div
      className="container mx-auto flex p-10 justify-evenly flex-wrap gap-20 overflow-visible"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, x: -50, transition: { duration: 0.5 } }}
    >
      <div className="container mx-auto flex p-10 justify-evenly flex-wrap gap-20 overflow-visible">
        <LayoutGroup id="page2">
          <Item6LoadingSpinner />
          <Suspense fallback={<div>Loading...</div>}>
            <Item11Lottie />
          </Suspense>
          <Item12OnHoverCircles />
        </LayoutGroup>
      </div>
      <div className="container mx-auto flex p-10 justify-evenly flex-wrap gap-20">
        <Suspense fallback={<div>Loading...</div>}>
          <Item14PhoneApp />
        </Suspense>
        <Item15Numbers />
      </div>
    </motion.div>
  );
};

export default Page2;
