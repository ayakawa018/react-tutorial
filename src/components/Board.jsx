import React,{useState} from "react";
import { Square } from './index';
import calculateWinner from './calculateWinner';

const Board = () => {
  const [squares,setSqares] = useState(Array(9).fill(null))
  const [xIsNext,setxIsNext] = useState(true)

  const handleClick = i => {
    const squaresCopy = squares.slice();
    if(calculateWinner(squaresCopy) || squares[i]){
      return;
    }
    squaresCopy[i] = xIsNext ? 'X' : 'O';
    setSqares(squaresCopy);
    setxIsNext(!xIsNext);

  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }
  const renderSquare = i => {
    return <Square value = {squares[i]} onClick = {() => handleClick(i)}/>
  }
  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </>
  );
}

export default Board;
