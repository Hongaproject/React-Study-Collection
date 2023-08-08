import { useReducer, useState } from "react";

// useReducer 사용 
// useState와 동일하게 상태 업데이트 를 진행시킬수있다. 

function reducer(state, action) {
    switch (action.type){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

function Counter(){
    const [number, dispatch] = useReducer(reducer, 0);

    const onIncrease = () => {
        dispatch({type: 'INCREMENT'});
    }


    return(
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+</button>
            <button onClick={()=> dispatch({type: 'DECREMENT'})}>-</button>
            {/* 사용자가 버튼 클릭시 setNumber 함수 호출 state변수 갱신 후 리렌더링 하여 보여짐  */}
        </div>
    );
}

export default Counter;

// function Counter(){

//     // 16.8부터 Hooks가 도입되면서 부터 함수형 컴포넌트서 상태관리가 가능해짐.
//     const [number, setNumber] = useState(0); // 초기값 설정 

//     const onIncrease = () => {
//         setNumber(number+1);
//     }

//     return(
//         <div>
//             <h1>{number}</h1>
//             <button onClick={onIncrease}>+</button>
//             <button onClick={()=> setNumber(number-1)}>-</button>
//             {/* 사용자가 버튼 클릭시 setNumber 함수 호출 state변수 갱신 후 리렌더링 하여 보여짐  */}
//         </div>
//     );
// }

// export default Counter;