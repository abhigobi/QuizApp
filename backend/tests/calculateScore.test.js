const calculateScore = require('../utils/scoreCalculator');

test('calculates quiz score correctly', () => {
  const questions = [
    { id: 1, correct_option: 2 },
    { id: 2, correct_option: 0 }
  ];
  const answers = [
    { questionId: 1, selectedIndex: 2 }, // correct
    { questionId: 2, selectedIndex: 1 }  // incorrect
  ];
  const result = calculateScore(questions, answers);
  expect(result.score).toBe(1);
  expect(result.detail[0].correct).toBe(true);
  expect(result.detail[1].correct).toBe(false);
});
