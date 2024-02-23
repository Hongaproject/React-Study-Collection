const reducer = (state, action) => { // state와 action을 매개변수로 받는다  
    switch (action.type) { // 방법 1
        case 'INCREMENT':
          return state + 1;
        case 'DECREMENT':
          return state - 1;
        default:
          return state;
    }
    if(action === 'plus'){ // 방법 2
        return state+1;
    }
    else if(action === 'minus'){
        return state-1;
    }
} 

const initialState = { // 초기값을 지정하는 곳

}


function useReducer () {

    // useReducer 사용법 공부
    // 리액트에서 상태 관리를 할 때 useState를 사용해서 관리를 하는데
    // useState말고 useReducer로도 관리를 할 수 있다.
    // useReducer는 외부에서 state를 관리 할 수 있고 다른 파일에서도 가져다가 사용할 수 있다.

    // 간단하게 카운터로 예시를 들어보려고 합니다.
    
    const [number, dispatch] = useReducer(reducer, 0); // 방법 1

    const onIncrease = () => { 
        dispatch({ type: 'INCREMENT' });
    };

    const onDecrease = () => {
        dispatch({ type: 'DECREMENT' });
    };

    const onPlus = () => {
        dispatch('plus')
      }
    
      const onMinus = () =>{
        dispatch('minus')
      }

    return(
        <div>
            {number}
            <button ></button>
            <button ></button>
        </div>
    );
}

export default useReducer;

// useReducer 기본 틀

// const reducer1 = (state, action) => { // state와 action을 매개변수로 받는다  

// }

// const initialState1 = { // 초기값을 지정하는 곳

// }


// function test123 () {
//     const [state, dispatch] = useReducer(reducer, initialState); 
//     return(
//         <div>

//         </div>
//     )
// }