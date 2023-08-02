import React, { useContext } from 'react'
import { QuizContext } from '../Helpers/Context'
import { Questions } from '../Helpers/Questions'

const EndScreen = () => {
  const {score,setScore,setGameState}= useContext(QuizContext)
  const restartQuiz =()=>{
    setScore(0);
    setGameState('menu')
  }
  return (
    <div className='EndScreen'>
      <h1>Quiz Finished</h1>
      <h3>{score*5} / {Questions.length*5}</h3>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  )
}

export default EndScreen