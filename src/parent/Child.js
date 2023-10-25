import React from "react";

export const Child = ({ color, font }) => {
	return (
		<>
			<div>
				<h1 style={{ color: color, fontFamily: font }}>Child color</h1>
			</div>
		</>
	);
};
