# QuizApp - Online Quiz Platform

A modern, full-stack quiz application featuring a React frontend and Node.js/Express backend with SQLite database. The app offers an interactive quiz experience with real-time question status tracking, timer, navigation, and detailed scoring.

---

## Tech Stack

- **Frontend:** React, JavaScript, CSS  
- **Backend:** Node.js, Express, SQLite  
- **Testing:** Jest, Supertest  

---

## Installation & Setup

### Prerequisites

- Node.js (v14+ recommended) and npm installed  
- Git installed  

### Clone & Install

git clone https://github.com/your-username/QuizApp.git
cd QuizApp


### Backend Setup

cd backend
npm install

The backend uses the `sqlite3` npm package that bundles SQLite, so no separate SQLite install needed.

Start the server:

node server.js


The backend will start on [http://localhost:5000](http://localhost:5000/).

---

### Frontend Setup

Open a new terminal:

cd frontend
npm install
npm start


The React app will open on [http://localhost:3000](http://localhost:3000/) and automatically connect to the backend API.

---

## Testing

Run backend tests:

cd backend
npx jest tests/calculateScore.test.js


This runs unit tests for the scoring logic helper (`calculateScore.test.js`).

---

## Contributing

Contributions and improvements are welcome! Please open issues or pull requests.


---

## Author

Abhishek Kulkarni

---

Thank you for checking out QuizApp! Enjoy building and learning.
