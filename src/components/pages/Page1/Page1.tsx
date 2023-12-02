import React from "react";
import Item1HoverTap from "../../atomic/Molecules/Page1Items/Item1HoverTap";
import Item2ShapeShift from "../../atomic/Molecules/Page1Items/Item2Shapeshift";
import Item3Opacity from "../../atomic/Molecules/Page1Items/Item3Opacity";
import Item4Toggle90Deg from "../../atomic/Molecules/Page1Items/Item4Toggle90Deg";
import Item5ZoomAndSplash from "../../atomic/Molecules/Page1Items/Item5ZoomAndSplash";
import Item7Controlled from "../../atomic/Molecules/Page1Items/Item7Controlled";
import Item8ControlledReducer from "../../atomic/Molecules/Page1Items/Item8ControlledReducer";
import { LayoutGroup, motion } from "framer-motion";
import Item9Menu from "../../atomic/Molecules/Page1Items/Item9Menu";
import Item10Reorder from "../../atomic/Molecules/Page1Items/Item10Reorder";

const Page1: React.FC = (): JSX.Element => {
  return (
    <motion.div
      className="container mx-auto flex p-10 justify-evenly flex-wrap gap-20"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, x: -50, transition: { duration: 0.5 } }}
    >
      <LayoutGroup id="page1">
        <Item1HoverTap />
        <Item2ShapeShift />
        <Item3Opacity />
        <Item4Toggle90Deg />
        <Item5ZoomAndSplash />
        <Item7Controlled />
        <Item8ControlledReducer />
        <Item9Menu />
        <Item10Reorder />
      </LayoutGroup>
    </motion.div>
  );
};

export default Page1;
