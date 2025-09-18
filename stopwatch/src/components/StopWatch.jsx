import { useState, useEffect } from 'react';
import '../components/Stopwatch.css';

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!isRunning && time !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning, time]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <>
      <div className='stopwatch-container'>
        <h1>Stop watch</h1>
        <h2>{formatTime(time)}</h2>
        <div className='button-group'>
          <button onClick={() => setIsRunning(true)} className='start-btn'>
            Start
          </button>
          <button onClick={() => setIsRunning(false)} className='pause-btn'>
            Pause
          </button>
          <button
            onClick={() => {
              setIsRunning(false);
              setTime(0);
            }}
            className='reset-btn'
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default StopWatch;
