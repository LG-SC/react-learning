
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcepts";
import { useState } from "react";
import { CORE_CONCEPTS } from "./data";
import { EXAMPLES } from "./data";
import TabButton from "./components/TabButton";
import { useEffect } from "react";
import api from "./utils/api";

function App() {
	const [repos, setRepos] = useState(null);
	const [topicContent, setTopicContent] = useState();

	const selectHandler = (sender) => {
		console.log(sender.id);
		setTopicContent(sender.id);
	}

	useEffect(() => {fetchRepo()}, []);
	const fetchRepo = async () => {
		const data = await api.get('/users/LG-SC/repos');
		if(data.status == 200) {
			setRepos(data.data)
		}
	}

	console.log('APP COMPONENT EXECUTING');

	let tabContent = <p>Please select a topic.</p>;
	if (topicContent) {
		tabContent = (
			<div id="tab-content">
				<h3>{EXAMPLES[topicContent].title}</h3>
				<p>{EXAMPLES[topicContent].description}</p>
				<pre>
					<code>{EXAMPLES[topicContent].code}</code>
				</pre>
			</div>
		);
	}

	return (
		<div>
			{console.log(JSON.stringify(repos))}
			<Header />
			<main>
				<section id="core-concepts">
					<h2>Core Concepts</h2>
					<ul>
						{CORE_CONCEPTS.map((conceptItem) => (
							<CoreConcept key={conceptItem.title} {...conceptItem} />
						))}
					</ul>
				</section>
				<section id="examples">
					<h2>Examples</h2>
					<menu>
						<TabButton
							id="components"
							isIdSelected={topicContent}
							onSelect={selectHandler}
						>
							Components
						</TabButton>
						<TabButton
							id="jsx"
							isIdSelected={topicContent}
							onSelect={selectHandler}
						>
							JSX
						</TabButton>
						<TabButton
							id="props"
							isIdSelected={topicContent}
							onSelect={selectHandler}
						>
							Props
						</TabButton>
						<TabButton
							id="state"
							isIdSelected={topicContent}
							onSelect={selectHandler}
						>
							State
						</TabButton>
					</menu>
					{tabContent}
				</section>
			</main>
		</div>
	);
}

export default App;
