// Ducks패턴을 사용해서 Todos 모듈도 만들어보기 

// 액션타입 부분 
const ADD_TODO = 'Todos/ADD_TODO';
const TOGGLE_TODO = 'Todos/TOGGLE_TODO';

// 액션 생성함수 
let nextId = 1; // todo서 사용할 id
export const addTodo = (text) => ({
    type: ADD_TODO,
    todo: {
        id: nextId++, // 새 항목 추가하고 nextId값에 1추가
        text
    }
});
export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id
});

// state 초기화 
const initialState = [
    // 이런식으로 객체를 만들어서 배열에 넣어줍니다.
    // { 
    //     id: 1,
    //     text: '예시',
    //     done: false
    // }
]
// 리듀서 
export default function Todos (state = initialState, action) {
    switch(action.type){
        case ADD_TODO:
            return state.concat(action.todo);
        case TOGGLE_TODO:
            return state.map((todo) => (todo.id === action.id ? { ...todo, done: !todo.done} : todo));
        default:
            return state;
    }
}
