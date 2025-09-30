import React, { useState, useEffect } from 'react';
import Timer from '../components/Timer';
import './QuizPage.css';

function QuizPage({ questions, answers, setAnswers, onSubmit }) {
  const [current, setCurrent] = useState(0);
  const [timer, setTimer] = useState(60); // e.g., 60 seconds

  useEffect(() => {
    if (timer === 0) onSubmit();
    const interval = setInterval(() => setTimer(t => t - 1), 1000);
    return () => clearInterval(interval);
  }, [timer, onSubmit]);

  const handleOption = idx => {
    let newAnswers = [...answers];
    newAnswers[current] = { questionId: questions[current].id, selectedIndex: idx };
    setAnswers(newAnswers);
  };

  const answeredCount = answers.filter(a => a && a.selectedIndex !== undefined).length;
  
return (

<div className="quiz-layout">
      {/* --- QUESTION STATUS SIDEBAR --- */}
      <aside className="question-status-panel">
        <h4>Questions</h4>
        <div className="status-list">
          {questions.map((q, idx) => {
            const answered = answers[idx] && answers[idx].selectedIndex !== undefined;
            return (
              <button
                key={q.id}
                className={
                  "status-btn " +
                  (answered ? "answered" : "unanswered") +
                  (current === idx ? " current" : "")
                }
                onClick={() => setCurrent(idx)}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
        <div className="status-summary">
          Answered: {answeredCount} / {questions.length}
        </div>
      </aside>
      

    <div className="container">
      <Timer value={timer} />
      <div className="question-text">{questions[current].text}</div>
      
      <div className="options">
        {questions[current].options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleOption(i)}
            className={answers[current] && answers[current].selectedIndex === i ? 'selected' : ''}
          >
            {opt}
          </button>
        ))}
      </div>
      
      <div className="navigation-buttons">
        <button disabled={current === 0} onClick={() => setCurrent(c => c - 1)}>Previous</button>
        <button
          disabled={current === questions.length - 1}
          onClick={() => setCurrent(c => c + 1)}
        >
          Next
        </button>
        {current === questions.length - 1 && <button onClick={onSubmit}>Submit</button>}
      </div>
    </div>
</div>
  );
}

export default QuizPage;
