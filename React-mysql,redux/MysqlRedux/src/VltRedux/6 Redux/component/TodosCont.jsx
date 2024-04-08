import { useDispatch, useSelector } from "react-redux";
import { addTodo, toggleTodo } from "../modules/Todos";
import { useCallback } from "react";
import TodoColl from "./TodoColl";

function TodosCont () {

    const todos = useSelector(state => state.Todos); // useSelector를 사용해서 상태를 조회한다.
    const dispatch = useDispatch(); // dispatch를 사용하여 action을 취한다.

    const onCreate = (text) => {
        dispatch(addTodo(text)); // 액션생성 함수를 dispatch를 이용해서 사용함.
    }

    const onToggle = useCallback((id)=> {
        dispatch(toggleTodo(id), [dispatch]); // 최적화를 위해 useCallback을 사용함. 
    })

    return(
        <div>
            <TodoColl todos={todos} onCreate={onCreate} onToggle={onToggle} />
        </div>
    );
}

export default TodosCont;