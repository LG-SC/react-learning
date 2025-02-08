import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { useState } from "react";

function App() {
	// const [ activePlayerSymbol, setActivePlayerSymbol ] = useState("X");
	
	const [ gameTurns, setGameTurns ] = useState([]);
	const handleSelectSquare = (rIndex, cIndex) => {
		// setActivePlayerSymbol((lastActivePlayerSymbol) => lastActivePlayerSymbol === "X" ? "O" : "X")
		setGameTurns(prevTurns => {
			let addedSymbol = (prevTurns.length > 0 && prevTurns[0].player.symbol === 'X') ? "O" : "X"

			const newTurns = [{ square : { row: rIndex, col: cIndex}, player: { name : '', symbol: addedSymbol }, turnNum: prevTurns.length + 1 }, ...prevTurns];
			return newTurns;

		})
	}

	return (
		<main>
			<div id="game-container">
				<ol id="players" className="highlight-player">
					<Player id="O" defaultName="Player 1" activePlayerSymbol={gameTurns[0]?.player?.symbol} />
					<Player id="X" defaultName="Player 2" activePlayerSymbol={gameTurns[0]?.player?.symbol} />
				</ol>
				<GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns}/>
			</div>
			<Log turns={gameTurns}/>
		</main>
	)
}
export default App;
