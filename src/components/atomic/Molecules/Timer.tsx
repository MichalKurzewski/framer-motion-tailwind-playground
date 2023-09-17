import { useEffect, useRef } from "react";
import { timerAtom } from "../../../JotaiStores/timerStore";
import { useAtom } from "jotai";

export function Timer({ isOpen = true }: { isOpen?: boolean }): JSX.Element {
  const timerId = useRef<NodeJS.Timeout>();
  const [time, setTime] = useAtom(timerAtom);
  useEffect(() => {
    if (isOpen && !time) {
      setTime(new Date().toLocaleTimeString());
      timerId.current = setInterval(() => {
        setTime(new Date().toLocaleTimeString());
      }, 1000);
    } else if (!isOpen && time) {
      clearInterval(timerId.current);
      setTime(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, setTime]);
  return <span>{time}</span>;
}
