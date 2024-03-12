import React from "react";

const Pokemon = ({ name, image }) => {
	return (
		<div>
			<div>{name}</div>
			<div>
				<img src={image} alt="image" />
			</div>
		</div>
	);
};

export default Pokemon;
