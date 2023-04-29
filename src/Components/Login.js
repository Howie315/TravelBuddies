import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LoginContainer = styled.div`
	display: flex;
	flex-direction: row;
	height: 100vh;
`;

const LeftContainer = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: #f8f8f8;
`;

const Title = styled.h1`
	font-size: 3rem;
	margin-bottom: 1rem;
`;

const LoginFormContainer = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 2rem;
`;

const LoginForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	max-width: 400px;
`;

const RegisterLink = styled(Link)`
	margin-top: 1rem;
`;

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
		<LoginContainer>
			<LeftContainer>
				<Title>Travel Buddies</Title>
			</LeftContainer>
			<LoginFormContainer>
				<h1>Login</h1>
				<LoginForm onSubmit={handleLogin}>
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
				</LoginForm>
				<RegisterLink to="">Register</RegisterLink>
			</LoginFormContainer>
		</LoginContainer>
	);
};

export default Login;
