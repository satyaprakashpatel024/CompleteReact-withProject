// import Todo from "../Todo/Todo.jsx";
// import TodoContext from "../../context/TodoContext.js";
// import { useContext } from "react";
// import TodoDispatchContext from "../../context/TodoDispatchContext.js";

// const TodoList = () => {
// 	const { list } = useContext(TodoContext);
// 	const { dispatch } = useContext(TodoDispatchContext);

// 	function onFinished(todo, isFinished) {
// 		dispatch({
// 			type: "finished_todo",
// 			payload: { todo: todo, isFinished: isFinished },
// 		});
// 	}

// 	function onDelete(todo) {
// 		dispatch({
// 			type: "delete_todo",
// 			payload: { todo },
// 		});
// 	}

// 	function onEdit(todo, todoText) {
// 		dispatch({
// 			type: "edit_todo",
// 			payload: { todo: todo, todoText: todoText },
// 		});
// 	}

// 	return (
// 		<div>
// 			{list.length > 0 &&
// 				list.map((todo) => (
// 					<Todo
// 						key={todo.id}
// 						id={todo.id}
// 						isFinished={todo.finished}
// 						todoData={todo.todoData}
// 						changesFinished={(isFinished) => onFinished(todo, isFinished)}
// 						onDelete={() => onDelete(todo)}
// 						onEdit={(editText) => onEdit(todo, editText)}
// 					/>
// 				))}
// 		</div>
// 	);
// };

// export default TodoList;

import Todo from "../Todo/Todo.jsx";
import TodoContext from "../../context/TodoContext.js";
import { useContext, useState } from "react";

const TodoList = () => {
	const { list, setList } = useContext(TodoContext);
	return (
		<div>
			{list.length > 0 &&
				list.map((todo) => (
					<Todo
						key={todo.id}
						id={todo.id}
						isFinished={todo.finished}
						todoData={todo.todoData}
						changesFinished={(isFinished) => {
							const updatedList = list.map((t) => {
								if (t.id === todo.id) {
									todo.finished = isFinished;
								}
								return t;
							});
							setList(updatedList);
						}}
						onDelete={() => {
							const updatedList = list.filter((t) => {
								return t.id !== todo.id;
							});
							setList(updatedList);
						}}
						onEdit={(todoText) => {
							const updatedList = list.map((t) => {
								if (t.id === todo.id) {
									todo.todoData = todoText;
								}
								return t;
							});
							setList(updatedList);
						}}
					/>
				))}
		</div>
	);
};

export default TodoList;
