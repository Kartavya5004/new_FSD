```jsx
import { useEffect, useState } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (running) {
      interval = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    }

    return () => clearInterval(interval);
  }, [running]);

  const formatTime = () => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);

    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}.${String(milliseconds).padStart(2, "0")}`;
  };

  const reset = () => {
    setRunning(false);
    setTime(0);
  };

  return (
    <div>
      <h1>{formatTime()}</h1>

      <button onClick={() => setRunning(!running)}>
        {running ? "Pause" : "Start"}
      </button>

      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Stopwatch;
```
