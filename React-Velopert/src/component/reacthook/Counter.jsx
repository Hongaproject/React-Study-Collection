import React, { useReducer, useState } from 'react';

function Counter() {
    // 리액트 버전 16.8에 도입된 리액트 훅
    // 리액트 훅을 사용하면 동적으로 상태관리를 할 수 있다. (useState)

    const [number, setNumber] = useState(0); // [첫 번째, 두 번째] 첫 번째는 현재 상태를 나타내고 두 번째는 setter를 뜻함 

    const onDecrease = () => {
        setNumber(number - 1);
    }

    // onClick이벤트는 2가지로 사용이 가능하다. 
    // 함수를 만들어서 사용 or 클릭이벤트 부분에 직접 구현
    
  return (
    <div>
      <h2>{number}</h2>
      <button onClick={() => setNumber(number+1)}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  );
}

function CounterTest() {
  // Reducer란? redux와 다른점은? 
  // 둘 다 상태관리를 도와주는 방법이며 reducer은 따로 다운없이 사용가능 redux는 따로 다운을 하여 사용을 합니다.
  // reducer(로컬) redux(전역)
  // reducer는 간단한 상태 관리서 사용이 됨 redux는 전역에서 사용이 가능하다 보니 대규모서 많이 사용이된다.

  // const [number, setNumber] = useState(0);

  // const onIncrease = () => {
  //   setNumber(prevNumber => prevNumber + 1);
  // };

  // const onDecrease = () => {
  //   setNumber(prevNumber => prevNumber - 1);
  // };
  // // state 사용되는 부분에 사용을 한다.

  // Reducer은  const [number, dispatch] = useReducer(Reducer, initialState)로 사용이되며
  // 2가지 방식으로 보여주려고한다.

  // 1번 방식
  const [number, dispatch] = useReducer(Reducer, 0) 
  
  const onIncrease = () => {
    dispatch({type: 'Increase'});
  }

  const onDecrease = () => {
    dispatch({type: 'Decrease'});
  }

  // 2번 방식
  const [number1, dispatch] = useReducer(Reducer, initialState);
  
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
      <div>
        {number1.count}
        <button onClick={() => dispatch({type: 'increase'})}>+1</button>
        <button onClick={() => dispatch({type: 'decrease'})}>-1</button>
      </div>
    </div>
  );

}

// 2번 방식 밖에다가 initialState값을 설정

const initialState = {count: 0}

function Reducer (state, action) {

  // 1번 방식
  switch(action.type){
    case 'Increase' :
      return state + 1;
    case 'Decrease' :
      return state - 1;
    default:
      return state;
  }

  // 2번 방식
  switch(action.type){
    case 'increase' :
      return {count: state + 1};
    case 'decrease' :
      return {count: state + 1};
    default:
      throw new Error()

  }
}

export default Counter; // 한파일에 여러개 컴포넌트 생성시 export를 할 때 이렇게 하면 된다.



