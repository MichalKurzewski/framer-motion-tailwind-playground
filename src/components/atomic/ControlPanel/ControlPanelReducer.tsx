import { State, Action, ControlConfig } from "../Item8ControlledReducer";

interface Props {
  state: State;
  dispatch: React.Dispatch<Action>
  controlConfigs: { [key in keyof State]: ControlConfig };
}

const ControlPanelReducer = ({
  state,
  dispatch,
  controlConfigs,
}: Props) => {

  const handleControlChange = (key: keyof State, value: number) => {
    dispatch({ type: key, payload: value });
  };

  return (
    <div className="z-10">
      {Object.keys(state).map((key) => (
        <div key={key} className="flex justify-between gap-2">
          <div>{controlConfigs[key as keyof State].name}</div>
          <input
            name={key}
            type="range"
            onChange={(e) => {
              handleControlChange(key as keyof State, Number(e.target.value));
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
