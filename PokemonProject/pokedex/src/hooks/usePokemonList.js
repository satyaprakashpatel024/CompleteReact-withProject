/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import axios from "axios";

function usePokemonList() {
	const [pokemonListState, setPokemonListState] = useState({
		pokemonList: [],
		isloading: true,
		pokedexUrl: "https://pokeapi.co/api/v2/pokemon",
		nextUrl: "",
		prevUrl: "",
	});

	async function downloadPokemon() {
		setPokemonListState((state) => ({...state, isloading: true }));
		// this downloads the first 20 pokemons
		const response = await axios.get(pokemonListState.pokedexUrl);
		// console.log(response, "response");
		// this gives the array of pokemons and url from result
		const pokemonResults = response.data.results;
		// iterating over the array of pokemons and fetching the data from urls
		// console.log(response.data.results, "response");
		// console.log(pokemonListState,'pokemonListState1');
		// then creating the array of promises that will download the details of these 20 pokemons
		setPokemonListState((state) => ({
			...state,
			nextUrl: response.data.next,
			prevUrl: response.data.previous,
		}));
		const pokemonResultPromise = pokemonResults.map((pokemon) => axios.get(pokemon.url));
		// this will wait for all the promises to be resolved
		// this will create an array of pokemon objects
		const pokemonData = await axios.all(pokemonResultPromise);
		// now iterate over each pokemon objects from array and extract name,id,image and types
		let pokeListResult = pokemonData.map((pokeData) => {
			const pokemon = pokeData.data;
			return {
				id: pokemon.id,
				name: pokemon.name,
				image: pokemon.sprites.other.dream_world.front_default,
				types: pokemon.types,
			};
		});
		setPokemonListState((state) => ({
			...state,
			pokemonList: pokeListResult,
			isloading: false,
		}));
		// console.log(pokemonListState,'result');
	}

	useEffect(() => {
		downloadPokemon();
	}, [pokemonListState.pokedexUrl]);

	return [pokemonListState, setPokemonListState];
}

export default usePokemonList;

/**
 * // optimised way to change state using object
    const [pokemonListState, setPokemonListState] = useState({
        pokemonList: [],
        isloading: true,
        pokedexUrl: "https://pokeapi.co/api/v2/pokemon",
        nextUrl: "",
        prevUrl: "",
    });    
 */
