/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./PokemonList.css";
import Pokemon from "../Pokemon/Pokemon";
import usePokemonList from "../../hooks/usePokemonList";

const PokemonList = () => {
	const [pokemonListState, setPokemonListState] = usePokemonList("https://pokeapi.co/api/v2/pokemon");
	return (
		<div className="pokemon-list-wrapper">
			<div className="pokemon-wrapper">
				{pokemonListState.isloading ? "loading..........." : pokemonListState.pokemonList.map((p) => <Pokemon name={p.name} image={p.image} id={p.id} key={p.id} />)}
			</div>
			<div className="controls">
				<button
					disabled={pokemonListState.prevUrl == null}
					onClick={() => {
						const urlToSet = pokemonListState.prevUrl;
						// console.log(urlToSet);
						setPokemonListState({
							...pokemonListState,
							pokedexUrl: urlToSet,
						});
					}}>
					Prev
				</button>
				<button
					disabled={pokemonListState.nextUrl == null}
					onClick={() => {
						const urlToSet = pokemonListState.nextUrl;
						// console.log(urlToSet);
						setPokemonListState({
							...pokemonListState,
							pokedexUrl: urlToSet,
						});
					}}>
					Next
				</button>
			</div>
		</div>
	);
};

export default PokemonList;
