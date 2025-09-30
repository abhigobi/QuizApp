const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('quiz.db');

// Create table if not exists
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS questions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    text TEXT,
    options TEXT,
    correct_option INTEGER
  )`);
});

// Add sample questions (run only once)
function seedQuestions() {
  const questions = [
    {
      text: 'Capital of France?',
      options: JSON.stringify(['Berlin', 'London', 'Paris', 'Madrid']),
      correct_option: 2
    },
    {
      text: '5 + 7 = ?',
      options: JSON.stringify(['10', '11', '12', '13']),
      correct_option: 2
    },
    {
      text: 'Largest planet in our solar system?',
      options: JSON.stringify(['Earth', 'Mars', 'Jupiter', 'Saturn']),
      correct_option: 2
    },
      {
    text: 'What is the capital city of Japan?',
    options: JSON.stringify(['Seoul', 'Tokyo', 'Beijing', 'Bangkok']),
    correct_option: 1
  },
    {
      text: 'What is the chemical symbol for water?',
      options: JSON.stringify(['O2', 'H2O', 'CO2', 'NaCl']),
      correct_option: 1
    },
    {
      text: 'Who wrote "Romeo and Juliet"?',
      options: JSON.stringify(['Mark Twain', 'Charles Dickens', 'William Shakespeare', 'Jane Austen']),
      correct_option: 2
    }
  ];

  questions.forEach(q => {
    db.get('SELECT id FROM questions WHERE text = ?', [q.text], (err, row) => {
      if (err) {
        console.error(err);
        return;
      }
      if (!row) {
        db.run(
          'INSERT INTO questions(text, options, correct_option) VALUES (?, ?, ?)',
          [q.text, q.options, q.correct_option],
          err => {
            if (err) console.error(err);
            else console.log(`Inserted: ${q.text}`);
          }
        );
      } else {
        console.log(`Already exists: ${q.text}`);
      }
    });
  });
}


// Uncomment below to run just once:
seedQuestions();
// function resetDatabase() {
//   db.serialize(() => {
//     db.run('DROP TABLE IF EXISTS questions');
//     db.run(`CREATE TABLE questions (
//       id INTEGER PRIMARY KEY AUTOINCREMENT,
//       text TEXT UNIQUE,
//       options TEXT,
//       correct_option INTEGER
//     )`);
//     console.log('Database reset done.');
//   });
// }
// resetDatabase();
module.exports = db;