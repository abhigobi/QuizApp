import React, { useState } from 'react';
import StartPage from './pages/StartPage';
import QuizPage from './pages/QuizPage';
import ResultPage from './pages/ResultPage';
import axios from 'axios';

function App() {
  const [stage, setStage] = useState('start'); // start, quiz, result
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]); // [{questionId, selectedIndex}]
  const [result, setResult] = useState(null);

  // Start quiz
  const beginQuiz = async () => {
    const res = await axios.get('http://localhost:5000/api/quiz');
    setQuestions(res.data.questions);
    setStage('quiz');
  };

  // Submit answers
  const submitQuiz = async () => {
    const res = await axios.post('http://localhost:5000/api/submit', { answers });
    setResult(res.data);
    setStage('result');
  };

  if (stage === 'start') return <StartPage onStart={beginQuiz} />;
  if (stage === 'quiz')
    return <QuizPage
      questions={questions}
      answers={answers}
      setAnswers={setAnswers}
      onSubmit={submitQuiz}
    />;
  if (stage === 'result') return <ResultPage result={result} questions={questions} />;
}

export default App;
