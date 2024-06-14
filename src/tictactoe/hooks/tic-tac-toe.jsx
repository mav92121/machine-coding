import { useState } from "react";
const useTicTacToe = () => {
  const boardSize = 3;
  const initiaBoard = new Array(boardSize * boardSize).fill(null);
  const [board, setBoard] = useState(initiaBoard);
  const [turn, setTurn] = useState(true);
  const resetGame = () => {
    setBoard(initiaBoard);
    setTurn(true);
  };
  const onClickCell = (ind) => {
    if (board[ind] != null || checkWinner()) return;
    setBoard((prevBoard) => {
      const newBoard = [...prevBoard];
      newBoard[ind] = turn ? "X" : "O";
      return newBoard;
    });
    setTurn(!turn);
  };
  const getStatusMessage = () => {
    if (checkWinner()) return `Player ${checkWinner()} wins!`;
    if (!board.includes(null)) return "It's a draw!";
    return `Player ${turn ? "X" : "O"} turn`;
  };
  const checkWinner = () => {
    const possibllities = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < possibllities.length; i++) {
      const [a, b, c] = possibllities[i];
      if (board[a] != null && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return false;
  };

  return { board, turn, resetGame, onClickCell, getStatusMessage, checkWinner };
};

export default useTicTacToe;

/*

0  1  2  3 
4  5  6  7 
8  9  10 11
12 13 14 15


*/