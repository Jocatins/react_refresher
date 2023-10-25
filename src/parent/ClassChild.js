import { Component } from "react";

class ClassChild extends Component {
	render() {
		return (
			<>
				<h4 style={{ color: this.props.color }}>This the Child Component</h4>
			</>
		);
	}
}
export default ClassChild;
