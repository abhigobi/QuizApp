function ResultPage({ result, questions }) {

return (
    <div className="container">
      <h2>Your Score: {result.score}/{result.total}</h2>
      <ul className="result-list">
        {result.detail.map((d, i) => {
          const isCorrect = d.correct;
          return (
            <li key={i} className={isCorrect ? 'answer-correct' : 'answer-wrong'}>
              <b>Q:</b> {questions[i].text} <br />
              <b>Your Answer:</b> {questions[i].options[d.userAnswer] || 'No Answer'} <br />
              <b>Correct Answer:</b> {questions[i].options[d.correctAnswer]} <br />
              {isCorrect ? '✔️ Correct' : '❌ Wrong'}
            </li>
          );
        })}
      </ul>
      <button className="restart-button" onClick={() => window.location.reload()}>Restart</button>
    </div>
  );

}
export default ResultPage;
