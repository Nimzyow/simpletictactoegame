import React, { useContext } from "react";
import Square from "./Square";
import GameContext from "../Context/Game/GameContext";

const Board = () => {
  const gameContext = useContext(GameContext);
  const { squares, setX, xIsNext } = gameContext;

  //we know the below renderSquare function will pass down 9 numbers because we have called upon this renderSquare below passing values from 0-8. so the i value comes from the return where we renderSquare(0-8)
  const renderSquare = i => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  };

  const handleClick = i => {
    const squaresCopy = squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squaresCopy[i] = xIsNext ? "X" : "O";
    console.log(squaresCopy);
    setX(squaresCopy);
  };

  const calculateWinner = squares => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <div>
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
    </div>
  );
};

export default Board;
