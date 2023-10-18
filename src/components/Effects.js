import React, { useEffect, useState } from "react";

function Timer() {
	const [count, setCount] = useState(0);
	// const [calculation, setCalculation] = useState(0);

	// Dependency Array
	// useEffect(() => {
	// 	setCalculation(() => count * 2);
	// 	console.log("runs when called");
	// }, [count]);

	// Clean up

	useEffect(() => {
		let timer = setTimeout(() => {
			setCount((count) => count + 1);
		}, 1000);

		return () => {
			clearTimeout(timer);
			console.log("timer cleared");
		};
	}, []);

	return (
		<>
			<h1>I've rendered {count} times!</h1>
			<button onClick={() => setCount((c) => c + 1)}>+</button>
			{/* <p>Calculation: {calculation}</p> */}
		</>
	);
}
export default Timer;
