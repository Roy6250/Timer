import logo from './logo.svg';
import './App.css';

import CountdownTimer from './CountdownTimer';
export default function App() {
  const Eight_DAYS_IN_MS = 8* 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();
  console.log(NOW_IN_MS)

  const dateTimeAfterEightDays = NOW_IN_MS + Eight_DAYS_IN_MS;
  return (
    <div>
      <h1>Countdown Timer</h1>
      <CountdownTimer targetDate={dateTimeAfterEightDays} />
    </div>
  );
}