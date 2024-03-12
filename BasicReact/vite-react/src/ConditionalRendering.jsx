import React, { useState } from "react";

// const ConditionalRendering = () => {
// 	const [x, setX] = useState(0);
// 	return (
// 		<>
// 			<h1>Count:{x} is {(x%2)==0?"even":"odd"}</h1>
// 			<button
// 				onClick={() => {
// 					setX(x + 1);
// 				}}>
// 				Inc
// 			</button>
// 			<button
// 				onClick={() => {
// 					setX(x - 1);
// 				}}>
// 				Dec
// 			</button>
// 		</>
// 	);
// };

// export default ConditionalRendering;

const ConditionalRendering = () => {
	// const [isEditing, setEditing] = useState(false);
	const [todos, setTodos] = useState(["task1", "task2", "task3"]);
    console.log(todos,'asdfghjkl');
	return (
		<ul>
			{
            todos.map((todo) =>
				<li>{todo}</li>
			)}
            <button onClick={()=>setTodos([...todos,'new task'])}>click me</button>
		</ul>
	);
};

export default ConditionalRendering;
//  <p>some todo:</p>
// <br />
// <button onClick={()=>setEditing(true)}>click me</button> 

