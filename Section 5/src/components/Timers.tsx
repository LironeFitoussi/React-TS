import { useTimersContext } from "../store/timers-context";
import Timer from "./Timer.tsx";
export default function Timers() {
  const { timers } = useTimersContext();
  return (
    <ul>
      {timers.map((timer, idx) => (
        <li key={timer.name + idx}>
          <Timer {...timer} />
        </li>
      ))}
    </ul>
  );
}
