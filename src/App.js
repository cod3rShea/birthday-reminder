import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
	const [people, setPeople] = useState(data);
	console.log("this is people", people);

	return (
		<main>
			<section className="container"></section>
		</main>
	);
}
export default App;
