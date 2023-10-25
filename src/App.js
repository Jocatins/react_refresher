import ClassParent from "./parent/ClassParent";
import MemoHook from "./components/MemoHook";
import React from "react";

class App extends React.Component {
	render() {
		return (
			<>
				<MemoHook />

				<ClassParent />
			</>
		);
	}
}
export default App;
