/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./PokemonDetails.css";

const PokemonDetails = () => {
	const { id } = useParams();
	// console.log(id,'iiiiiiidddddddddddddd');
	const [pokemon, setPokemon] = useState({});

	async function downloadPokemon() {
		const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
		// console.log(response.data.types, "ppppppppppp");
		// return pokemon.json;
		setPokemon({
			name: response.data.name,
			image: response.data.sprites.other.dream_world.front_default,
			weight: response.data.weight,
			height: response.data.height,
			types: response.data.types.map((t) => t.type.name),
			abilities: response.data.abilities.map((a) => a.ability.name),
			stats: response.data.stats.map((s) => s.stat.name),
			moves: response.data.moves.map((m) => m.move.name),
		});
	}
	useEffect(() => {
		downloadPokemon();
	}, [id]);

	return (
		<div className="pokemon-details-wrapper">
			<img className="pokemon-details-image" src={pokemon.image} alt="image" />
			<div className="pokemon-details-name"><span>{pokemon.name}</span></div>
			<div className="pokemon-details-height">Height : <span>{pokemon.height}</span> </div>
			<div className="pokemon-details-weight">Weight : <span>{pokemon.weight}</span></div>
			<div className="pokemon-details-types">{pokemon.types && pokemon.types.map((t) => <div key={t}>{t}</div>)}</div>
		</div>
	);
};

export default PokemonDetails;
