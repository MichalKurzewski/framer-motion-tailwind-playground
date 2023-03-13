import {
  State,
  Action,
  ControlConfig,
} from "../Item8ControlledReducer";

interface Props {
  state: State;
  dispatch: React.Dispatch<Action>;
  controlConfigs: { [key in keyof State]: ControlConfig };
}

const ControlPanelReducer = ({ state, dispatch, controlConfigs }: Props) => {
  return (
    <div className="z-10">
      {Object.keys(state).map((key) => (
        <div key={key} className="flex justify-between gap-2">
          <div>{controlConfigs[key as keyof State].name}</div>
          <input
            className="cursor-pointer accent-slate-500"
            name={key}
            type="range"
            onChange={(e) => {
              dispatch({ type: key as keyof State, payload: +e.target.value });
            }}
            min={controlConfigs[key as keyof State].min}
            max={controlConfigs[key as keyof State].max}
            step={controlConfigs[key as keyof State].step}
            value={state[key as keyof State]}
          />
        </div>
      ))}
    </div>
  );
};

export default ControlPanelReducer;
