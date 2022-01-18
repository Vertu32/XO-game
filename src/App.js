import React, { useState } from 'react';
import checkWinner from './checkWinner';
import Square from './components/Square';
import './styles/style.css'


const initial = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

const players = {
  CIRCLE: "0",
  CROSS: "1"
}

const nextPlayer = {
  [players.CIRCLE]: players.CROSS,
  [players.CROSS]: players.CIRCLE
}

const winner = {
  '0': 'O',
  '1': 'X'
}

function App() {

  
  const [matrix, setMatrix] = useState(initial)
  const [currPlayer, setCurrPlayer] = useState(players.CROSS)
  const [result, setResult] = useState(null)

  

  const onClickHandler = (rI, cI) => () => {
    let copy = [...matrix];
    copy[rI][cI] = currPlayer;
    setMatrix(copy);
    setCurrPlayer(nextPlayer[currPlayer]);
    setResult(checkWinner(copy, currPlayer))
  }


  return (
    <div className="App">
      {result
      ? <div>Победил игрок {result}</div>
      :<div className="container">
      {matrix.map((row, rI) => (
        <div className="row" key={rI}>
          {row.map((value, cI) => (
            <Square key={cI} type={value} onClick={onClickHandler(rI, cI)} />
          ))}
        </div>
      ))}
    </div>
      }
      
    </div>
  );
}

export default App;
