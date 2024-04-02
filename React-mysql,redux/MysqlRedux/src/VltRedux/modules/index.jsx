import { combineReducers } from "redux";
import Count from "./Count";

// 루프 리듀서 제작 -> 리듀서가 여러 개 일 때 1개의 리듀서로 합쳐서 사용이 가능하다
// 합쳐진 리듀서를 루프 리듀서라고 하며 리덕스 내장 함수인 combineReducers를 사용해서 루프 리듀서를 제작한다.

const rootReducer = combineReducers({ Count });

export default rootReducer;