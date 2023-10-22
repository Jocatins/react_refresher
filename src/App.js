import Call from "./components/Callback";
import MemoHook from "./components/MemoHook";
import { Parent } from "./parent/Parent";
import React from "react";

class App extends React.Component {
	render() {
		return (
			<>
				<MemoHook />
				<Parent />
			</>
		);
	}
}
export default App;
