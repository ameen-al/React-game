import React, { useState } from 'react';
import './App.css';
import Game from './Components/Game/Game';


function App() {
 

  return (
    <>
    <div className='app'>
      <h1 className='text-center mt-4'>Tic Tok</h1>
      <Game/>
      </div>
    </>
  );
}

export default App;