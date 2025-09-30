import React from 'react';
import './Timer.css';

function Timer({ value }) {
  return <div className="timer">Time Left: {value} seconds</div>;
}

export default Timer;
