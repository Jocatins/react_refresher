import { useState } from "react";

// Multiple Inputs

function MyForm() {
	const [inputs, setInputs] = useState({});

	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs((values) => ({ ...values, [name]: value }));
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(inputs);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>Enter your name</label>
			<input
				type="text"
				name="username"
				value={inputs.username || ""}
				onChange={handleChange}
			/>
			<label>Enter your Age</label>
			<input
				type="number"
				name="age"
				value={inputs.age || ""}
				onChange={handleChange}
			/>

			<input type="submit" />
		</form>
	);
}

export default MyForm;
