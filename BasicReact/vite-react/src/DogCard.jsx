import React from "react";
import "./DogCard.css";
import Name from "./Name";
import { Image } from "./Image";

// default export
const DogCard = (props) => {
	let title = "this is a dog card";
	return (
		<div className="dog">
			<h2 style={{fontSize:"40px", color:"red"}}>{title}</h2>
			{/* passing whole jsx component as props  */}
			<Name>
				<h1>{props.name}</h1>
			</Name>
			<Image src={props.image} />
		</div>
	);
};

export default DogCard;

// we have two ways ro export a component
/*
1. by name export 
2. by default export 


*/

/*
*/
