import Todo from "./Todo.jsx";
import { useSelector } from "react-redux";

const TodoList = ({ editTodo, deleteTodo, todoFinished }) => {
	const list = useSelector((state) => state.todo.todoList);
	function onFinished(todo, isFinished) {
		todoFinished({ todo, isFinished });
	}

	function onDelete(todo) {
		deleteTodo({ todo });
	}

	function onEdit(todo, todoText) {
		editTodo({ todo, todoText });
	}

	return (
		<div>
			{list.length > 0 &&
				list.map((todo) => (
					<Todo
						key={todo.id}
						id={todo.id}
						isFinished={todo.finished}
						todoData={todo.todoData}
						changesFinished={(isFinished) => onFinished(todo, isFinished)}
						onDelete={() => onDelete(todo)}
						onEdit={(editText) => onEdit(todo, editText)}
					/>
				))}
		</div>
	);
};

export default TodoList;
