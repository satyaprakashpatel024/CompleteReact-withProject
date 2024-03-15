let list1 = [{todoData:"task1",finished:true}]

function todoReducers(state = list1, action) {
	if (action.type == "add_todo") {
		let todoText = action.payload.todoText;
		// console.log(state);
		return [...state, { id: Math.floor((Math.random()*100)/10), todoData: todoText, finished: false }];
	} else if (action.type == "edit_todo") {
		let todo = action.payload.todo;
		let todoText = action.payload.todoText;
		const updatedList = state.map((t) => {
			if (t.id === todo.id) {
				todo.todoData = todoText;
			}
			return t;
		});
		return updatedList;
	} else if (action.type == "delete_todo") {
		let todo = action.payload.todo;
		const updatedList = state.filter((t) => {
			return t.id !== todo.id;
		});
		return updatedList;
	} else if (action.type == "finish_todo") {
		let todo = action.payload.todo;
		let isFinished = action.payload.isFinished;
		const updatedList = state.map((t) => {
			if (t.id === todo.id) {
				todo.finished = isFinished;
			}
			return t;
		});
		return updatedList;
	} else {
		return state;
	}
}

export default todoReducers;
