/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Search from "../Search/Search";
import './Pokedex.css'
import PokemonList from "../PokemonList/PokemonList";
import PokemonDetails from "../PokemonDetails/PokemonDetails";

const Pokedex = () => {
	const [searchTerm,setSearchterm] = useState('');
	
	return (
		<div className="pokedex-wrapper">
			<Search  updateSearchTerm={setSearchterm}/>

            {(!searchTerm)?<PokemonList/>:<><PokemonDetails key={searchTerm} pokemonName={searchTerm}/></>}
		</div>
	);
};

export default Pokedex;
