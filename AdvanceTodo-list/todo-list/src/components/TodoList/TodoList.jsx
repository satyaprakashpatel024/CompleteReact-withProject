import Todo from "../Todo/Todo.jsx";

const TodoList = ({ list }) => {
	return <div>{list.length > 0 && list.map((todo) => <Todo key={todo.id} id={todo.id} todoData={todo.todoData} isFinished={todo.finished} />)}</div>;
};

export default TodoList;
