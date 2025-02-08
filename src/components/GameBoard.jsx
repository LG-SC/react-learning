/* eslint-disable react/prop-types */
import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

function GameBoard({ onSelectSquare, activePlayerSymbol }) {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    const handleSelectSquare = (rIndex, cIndex, activePlayerSymbol) => {
        setGameBoard((prevGameBoard) => {
            const newGameBoard = [...prevGameBoard.map(innerArr => [...innerArr])];
            newGameBoard[rIndex][cIndex] = activePlayerSymbol;
            return newGameBoard;
        });
        onSelectSquare();
    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rIndex) => <li key={rIndex}>
                <ol>
                    {row.map((playerSymbol, cIndex) => <li key={cIndex}>
                        <button onClick={() => handleSelectSquare(rIndex, cIndex, activePlayerSymbol)}>{playerSymbol}</button>
                    </li>)}
                </ol>
            </li>)}
        </ol>
    );
}
export default GameBoard;