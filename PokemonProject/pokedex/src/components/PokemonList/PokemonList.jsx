import React, { useEffect, useState } from "react";
import axios from "axios";
import "./PokemonList.css";
import Pokemon from "../Pokemon/Pokemon";

const PokemonList = () => {
	const [pokemonList, setPokemonList] = useState([]);
	const [isloading, setIsLoading] = useState(true);

	const POKEDEX_URL = "https://pokeapi.co/api/v2/pokemon";

	async function downloadPokemon() {
		// this downloads the first 20 pokemons
		const response = await axios.get(POKEDEX_URL);
		// this gives the array of pokemons and url from result
		const pokemonResults = response.data.results;
		// console.log(pokemonResults, "ppppppppppp");
		// iterating over the array of pokemons and fetching the data from urls
		// then creating the array of promises that will download the details of these 20 pokemons
		const pokemonResultPromise = pokemonResults.map((pokemon) => axios.get(pokemon.url));
		// this will wait for all the promises to be resolved
		// this will create an array of pokemon objects
		const pokemonData = await axios.all(pokemonResultPromise);
		// now iterate over each pokemon objects from array and extract name,id,image and types
		let result = pokemonData.map((pokeData) => {
			const pokemon = pokeData.data;
			return {
				id: pokemon.id,
				name: pokemon.name,
				image: pokemon.sprites.other.dream_world.front_default,
				types: pokemon.types,
			};
		});
		// console.log(result);
		setPokemonList(result);
		setIsLoading(false);
	}
	useEffect(() => {
		downloadPokemon();
	}, []);

	return (
		<div className="pokemon-list-wrapper">
			<div className="pokemon-wrapper">
				{isloading ? "loading..........." : pokemonList.map((p) => <Pokemon name={p.name} image={p.image} key={p.id} />)}
			</div>
			<div className="controls">
				<button>Prev</button>
				<button>Next</button>
			</div>
		</div>
	);
};

export default PokemonList;
