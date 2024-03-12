import "./App.css";
import React from "react";
import CustomRoutes from "./Routes/CustomRoutes.jsx";
import { Link } from "react-router-dom";

function App() {
	return (
		<div className="outer-pokedex">
			<h1 id="pokedex-heading">
				<Link to="/">Pokedex</Link>
			</h1>
			<CustomRoutes />
		</div>
	);
}

export default App;
// https://pokeapi.co/api/v2/pokemon
