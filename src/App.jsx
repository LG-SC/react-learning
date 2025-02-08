
import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts";
import Examples from "./components/Examples";
import { useState } from "react";

import { useEffect } from "react";
import api from "./utils/api";

function App() {
	const [repos, setRepos] = useState(null);

	useEffect(() => {fetchRepo()}, []);
	const fetchRepo = async () => {
		const data = await api.get('/users/LG-SC/repos');
		if(data.status == 200) {
			setRepos(data.data)
		}
	}

	return (
		<div>
			{console.log(JSON.stringify(repos))}
			<Header />
			<main>
				<CoreConcepts />
				<Examples />
			</main>
		</div>
	);
}

export default App;
