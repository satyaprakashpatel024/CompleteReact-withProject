import React from "react";
import { useState } from "react";
const Counter = () => {
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);
	return (
		<>
			Count = {x}
			<button
				onClick={() => {
					setX(x+1);
				}}>
				Inc
			</button>
			<button
				onClick={() => {
					setX(x-1);
				}}>
				Dec
			</button>

            Count = {y}
			<button
				onClick={() => {
					setY(y+1);
				}}>
				Inc
			</button>
			<button
				onClick={() => {
					setY(y-1);
				}}>
				Dec
			</button>
		</>
	);
};

export default Counter;
