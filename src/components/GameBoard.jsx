/* eslint-disable react/prop-types */

function GameBoard({ onSelectSquare, gameBoard }) {
    return (
        <ol id="game-board">
            {gameBoard.map((row, rIndex) => <li key={rIndex}>
                <ol>
                    {row.map((playerSymbol, cIndex) => <li key={cIndex}>
                        <button onClick={() => onSelectSquare(rIndex, cIndex)} disabled={playerSymbol !== null}>
                            {playerSymbol}
                        </button>
                    </li>)}
                </ol>
            </li>)}
        </ol>
    );
}
export default GameBoard;