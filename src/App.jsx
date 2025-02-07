import "./App.css";
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcepts";
import { useState } from "react";
import { CORE_CONCEPTS } from "./data";
import TabButton from "./components/TabButton";

function App() {
	const [count, setCount] = useState(0);
	const [tabContent, setTabcontent] = useState('Please select a button.');

	const selectHandler = (sender) => {
		console.log(sender.id);
		setTabcontent(sender.id);
	}

	return (
		<div>
			<Header/>
			<main>
				<section id="core-concepts">
					<h2>Time to get started!</h2>
					<ul>
						<CoreConcept 
							title={CORE_CONCEPTS[0].title}
							description={CORE_CONCEPTS[0].description}
							image={CORE_CONCEPTS[0].image}
						/>
						<CoreConcept {...CORE_CONCEPTS[1]} />
						<CoreConcept {...CORE_CONCEPTS[2]} />
						<CoreConcept {...CORE_CONCEPTS[3]} />

					</ul>
						<button onClick={() => setCount((count) => count + 1)}>Count!</button>
					<h2>Count is {count}</h2>
				</section>
				<section id="examples">
					<h2>Examples</h2>
					<menu>
						<TabButton id="Meow" onSelect={selectHandler}>Meow</TabButton>
						<TabButton id="Woof" onSelect={selectHandler}>Woof</TabButton>
						<TabButton id="Lmao" onSelect={selectHandler}>Lmao</TabButton>
						<TabButton id="Bruh" onSelect={selectHandler}>Bruh</TabButton>
					</menu>
					<p>{tabContent}</p>
				</section>

			</main>
		</div>
	);
}
export default App;
