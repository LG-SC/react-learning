/* eslint-disable react/prop-types */
import { useState } from "react";

function Player({ defaultName = 'Player', id, activePlayerSymbol, onChangeName }) {
	const [ isEditing, setIsEditing ] = useState(false);
	const [ name, setName ] = useState(defaultName);

	const handleEditClick = () => {
		setIsEditing((editing) => !editing);
		if (isEditing) {
			onChangeName(id, name);
		}
	}

	return (
		<li id={id} className={activePlayerSymbol === id ? "active" : undefined}>
			<span className="player">
				{
					isEditing ? (
						<input type="text" defaultValue={name} onChange={(e) => {setName(() => e.target.value)}} required />
					) : (
						<span className="player-name">{name}</span>
					)
				}
				<span className="player-symbol">{id}</span>
			</span>
			<button type="submit" onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
		</li>
	);
}
export default Player;