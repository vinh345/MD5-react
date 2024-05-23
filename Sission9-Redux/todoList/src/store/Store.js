import {
    configureStore
} from "@reduxjs/toolkit";
import todoR from '../assets/reducer/todosSlice '

const store = configureStore({
    reducer: {
        todos: todoR
    }
}) 

export default store;   