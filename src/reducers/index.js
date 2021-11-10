import changeTheNumber from "./plusMinus";
import addTodo from "./TodoReducer";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    changeTheNumber,
    addTodo
});

export default rootReducer