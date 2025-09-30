**QuizApp - Online Quiz Platform**
A modern, full-stack quiz application featuring a React frontend and Node.js/Express backend with SQLite database. 
The app offers an interactive quiz experience with real-time question status tracking, timer, navigation, and detailed scoring.

**Tech Stack**
Frontend: React, JavaScript, CSS

Backend: Node.js, Express, SQLite

Testing: Jest, Supertest

Project Structure
text
QuizApp/
 ├── backend/
 │    ├── db.js                  # SQLite DB connection & seed logic
 │    ├── server.js              # Express app setup and server start
 │    ├── routes/
 │    │    └── quiz.js           # API routing for quiz endpoints
 │    ├── scoreCalculator.js     # Core scoring logic helper
 │    └── tests/
 │         ├── score.test.js          # Integration tests for API scoring endpoint
 │         └── calculateScore.test.js # Unit tests for scoring helper function
 ├── frontend/
 │    ├── src/
 │    │    ├── components/       # Reusable UI components (e.g., Timer)
 │    │    ├── pages/            # React pages (StartPage, QuizPage, ResultPage)
 │    │    ├── App.js            # React entry point
 │    │    ├── App.css           # Global style
 │    │    └── *.css             # Page/component-specific styles
 ├── .gitignore                 # Ignores node_modules, env, logs, etc.
 └── README.md                  # Project overview and instructions
 
**Installation & Setup**
Prerequisites
Node.js (v14+ recommended) and npm installed

Git installed

Clone & Install
git clone https://github.com/your-username/QuizApp.git
cd QuizApp

Backend Setup
cd backend
npm install
The backend uses the sqlite3 npm package that bundles SQLite, so no separate SQLite install needed.

Start server:
node server.js
The backend will start on http://localhost:5000.

Frontend Setup
Open a new terminal:
cd frontend
npm install
npm start
The React app will open on http://localhost:3000 and automatically connect to the backend API.


Testing
Running all backend tests

cd backend
npx jest tests/calculateScore.test.js  

Unit tests for scoring logic helper (calculateScore.test.js).


Contributing
Contributions and improvements are welcome! Please open issues or pull requests.

License
MIT License

Author
Abhishek Kulkarni

Thank you for checking out QuizApp! Enjoy building and learning.
