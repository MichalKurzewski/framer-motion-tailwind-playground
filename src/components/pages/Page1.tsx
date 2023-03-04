import Item1HoverTap from "../atomic/Item1HoverTap";
import Item2ShapeShift from "../atomic/Item2Shapeshift";
import Item3Opacity from "../atomic/Item3Opacity";
import Item4Toggle90Deg from "../atomic/Item4Toggle90Deg";
import Item5ZoomAndSplash from "../atomic/Item5ZoomAndSplash";
import Item6LoadingSpinner from "../atomic/Item6LoadingSpinner";

const Page1 = () => {
  return (
    <div className="flex justify-evenly flex-wrap gap-20">
      <Item1HoverTap />
      <Item2ShapeShift />
      <Item3Opacity />
      <Item4Toggle90Deg />
      <Item5ZoomAndSplash />
      <Item6LoadingSpinner />
    </div>
  );
};

export default Page1;
