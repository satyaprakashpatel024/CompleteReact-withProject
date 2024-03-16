import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	todoList: [{
        id: 1,
        todoData: 'test',
        finished: false,
    }],
};

const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		addTodo: (todo, action) => {
			let todoText = action.payload.todoText;
            let newId = todo.todoList.length;
            todo.todoList.map((t)=>{
                if(t.id === newId){
                    newId++;
                }
            })
			todo.todoList.push({ id: newId, todoData: todoText, finished: false });
		},
		editTodo: (todo, action) => {
			let payloadTodo = action.payload.todo;
			let todoText = action.payload.todoText;
			todo.todoList = todo.todoList.map((t) => {
				if (t.id === payloadTodo.id) {
					t.todoData = todoText;
				}
				return t;
			});
		},
		todoFinished: (todo, action) => {
			let payloadTodo = action.payload.todo;
			let isFinished = action.payload.isFinished;
			todo.todoList = todo.todoList.map((t) => {
				if (t.id === payloadTodo.id) {
					todo.finished = isFinished;
				}
				return t;
			});
		},
		deleteTodo: (todo, action) => {
			let payloadTodo = action.payload.todo;
			todo.todoList = todo.todoList.filter((t) => {
				return t.id !== payloadTodo.id;
			});
		},
	},
});

export const {addTodo,editTodo,todoFinished,deleteTodo} = todoSlice.actions;
export default todoSlice.reducer;