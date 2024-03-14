import React from "react";

const Todo = ({ todoData,isFinished,id }) => {
	console.log(todoData);
	return (
		<div>
			<input type="checkbox" onChange={(e)=>console.log(e.target.checked)}/>
			{todoData}
			<button>Edit</button>
			<button>Delete</button>
		</div>
	);
};

export default Todo;
