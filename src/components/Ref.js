// It can be used to store a mutable value that does not cause a re-render when updated.

import { useEffect, useRef, useState } from "react";

// It can be used to access a DOM element directly
// Use useRef to track application renders.

// function UseRefHook() {
// 	const [inputValue, setInputValue] = useState("");

// 	const count = useRef(0);

// 	useEffect(() => {
// 		count.current = count.current + 1;
// 	});

// 	return (
// 		<>
// 			<input
// 				type="text"
// 				value={inputValue}
// 				onChange={(e) => setInputValue(e.target.value)}
// 			/>
// 			<h2>Render Count: {count.current} </h2>
// 		</>
// 	);
// }
// export default UseRefHook;

// It can be used to access a DOM element directly
// Use useRef to focus the input:
// function UseRefHook() {
// 	const inputElement = useRef();

// 	const focusInput = () => {
// 		inputElement.current.focus();
// 	};

// 	return (
// 		<>
// 			<input type="text" ref={inputElement} />
// 			<button onClick={focusInput}>Focus input</button>
// 		</>
// 	);
// }
// export default UseRefHook;

function UseRefHook() {
	const [inputValue, setInputValue] = useState("");
	const previousInputValue = useRef("");

	useEffect(() => {
		previousInputValue.current = inputValue;
		console.log("input value changed");
	}, [inputValue]);

	return (
		<>
			<input
				type="text"
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
			/>
			<h3>Current Value : {inputValue} </h3>
			<h3>Previous Value : {previousInputValue.current} </h3>
		</>
	);
}
export default UseRefHook;
