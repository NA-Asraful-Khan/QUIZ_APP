import React, { useContext, useState } from 'react'
import { Questions } from '../Helpers/Questions';
import { QuizContext } from '../Helpers/Context';
const Quiz = () => {

  const {score,setScore,setGameState}= useContext(QuizContext)
  const [currentQuestion, setCurrQuestion]= useState(0);
  const[optChosen, setOptChosen]=useState("")
  const qus = Questions[currentQuestion]
  const lastQuiz = currentQuestion === Questions.length-1;
  const nextQuestion=()=>{
    if(qus.answer === optChosen){
      setScore(score+1)
    }
    setCurrQuestion(currentQuestion+1);
  }

  const finisQuiz=()=>{
    if(qus.answer === optChosen){
      setScore(score+1)
    }
    setGameState('endScreen')
  }

  const chosenOption=(optionSel)=>{
    setOptChosen(optionSel)
  }


  
  return (
    <div className='Quiz'>
      <h1>{qus.prompt}</h1>
      <div className="options">
        <button className='itemSel' onClick={()=>{chosenOption("A")}}>{qus.optionA} </button>
        <button className='itemSel' onClick={()=>{chosenOption("B")}}>{qus.optionB}</button>
        <button className='itemSel' onClick={()=>{chosenOption("C")}}>{qus.optionC}</button>
        <button className='itemSel' onClick={()=>{chosenOption("D")}}>{qus.optionD}</button>
      </div>
    {lastQuiz?(
      <button onClick={finisQuiz}>Finish Quiz</button>
    ):<button onClick={nextQuestion}>Next Question</button>}
    </div>
  )
}

export default Quiz