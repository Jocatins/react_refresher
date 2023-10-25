import ClassChild from "./ClassChild";
import { Component } from "react";

class ClassParent extends Component {
	render() {
		return (
			<>
				<h4>This the parent Component</h4>
				<ClassChild color="green" />
			</>
		);
	}
}
export default ClassParent;
