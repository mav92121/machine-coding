import "../index.css";
import useTicTacToe from "../hooks/tic-tac-toe";
const Board = () => {
  const { board, getStatusMessage, resetGame, onClickCell } = useTicTacToe();
  return (
    <div className="container">
      <div className="header">
        <p>{getStatusMessage()}</p>
        <button className="button" onClick={resetGame}>
          Reset
        </button>
      </div>
      <div className="board">
        {board.map((cell, index) => {
          return (
            <>
              <button className="cell" onClick={() => onClickCell(index)}>
                {cell}
              </button>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Board;
