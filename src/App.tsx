import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tile from './components/Tile';

function App() {
  return (
    <div>
      <header className="App-header">
       <div>Shehil 🍉</div>
       <div style={{flexDirection:"row"}}>
        <span className='Head-Link'>About</span>
        <span className='Head-Link'>Dribble</span>
        <span className='Head-Link'>Instagram</span>
        <span className='Head-Link'>Twitter</span>
       </div>
      </header>
      <div style={{display:"flex", flexDirection:"row"}}>
        <Tile/>
        <Tile/>
        <Tile/>
      </div>
      
    </div>
  );
}

export default App;
