import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { useState } from "react";
import { WINNING_COMBINATIONS } from './data/winning-combinations'
import GameOver from "./components/GameOver";

const PLAYERS = {
	O: "Player 1",
	X: "Player 2"
}
const INITIAL_GAME_BOARD = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

function App() {
	const [ players, setPlayers ] = useState(PLAYERS);
	const [ gameTurns, setGameTurns ] = useState([]);

	const deriveActivePlayer = (turns) => {
		return (turns.length > 0 && turns[0].player.symbol === 'O') ? "X" : "O"
	}
	const deriveGameBoard = (gameTurns) => {
		let gameBoard = [...INITIAL_GAME_BOARD.map((arr) => [...arr])];
		for (const turn of gameTurns) {
			const { square, player } = turn;
			const { row, col } = square;

			gameBoard[row][col] = player?.symbol;
		}
		return gameBoard
	}
	const deriveWinner = (gameBoard, players) => {
		let winner;
		for (const combination of WINNING_COMBINATIONS) {
			const firstSymbol = gameBoard[combination[0].row][combination[0].column];
			const secondSymbol = gameBoard[combination[1].row][combination[1].column];
			const thirdSymbol = gameBoard[combination[2].row][combination[2].column];

			if (
				firstSymbol && 
				(firstSymbol === secondSymbol) && 
				(firstSymbol === thirdSymbol)
			) {
				winner = players[firstSymbol];
			}
		}
		return winner;
	}

	const activePlayer = deriveActivePlayer(gameTurns);
	const gameBoard = deriveGameBoard(gameTurns);
	const winner = deriveWinner(gameBoard, players); 
	const hasDrawn = gameTurns.length == 9 && !deriveWinner(gameBoard, players);

	const handleSelectSquare = (rIndex, cIndex) => {
		setGameTurns(prevTurns => {
			let addedSymbol = deriveActivePlayer(gameTurns);

			const newTurns = [{ square : { row: rIndex, col: cIndex}, player: { name : '', symbol: addedSymbol }, turnNum: prevTurns.length + 1 }, ...prevTurns];
			return newTurns;

		});
	};
	const handleReset = () => {
		setGameTurns([]);
	}
	const handlePlayerNameChange = (id, newName) => {
		setPlayers(prevPlayers => {
			return {
				...prevPlayers, 
				[id]: newName
			}
		})
	}

	return (
		<main>
			<div id="game-container">
				<ol id="players" className="highlight-player">
					<Player id="O" 
						defaultName={PLAYERS.O} activePlayerSymbol={activePlayer} 
						onChangeName={handlePlayerNameChange} 
					/>
					<Player id="X"
						defaultName={PLAYERS.X} activePlayerSymbol={activePlayer} 
						onChangeName={handlePlayerNameChange}
					/>
				</ol>
				{(winner || hasDrawn) && <GameOver winner={winner} onReset={handleReset} players={players}/>}
				<GameBoard onSelectSquare={handleSelectSquare} gameBoard={gameBoard}/>
			</div>
			<Log turns={gameTurns} players={players}/>
		</main>
	)
}
export default App;
