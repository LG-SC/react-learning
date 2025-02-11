import { useState } from "react";
import Header from "./components/Header";
import InputGroup from "./components/InputGroup";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

const INITIAL_INPUT_COLLECTION = {
	initialInvestment : 10000,
	annualInvestment : 1200,
	expectedReturn : 6,
	duration : 10,
}

function App() {
	const [ inputCollection, setInputCollection ] = useState(INITIAL_INPUT_COLLECTION);
	
	const inputIsValid = inputCollection.duration >= 1;
	
	const handleChange = (inputKey, newValue) => {
		setInputCollection((prevInputCollection) => {
			return {
				...prevInputCollection,
				[inputKey]: +newValue,
			};
		});
	}

	return (
		<>
			<Header />
			<section id="user-input">	
				<InputGroup>
					<UserInput 
						type="number" 
						inputName="initialInvestment" 
						labelText="INITIAL INVESTMENT"
						initialValue={inputCollection.initialInvestment}
						handleChange={handleChange}
					/>
					<UserInput 
						type="number" 
						inputName="annualInvestment" 
						labelText="ANNUAL INVESTMENT"
						initialValue={inputCollection.annualInvestment}
						handleChange={handleChange}
					/>
				</InputGroup>
				<InputGroup>
					<UserInput 
						type="number" 
						inputName="expectedReturn" 
						labelText="EXPECTED RETURN"
						initialValue={inputCollection.expectedReturn}
						handleChange={handleChange}
					/>
					<UserInput 
						type="number" 
						inputName="duration" 
						labelText="DURATION"
						initialValue={inputCollection.duration}
						handleChange={handleChange}
					/>
				</InputGroup>
			</section>
			<section id="result">
				{!inputIsValid && <p className="center">Please enter a duration greater than zero.</p>}
				{inputIsValid && <Results inputCollection={inputCollection}/>}
			</section>
			
		</>
	)
}

export default App;
