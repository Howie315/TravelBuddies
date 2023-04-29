import React from "react";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100vh;
`;

const Title = styled.h1`
	margin-top: 32px;
	text-align: center;
`;

const InputWrapper = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 100px;
`;

const Input = styled.input`
	padding: 12px;
	font-size: 16px;
	border-radius: 8px;
	border: 2px solid #ccc;
	margin-bottom: 16px;
	width: 100%;
	max-width: 400px;
	box-sizing: border-box;

	&:focus {
		outline: none;
		border-color: #333;
	}
`;

const Button = styled.button`
	padding: 12px;
	font-size: 16px;
	border-radius: 8px;
	border: none;
	background-color: #333;
	color: #fff;
	cursor: pointer;
	transition: background-color 0.2s;

	&:hover {
		background-color: #555;
	}
`;

const Home = () => {
	return (
		<Container>
			<Title>Welcome to My Website</Title>
			<InputWrapper>
				<Input type="text" placeholder="Zip Code" />
				<Input type="text" placeholder="Search Flight" />
				<Button>Search</Button>
			</InputWrapper>
		</Container>
	);
};

export default Home;
