import React, { useState } from "react";

const Todo = ({ todoData,isFinished,changesFinished }) => {
	const [finished,setFinished] = useState(isFinished);
	return (
		<div>
			<input type="checkbox" checked={finished} onChange={(e)=>{
                setFinished(e.target.checked)
                changesFinished(e.target.checked)
            }}/>
			{todoData}
			<button>Edit</button>
			<button>Delete</button>
		</div>
	);
};

export default Todo;
