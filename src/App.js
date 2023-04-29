// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import React, { Component } from "react";
import ReactDom from "react-dom";
import Login from "./Components/Login"; // Import the Login component
import Home from "./Components/Home"; // Import the Login component
function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Home />
			</header>
		</div>
	);
}

export default App;
