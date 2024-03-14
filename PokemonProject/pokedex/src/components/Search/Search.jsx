/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Search.css";
import useDebaounce from "../../hooks/useDebaounce";

const Search = ({updateSearchTerm}) => {
    const debounceCallBack = useDebaounce((e)=>{updateSearchTerm(e.target.value)});
	// const [searchTerm, setSearchterm] = useState("");
	return (
		<div className="search-wrapper">
			<input 
                type="text" 
                name="" 
                id="pokemon-name-search" 
                placeholder="pokemon name" 
                onChange={(e)=>debounceCallBack(e,'callback')}    
            />
		</div>
	);
};

export default Search;
