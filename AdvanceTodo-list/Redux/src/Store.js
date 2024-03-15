import { createStore, combineReducers } from "redux";
// reducer import
import TodoReducers from "./reducers/TodoReducer";
// combining reducers
const reducers = combineReducers({ todo: TodoReducers });
// creating stores
const Store = createStore(reducers);

export default Store;
