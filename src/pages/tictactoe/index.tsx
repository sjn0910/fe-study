import { useState } from "react";
import { Square } from "./Square";
import style from "./tictactoe.module.css";

function calculateWinner(squares: string[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default function Board() {
  const [turn, setTurn] = useState(true);
  const [square, setSquares] = useState(Array(9).fill(""));

  const handleClick = (i: number) => {
    if (square[i] || calculateWinner(square)) {
      return;
    }
    const newSquares = square.slice();
    newSquares[i] = turn ? "X" : "O";
    setSquares(newSquares);
    setTurn(!turn);
  };

  const winner = calculateWinner(square);
  let status = winner
    ? "Winner: " + winner
    : (turn ? "X" : "O") + "'s  turn";

  return (
    <div style={{ margin: 24 }}>
      <div style={{ marginBottom: 12 }}>{status}</div>
      <div className={style["board-row"]}>
        <Square value={square[0]} onSquareClick={() => handleClick(0)} />
        <Square value={square[1]} onSquareClick={() => handleClick(1)} />
        <Square value={square[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className={style["board-row"]}>
        <Square value={square[3]} onSquareClick={() => handleClick(3)} />
        <Square value={square[4]} onSquareClick={() => handleClick(4)} />
        <Square value={square[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className={style["board-row"]}>
        <Square value={square[6]} onSquareClick={() => handleClick(6)} />
        <Square value={square[7]} onSquareClick={() => handleClick(7)} />
        <Square value={square[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </div>
  );
}
