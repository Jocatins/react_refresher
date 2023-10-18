import React from "react";

class App extends React.Component {
	constructor() {
		super();
		this.state = { brand: "ford", color: "red", year: 1967, show: true };
	}

	deiHeader = () => {
		this.setState({ show: false });
	};
	componentDidMount() {
		setTimeout(() => {
			this.setState({ year: 2023, color: "blue", brand: "benz" });
		}, 5000);
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		document.getElementById("div1").innerHTML =
			"Before the update, the favorite was " +
			prevState.color +
			"The brand was " +
			prevState.brand;
	}

	componentDidUpdate() {
		document.getElementById("div2").innerHTML =
			"After updating the state. the favorite color is -  " +
			this.state.color +
			"The brand is " +
			this.state.brand;
	}
	changeColor = () => {
		this.setState({ color: "blue" });
	};

	render() {
		let myHeader;
		if (this.state.show) {
			myHeader = <Child />;
		}
		return (
			<>
				<h2>I am a {this.state.color} car</h2>
				{/* <button onClick={this.changeColor}>Change car state</button> */}
				<h3>My car brand is {this.state.brand}</h3>
				<div id="div1"></div>
				<div id="div2"></div>
				<h3>{myHeader}</h3>
				<button onClick={this.deiHeader}>Remove header</button>
			</>
		);
	}
}

class Child extends React.Component {
	componentWillUnmount() {
		alert("The componnet has been unmounted");
	}
	render() {
		return <h5>Header Comp</h5>;
	}
}

export default App;
