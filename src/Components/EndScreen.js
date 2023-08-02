import React, { useContext } from 'react'
import { QuizContext } from '../Helpers/Context'

const EndScreen = () => {
  const {score,setScore,setGameState}= useContext(QuizContext)
  return (
    <div>Your Score is {score}</div>
  )
}

export default EndScreen