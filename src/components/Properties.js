import React from "react";

// function Car(props) {
// 	return <h3>It is a {props.brand.name}</h3>;
// }

// function Garage() {
// 	const carName = { name: "Benz", model: "Mercedes" };
// 	return (
// 		<>
// 			<h1>Who is in the garage</h1>
// 			<Car brand={carName} />
// 		</>
// 	);
// }

// function Football() {
// 	const shoot = (a, b) => {
// 		alert(b.type);
// 	};
// 	return (
// 		<>
// 			<button onClick={(event) => shoot("Goal", event)}>Shoot</button>
// 		</>
// 	);
// }

function Cars(props) {
	return (
		<>
			<h3>You have {props.brand} cars in your garage</h3>
			<h3>You have {props.brand.id} cars in your garage</h3>
		</>
	);
}

function Garage(props) {
	const cars = [
		{ id: 1, brand: "Ford" },
		{ id: 2, brand: "BMW" },
		{ id: 3, brand: "Audi" },
	];
	// const cars = props.cars

	return (
		<>
			<h1>Garage</h1>
			<ul>
				{cars.map((car, index) => (
					<Cars brand={car.brand} key={car.id} />
				))}
			</ul>
		</>
	);
}
export default Garage;
