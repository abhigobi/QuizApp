// backend/scoreCalculator.js
function calculateScore(questions, answers) {
  let score = 0;
  const detail = questions.map(q => {
    const userAnswer = answers.find(a => a.questionId === q.id);
    const correct = userAnswer && userAnswer.selectedIndex === q.correct_option;
    if (correct) score++;
    return {
      questionId: q.id,
      correct,
      userAnswer: userAnswer ? userAnswer.selectedIndex : null,
      correctAnswer: q.correct_option
    };
  });
  return { score, total: questions.length, detail };
}
module.exports = calculateScore;
