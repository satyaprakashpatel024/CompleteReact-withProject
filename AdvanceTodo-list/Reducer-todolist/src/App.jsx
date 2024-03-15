import { useReducer, useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo/AddTodo.jsx";
import TodoList from "./components/TodoList/TodoList.jsx";
import TodoContext from "./context/TodoContext.js";
import todoReducers from "./reducers/TodoReducer.js";
import TodoDispatchContext from "./context/TodoDispatchContext.js";

function App() {
	let data = [
		{ id: 1, todoData: "task 1", finished: false },
		{ id: 2, todoData: "task 2", finished: true },
	];

	const [list, dispatch] = useReducer(todoReducers,data);

	return (
		<TodoContext.Provider value={{ list }}>
			<TodoDispatchContext.Provider value={{ dispatch }}>
				<AddTodo/>
				<TodoList />
			</TodoDispatchContext.Provider>
		</TodoContext.Provider>
	);
}

export default App;
