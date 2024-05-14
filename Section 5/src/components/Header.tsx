import Button from './UI/Button.tsx';
import { useTimersContext } from '../store/timers-context.tsx';

export default function Header() {
  const {isRunning, stopTimers, startTimers, timers} = useTimersContext();
  // console.log(timersCtx);
  // console.log(timers);
  
  return (
    <header>
      <h1>ReactTimer</h1>

      <Button onClick={isRunning? stopTimers : startTimers}>{isRunning ? 'Stop' : 'Start'} Timers</Button>
    </header>
  );
}
