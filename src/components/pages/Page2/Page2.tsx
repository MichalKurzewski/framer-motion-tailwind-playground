import { LayoutGroup, motion } from "framer-motion";
import React, { Suspense } from "react";
import Item12OnHoverCircles from "../../atomic/Molecules/Page2Items/Item12OnHoverCircles";
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
      <LayoutGroup id="page2">
        <Item6LoadingSpinner />
        <Suspense fallback={<div>Loading...</div>}>
          <Item11Lottie />
        </Suspense>
        <Item12OnHoverCircles/>
      </LayoutGroup>
    </motion.div>
  );
};

export default Page2;
    // function getCircleCoords(
    //   numScopes: number,
    //   radius: number,
    //   centerX: number,
    //   centerY: number
    // ) {
    //   const angle = (2 * Math.PI) / numScopes;
    //   const coords = [];

    //   for (let i = 0; i < numScopes; i++) {
    //     const x = centerX + radius * Math.cos(i * angle);
    //     const y = centerY + radius * Math.sin(i * angle);
    //     coords.push({ x, y });
    //   }

    //   return coords;
    // }
    // const coords = getCircleCoords(5, 100, 0, 0);
    // console.log(coords)