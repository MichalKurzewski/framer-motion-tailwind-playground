import React from "react";
interface IInputs {
  name?: string;
  set: React.Dispatch<React.SetStateAction<number>>;
  value: number;
  min?: number;
  max?: number;
  step?: number;
}

interface IInputsObjects {
  data: IInputs[];
}
const ControlPanel = ({ data }: IInputsObjects) => {
  return (
    <div className="z-10">
      {data.map((item: IInputs, key: number) => (
        <div key={key} className="flex justify-between gap-2">
          <div>{item.name}</div>
          <input
            className="cursor-pointer accent-slate-500"
            name={item.name}
            type="range"
            onChange={(e) => {
              item.set(Number(e.target.value));
            }}
            value={item.value}
            min={item.min}
            max={item.max}
            step={item.step}
          />
        </div>
      ))}
    </div>
  );
};

export default ControlPanel;
