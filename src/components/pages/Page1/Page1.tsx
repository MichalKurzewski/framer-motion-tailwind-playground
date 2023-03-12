import Item1HoverTap from "../../atomic/Molecules/Item1HoverTap";
import Item2ShapeShift from "../../atomic/Molecules/Item2Shapeshift";
import Item3Opacity from "../../atomic/Molecules/Item3Opacity";
import Item4Toggle90Deg from "../../atomic/Molecules/Item4Toggle90Deg";
import Item5ZoomAndSplash from "../../atomic/Molecules/Item5ZoomAndSplash";
import Item6LoadingSpinner from "../../atomic/Molecules/Item6LoadingSpinner";
import Item7Controlled from "../../atomic/Molecules/Item7Controlled";
import Item8ControlledReducer from "../../atomic/Molecules/Item8ControlledReducer";
import { LayoutGroup, motion } from "framer-motion";

const Page1: React.FC = (): JSX.Element => {
  return (
    <motion.div
      className="container mx-auto flex p-10 justify-evenly flex-wrap gap-20"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50, transition: { duration: 0.5 } }}
    >
      <LayoutGroup id="page1">
        <Item1HoverTap />
        <Item2ShapeShift />
        <Item3Opacity />
        <Item4Toggle90Deg />
        <Item5ZoomAndSplash />
        <Item6LoadingSpinner />
        <Item7Controlled />
        <Item8ControlledReducer />
      </LayoutGroup>
    </motion.div>
  );
};

export default Page1;
