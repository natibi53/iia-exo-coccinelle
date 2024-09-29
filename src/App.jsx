import { useState, useEffect } from 'react'
import './App.css'
import Gamepad from './components/Gamepad'
import Board from './components/Board'

export default function App() {
  const [position , setPosition] = useState({left: 50, top: 50});

  const move = (dh, dv) => {
    setPosition(({left, top}) => {
      const newPosition = {
          left: left + dh,
          top: top + dv
      };
        if (newPosition.left < 0) {
            newPosition.left = 0;
        }
        if (newPosition.left > 100) {
            newPosition.left = 100;
        }
        if (newPosition.top < 0) {
            newPosition.top = 0;
        }
        if (newPosition.top > 100) {
            newPosition.top = 100;
        }
        return newPosition;
    });
  };
  return (
      <>
        <Gamepad onMove={move}/>
        <Board position={position}/>
      </>
  );
}