import { combineReducers } from "redux";
import Counter from "./Counter";
import Todos from "./Todos";

// 루트 리듀서 부분 -> 리듀서를 합치는 부분.

const rootReducer2 = combineReducers({ Counter, Todos});

export default rootReducer2;