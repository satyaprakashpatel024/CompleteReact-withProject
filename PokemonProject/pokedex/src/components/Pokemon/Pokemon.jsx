import React from "react";
import './Pokemon.css';
import { Link } from "react-router-dom";
// this component is used in PokemonList component
const Pokemon = ({ name, image,id }) => {
	return (
		<div className="pokemon">
			<Link to={`/pokemon/${id}`}>			
			<div className="pokemon-name">{name}</div>
			<div className="">
				<img className="pokemon-image" src={image} alt="image" />
			</div>
			</Link>

		</div>
	);
};

export default Pokemon;
