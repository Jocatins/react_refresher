import { useCallback, useState } from "react";

import Todos from "./Todos";

const Callback = () => {
	const [count, setCount] = useState(0);
	const [todos, setTodos] = useState([]);

	const increment = () => {
		setCount((c) => c + 1);
	};
	// Without callback
	// const addTodo = () => {
	// 	setTodos((t) => [...t, "New Todo"]);
	// };

	// With Callback
	const addTodo = useCallback(() => {
		setTodos((t) => [...t, "New Todo"]);
	}, []);

	return (
		<>
			<Todos todos={todos} addTodo={addTodo} />
			<hr />
			<div>
				Count : {count}
				<button onClick={increment}>+</button>
			</div>
		</>
	);
};
export default Callback;
