import React from "react";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
`;

const InputWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 24px;
`;

const Input = styled.input`
	padding: 8px 16px;
	font-size: 16px;
	border-radius: 8px;
	border: 2px solid #ccc;
	margin: 0 8px;
`;

const Button = styled.button`
	padding: 8px 16px;
	font-size: 16px;
	border-radius: 8px;
	border: none;
	background-color: #333;
	color: #fff;
	cursor: pointer;
`;

const Home = () => {
	return (
		<Container>
			<h1>Welcome to my Home Page</h1>
			<InputWrapper>
				<label>Search Query 1:</label>
				<Input type="text" placeholder="Enter your search query here" />
				<Button>Search</Button>
			</InputWrapper>
			<InputWrapper>
				<label>Search Query 2:</label>
				<Input type="text" placeholder="Enter your search query here" />
				<Button>Search</Button>
			</InputWrapper>
		</Container>
	);
};

export default Home;
