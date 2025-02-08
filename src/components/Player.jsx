/* eslint-disable react/prop-types */
import { useState } from "react";

function Player({ defaultName = 'Player', id, activePlayerSymbol }) {
	const [ isEditing, setIsEditing ] = useState(false);
	const [ name, setName ] = useState(defaultName);

	return (
		<li id={id} className={activePlayerSymbol === id ? "active" : undefined}>
			<span className="player">
				{
					isEditing ? (
						<input type="text" defaultValue={name} onChange={(e) => {setName(() => e.target.value); console.log(name);} } required />
					) : (
						<span className="player-name">{name}</span>
					)
				}
				<span className="player-symbol">{id}</span>
			</span>
			<button type="submit" onClick={() => setIsEditing((isEditing) => !isEditing)}>{isEditing ? "Save" : "Edit"}</button>
		</li>
	);
}
export default Player;