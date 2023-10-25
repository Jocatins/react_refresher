import { Child } from "./Child";
import React from "react";

export const Parent = () => {
	return (
		<>
			<div>Parent</div>
			<Child color="blue" font="Georgia" />
		</>
	);
};
