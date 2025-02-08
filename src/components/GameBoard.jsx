/* eslint-disable react/prop-types */

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

function GameBoard({ onSelectSquare, turns }) {
    let gameBoard = initialGameBoard;
    for (const turn of turns) {
        const { square, player } = turn;
        const { row, col } = square;


        gameBoard[row][col] = player.symbol;
    }
    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // const handleSelectSquare = (rIndex, cIndex, activePlayerSymbol) => {
    //     setGameBoard((prevGameBoard) => {
    //         const newGameBoard = [...prevGameBoard.map(innerArr => [...innerArr])];
    //         newGameBoard[rIndex][cIndex] = activePlayerSymbol;
    //         return newGameBoard;
    //     });
    //     onSelectSquare();
    // }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rIndex) => <li key={rIndex}>
                <ol>
                    {row.map((playerSymbol, cIndex) => <li key={cIndex}>
                        <button onClick={() => onSelectSquare(rIndex, cIndex)}>
                            {playerSymbol}
                        </button>
                    </li>)}
                </ol>
            </li>)}
        </ol>
    );
}
export default GameBoard;