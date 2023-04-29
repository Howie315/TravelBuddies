import React, { useState } from "react";
// import { Redirect } from "react-router-dom";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [loggedIn, setLoggedIn] = useState(false);

	const handleLogin = (e) => {
		e.preventDefault();

		// Here, you would normally make a request to your authentication API
		// to verify the user's credentials. For the sake of simplicity, we'll
		// just hardcode the username and password for now.
		if (username === "user" && password === "password") {
			setLoggedIn(true);
		} else {
			alert("Invalid username or password");
		}
	};

	// if (loggedIn) {
	// 	// Redirect to the next page if authenticated
	// 	return <Redirect to="/next-page" />;
	// }

	return (
		<div>
			<h1>Login</h1>
			<form onSubmit={handleLogin}>
				<div>
					<label htmlFor="username">Username:</label>
					<input
						type="text"
						id="username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="password">Password:</label>
					<input
						type="password"
						id="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<button type="submit">Login</button>
			</form>
		</div>
	);
};

export default Login;
