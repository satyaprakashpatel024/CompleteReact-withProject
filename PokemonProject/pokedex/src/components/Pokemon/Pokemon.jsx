import React from "react";
import './Pokemon.css';

const Pokemon = ({ name, image }) => {
	return (
		<div className="pokemon">
			<div className="pokemon-name">{name}</div>
			<div className="">
				<img className="pokemon-image" src={image} alt="image" />
			</div>
		</div>
	);
};

export default Pokemon;
