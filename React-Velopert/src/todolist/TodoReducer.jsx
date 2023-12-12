/* eslint-disable react-hooks/rules-of-hooks */
import React, { useReducer } from 'react';


const initialTodos = [ // 객체를 지정해줌 초기값 설정
    {
        id: 1,
        text: "프로젝트 생성하기",
        done: true,
    },
    {
        id: 2,
        text: "컴포넌트 생성 및 스타일링 하기",
        done: true,
    },
    {
        id: 3,
        text: "기능 구현하기",
        done: false,
    },
]

function todoReducer (state, action) {  // 사용될 state와 action을 가져와서 return을 해준다.

    // useReducer를 사용해서 상태 관리를 할 것 
    // useReducer를 사용 할 때는 사용할 컴포넌트를 하나 더 만들어야함.
    switch (action.type) {
        case 'CREATE':
          return state.concat(action.todo);
        case 'TOGGLE':
          return state.map(todo =>
            todo.id === action.id ? { ...todo, done: !todo.done } : todo
          );
        case 'REMOVE':
          return state.filter(todo => todo.id !== action.id);
        default:
          throw new Error(`Unhandled action type: ${action.type}`);
    }
    // action
    // CREATE : 초기값에서 action.todo를 추가한다.
    // TOGGLE : 선택된 일의 id와 todo의 값을 비교하여 done값을 바꾼다.
    // REMOVE : filter함수를 이용해서 선택된 id제외한 to를 항목에 추가 함.
}

function todoProvider ({children}) {

    const [state, dispatch] = useReducer(todoReducer, initialTodos);
    return(
        <div>{children}</div>
    )
}

export default todoProvider;