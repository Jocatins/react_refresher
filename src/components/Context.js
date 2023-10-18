import { createContext, useState } from "react";

const UserContext = createContext();

function Component1() {
	const [user, setUser] = useState("Titan");

	return (
		<>
			<UserContext.Provider>
				<Component2 user={user} />
				<Component3 user={user} />
			</UserContext.Provider>
		</>
	);
}

function Component2({ user }) {
	return (
		<>
			<h2>Component 2</h2>
			<h2>{`Hello ${user} Component 2`}</h2>
		</>
	);
}
function Component3({ user }) {
	return (
		<>
			<h2>Component 3</h2>
			<h2>{`Hello ${user} Component 3`}</h2>
		</>
	);
}
export default Component1;
