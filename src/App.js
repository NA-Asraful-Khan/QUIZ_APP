import { useState } from 'react';
import './App.css';
import MainMenu from './Components/MainMenu';
import Quiz from './Components/Quiz';
import EndScreen from './Components/EndScreen';

import { QuizContext } from './Helpers/Context';

function App() {
  const[gameState, setGameState]= useState('menu')
  const [score,setScore]= useState(0)

  const providerValue = {gameState, setGameState,score,setScore}
  return (
    <div className="App">
      <h1>QUIZ APP</h1>
      <QuizContext.Provider value={providerValue}>
        {gameState === "menu" && <MainMenu/>}
        {gameState === "quiz" && <Quiz/>}
        {gameState === "endScreen" && <EndScreen/>}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
