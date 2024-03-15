// import React, { useState } from "react";

// const Todo = ({ todoData, isFinished, changesFinished, onDelete, onEdit }) => {
// 	const [finished, setFinished] = useState(isFinished);
// 	const [isEditing, setIsEditing] = useState(false);
// 	const [editText, setEditText] = useState(todoData);
// 	return (
// 		<div>
// 			<input
// 				type="checkbox"
// 				checked={finished}
// 				onChange={(e) => {
// 					setFinished(e.target.checked);
// 					changesFinished(e.target.checked);
// 				}}
// 			/>
// 			{isEditing ? <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)} /> : <span>{todoData}</span>}
// 			<button
// 				onClick={() => {
// 					setIsEditing(!isEditing);
// 					onEdit(editText);
// 				}}>
// 				{!isEditing ? "Edit" : "Save"}
// 			</button>
// 			{/* two ways to delete */}
// 			{/* <button onClick={()=>onDelete()}>Delete</button> */}
// 			<button onClick={onDelete}>Delete</button>
// 		</div>
// 	);
// };

// export default Todo;


import React, { useState } from "react";

const Todo = ({ todoData, isFinished, changesFinished, onDelete, onEdit }) => {
	const [finished, setFinished] = useState(isFinished);
	const [isEditing, setIsEditing] = useState(false);
	const [editText, setEditText] = useState(todoData);
	return (
		<div>
			<input
				type="checkbox"
				checked={finished}
				onChange={(e) => {
					setFinished(e.target.checked);
					changesFinished(e.target.checked);
				}}
			/>
			{isEditing ? <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)} /> : <span>{todoData}</span>}
			<button
				onClick={() => {
					setIsEditing(!isEditing);
					onEdit(editText);
				}}>
				{!isEditing ? "Edit" : "Save"}
			</button>
			{/* two ways to delete */}
			{/* <button onClick={()=>onDelete()}>Delete</button> */}
			<button onClick={onDelete}>Delete</button>
		</div>
	);
};

export default Todo;
