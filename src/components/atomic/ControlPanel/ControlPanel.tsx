import { Dispatch, SetStateAction } from "react";

interface IInputs {
  setX?: Dispatch<SetStateAction<number>>;
  xValue?: number;
  setY?: Dispatch<SetStateAction<number>>;
  setScale?: Dispatch<SetStateAction<number>>;
  setRotate?: Dispatch<SetStateAction<number>>;
  setOpacity?: Dispatch<SetStateAction<number>>;
}

const ControlPanel = (props: IInputs) => {
  return (
    <div>
      {props.setX && (
        <input
          min={0}
          max={100}
          step={1}
          type="range"
          value={props.xValue}
          onChange={(e) => props.setX(Number(e.target.value))}
        />
      )}
      {props.setY && <input name="y" min="-10" max="10" type="range" />}
      {props.setScale && <input name="scale" min="0" max="10" type="range" />}
      {props.setRotate && <input name="" min="-360" max="360" type="range" />}
      {props.setOpacity && <input type="range" />}
    </div>
  );
};

export default ControlPanel;
