import { useState } from 'react';
import './App.css';

function App() {
  const[gameState, setGameState]= useState('menu')
  return (
    <div className="App">
      <h1>QUIZ APP</h1>
    </div>
  );
}

export default App;
