import { useState } from "react";
import { Reorder, useMotionValue } from "framer-motion";
import { useRaisedShadow } from "../../../hooks/useRaisedShadow";
import Item from "./Item";

const initialItems = ["Item 1", "Item 2", "Item 3", "Item 4"];

const Item10Reorder = () => {
  const [items, setItems] = useState(initialItems);
  return (
    <Item label="">
      <Reorder.Group
        axis="y"
        onReorder={setItems}
        values={items}
        className="p-2 cursor-pointer  div-item"
      >
        {items.map((item) => (
          <ListItem key={item} item={item} />
        ))}
      </Reorder.Group>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 rotate-90 txt-color-invert">
        Reorder
      </div>
    </Item>
  );
};
interface Props {
  item: string;
}

const ListItem = ({ item }: Props) => {
  const y = useMotionValue(0);
  const boxShadow = useRaisedShadow(y);

  return (
    <Reorder.Item
      value={item}
      id={item}
      style={{ boxShadow, y }}
      className="p-0.5 rounded-sm"
    >
      <div>{item}</div>
    </Reorder.Item>
  );
};

export default Item10Reorder;
