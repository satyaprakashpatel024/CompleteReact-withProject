/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";

function usePokemonDetails(id, pokemonName) {
	const [pokemon, setPokemon] = useState({});

	async function downloadPokemon() {
		let response;
		try {
			if (pokemonName) {
				console.log(pokemonName, "name");
				response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
			} else {
				response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
			}
			const pokemonOfSameTypes = await axios.get(`https://pokeapi.co/api/v2/type/${response.data.types ? response.data.types[0].type.name : ""}`);
			// console.log(response.data.types, "ppppppppppp");
			// console.log(pokemonOfSameTypes.data.pokemon, "pokemonOfSameTypes");
			setPokemon((state) => ({
				...state,
				name: response.data.name,
				image: response.data.sprites.other.dream_world.front_default,
				weight: response.data.weight,
				height: response.data.height,
				types: response.data.types.map((t) => t.type.name),
				similarPokemons: pokemonOfSameTypes.data.pokemon,
				abilities: response.data.abilities.map((a) => a.ability.name),
				stats: response.data.stats.map((s) => s.stat.name),
				moves: response.data.moves.map((m) => m.move.name),
			}));
			// console.log(response.data.types, "types of pokemon");
			setPokemonListState({ ...pokemonListState, type: response.data.types ? response.data.types[0] : "" });
		} catch (error) {
			console.log("something went wrong");
		}
	}

	const [pokemonListState, setPokemonListState] = useState({});

	useEffect(() => {
		try {
			downloadPokemon();
		} catch (err) {
			console.log(err);
		}
		// console.log(pokemon, pokemonListState, "pokemon");
	}, []);

	return [pokemon];
}

export default usePokemonDetails;
