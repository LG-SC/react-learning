import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { useState } from "react";

function App() {
	const [ activePlayerSymbol, setActivePlayerSymbol ] = useState("X");

	const handleSelectSquare = () => {
		setActivePlayerSymbol((lastActivePlayerSymbol) => lastActivePlayerSymbol === "X" ? "O" : "X")
	}

	return (
		<main>
			<div id="game-container">
				<ol id="players" className="highlight-player">
					<Player id="O" defaultName="Player 1" activePlayerSymbol={activePlayerSymbol} />
					<Player id="X" defaultName="Player 2" activePlayerSymbol={activePlayerSymbol} />
				</ol>
				<GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayerSymbol}/>
			</div>
			<Log />
		</main>
	)
}
export default App;
