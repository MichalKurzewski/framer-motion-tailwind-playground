import { motion } from "framer-motion";
import ControlPanelReducer from "./ControlPanel/ControlPanelReducer";
import { useReducer } from "react";

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
  x: 50,
  y: 50,
  scale: 1,
  rotation: 0,
  opacity: 1,
};

const Item8ControlledReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="flex justify-between gap-2 ">
      <div className="w-[129px] h-[130px] border border-slate-100 rounded-md relative">
        <motion.div
          drag
          animate={{
            x: state.x,
            y: state.y,
            scale: state.scale,
            rotate: state.rotation,
            opacity: state.opacity,
          }}
          className="div-item w-10 h-10 bg-slate-500"
        ></motion.div>
        <div className="absolute-center txt-color-invert">
          Controlled Element Reducer
        </div>
      </div>

      <ControlPanelReducer
        state={state}
        dispatch={dispatch}
        controlConfigs={controlConfigs}
      />
    </div>
  );
};

export default Item8ControlledReducer;
