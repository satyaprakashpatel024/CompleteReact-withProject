/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from "react";
import { useParams } from "react-router-dom";
import "./PokemonDetails.css";
import usePokemonDetails from "../../hooks/usePokemonDetails";

const PokemonDetails = () => {
	const { id } = useParams();
	const [pokemon] = usePokemonDetails(id);

	return (
		<div className="pokemon-details-wrapper">
			<img className="pokemon-details-image" src={pokemon.image} alt="image" />
			<div className="pokemon-details-name">
				<span>{pokemon.name}</span>
			</div>
			<div className="pokemon-details-height">
				Height : <span>{pokemon.height}</span>{" "}
			</div>
			<div className="pokemon-details-weight">
				Weight : <span>{pokemon.weight}</span>
			</div>
			<div className="pokemon-details-types">{pokemon.types && pokemon.types.map((t) => <div key={t}>{t}</div>)}</div>
			{pokemon.types && pokemon.similarPokemons && (
				<div>
					More {pokemon.types[0]} type pokemons
					<ul>
						{pokemon.similarPokemons.map((p) => (
							<li key={p.pokemon.url}>{p.pokemon.name}</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

export default PokemonDetails;
