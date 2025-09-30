const express = require('express');
const router = express.Router();
const db = require('../db');
const calculateScore = require('../utils/scoreCalculator');


// GET /api/quiz - fetch all questions without correct answers
router.get('/quiz', (req, res) => {
  db.all('SELECT id, text, options FROM questions', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    const questions = rows.map(q => ({
      id: q.id,
      text: q.text,
      options: JSON.parse(q.options)
    }));
    res.json({ questions });
  });
});

// POST /api/submit - submit answers and calculate score + per-question feedback
router.post('/submit', (req, res) => {
  const answers = req.body.answers; // [{ questionId, selectedIndex }]
  if (!Array.isArray(answers)) {
    return res.status(400).json({ error: 'Answers must be an array' });
  }

  db.all('SELECT id, correct_option FROM questions', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }

    const result = calculateScore(rows, answers);
    res.json(result);
  });
});

module.exports = router;
