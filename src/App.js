import React, { useState } from 'react'
import StartPage from './pages/StartPage'
import QuizPage from './pages/QuizPage'
import ResultPage from './pages/ResultPage'
import quizData from './data/quiz.json'

function App() {

  const [showPage, setShowPage] = useState('startPage');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleStartQuiz = () => {
    setShowPage('quizPage');
  }

  const handleNextQuestion = () => {
    if (currentQuestion === quizData.length - 1) {
      setShowPage('resultPage')
      return;
    }

    setCurrentQuestion(currentQuestion + 1);
  }

  const handleScoreIncrement = () => {
    setScore(score + 10);
  }

  const handleRestartQuiz = () => {
    setShowPage('quizPage');
    setCurrentQuestion(0);
    setScore(0);
  }


  return (
    <div>
      {showPage === 'startPage' && <StartPage handleStartQuiz={handleStartQuiz} />}
      {
        showPage === 'quizPage'
        &&
        <QuizPage quizData={quizData} currentQuestion={currentQuestion} handleNextQuestion={handleNextQuestion} handleScoreIncrement={handleScoreIncrement} />
      }
      {showPage === 'resultPage' && <ResultPage score={score} handleRestartQuiz={handleRestartQuiz} />}
    </div>
  )
}

export default App
