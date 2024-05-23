import { combineReducers, createStore } from 'redux';
import todoReducer from '../reducers/todoReducer';

const store = createStore(combineReducers({
    todoReducer:todoReducer
}));

export default store;
