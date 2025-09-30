
import React from 'react';
import './StartPage.css';

function StartPage({ onStart }) {
  return (
    <div className="container">
      <h1>Welcome to the Quiz!</h1>
      <button onClick={onStart}>Start Quiz</button>
    </div>
  );
}

export default StartPage;
