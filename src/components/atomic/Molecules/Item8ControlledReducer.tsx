import { motion, Variants } from "framer-motion";
import ControlPanelReducer from "./ItemControlPanel/ControlPanelReducer";
import { useReducer } from "react";
import Item from "./Item";

export interface State {
  x: number;
  y: number;
  scale: number;
  rotation: number;
  opacity: number;
}

export type Action =
  | { type: "x"; payload: number }
  | { type: "y"; payload: number }
  | { type: "scale"; payload: number }
  | { type: "rotation"; payload: number }
  | { type: "opacity"; payload: number };

export interface ControlConfig {
  min: number;
  max: number;
  step: number;
  name: string;
}

const controlConfigs: { [key in keyof State]: ControlConfig } = {
  x: { min: -100, max: 100, step: 1, name: "X" },
  y: { min: -100, max: 100, step: 1, name: "Y" },
  scale: { min: 0.1, max: 1.5, step: 0.1, name: "Scale" },
  rotation: { min: -180, max: 180, step: 1, name: "Rotation" },
  opacity: { min: 0, max: 1, step: 0.01, name: "Opacity" },
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "x":
      return { ...state, x: action.payload };
    case "y":
      return { ...state, y: action.payload };
    case "scale":
      return { ...state, scale: action.payload };
    case "rotation":
      return { ...state, rotation: action.payload };
    case "opacity":
      return { ...state, opacity: action.payload };
    default:
      throw new Error("Unhandled action type");
  }
};

const initialState = {
  x: 0,
  y: 0,
  scale: 1,
  rotation: 0,
  opacity: 1,
};

const Item8ControlledReducer = (): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const variants: Record<string, Variants> = {
    transformation: {
      animate: {
        x: state.x,
        y: state.y,
        scale: state.scale,
        rotate: state.rotation,
        opacity: state.opacity,
      },
    },
  };

  return (
    <div className="flex justify-between gap-2 ">
      <Item
        additionalStyling="border border-slate-600 dark:border-slate-400 rounded-md relative"
        label="Controlled Element Reducer"
      >
        <motion.div
          className="div-item"
          variants={variants.transformation}
          animate="animate"
        ></motion.div>
      </Item>

      <ControlPanelReducer
        state={state}
        dispatch={dispatch}
        controlConfigs={controlConfigs}
      />
    </div>
  );
};

export default Item8ControlledReducer;
