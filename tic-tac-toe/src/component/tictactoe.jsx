import { useState } from "react";

export const TicTacToe = () => {
  const initialBoard = () => {
    return Array(9).fill(null);
  };
  const [board, setBoard] = useState(initialBoard());
  const [isXNext, setIsXNext] = useState(true);

  const WINNING_PATTERNS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const getStatusMessage = () => {
    const winner = calculateWinner(board);
    if (winner) return `Player ${winner} wins!`;
    if (!board.includes(null)) return `It's a draw!`;
    return `Player ${isXNext ? "X" : "O"} turn`;
  };
  const calculateWinner = (currentBoard) => {
    for (let i = 0; i < WINNING_PATTERNS.length; i++) {
      const [a, b, c] = WINNING_PATTERNS[i];
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return currentBoard[a]; //return winner
      }
    }

    return null;
  };
  const handleCell = (index) => {
    // check winner and if index is already filled
    const winner = calculateWinner(board);
    if (winner || board[index]) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const reset = () => {
    setBoard(initialBoard());
    setIsXNext(true);
  };

  return (
    <>
      Tic Tac Toe
      <div>{getStatusMessage()}</div>
      <div className="board">
        {board.map((data, index) => {
          return (
            <button className="cell" onClick={() => handleCell(index)}>
              {data}
            </button>
          );
        })}
      </div>
      <div>
        <button
          onClick={() => {
            reset();
          }}
        >
          Reset Game
        </button>
      </div>
    </>
  );
};
