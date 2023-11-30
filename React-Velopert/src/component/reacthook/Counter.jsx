import React, { useState } from 'react';

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

function Reducer() {
  // Reducer란? redux와 다른점은? 
  // 둘 다 상태관리를 도와주는 방법이며 reducer은 따로 다운없이 사용가능 redux는 따로 다운을 하여 사용을 합니다.
  // reducer(로컬) redux(전역)
  // reducer는 간단한 상태 관리서 사용이 됨 redux는 전역에서 사용이 가능하다 보니 대규모서 많이 사용이된다.
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    setNumber(prevNumber => prevNumber + 1);
  };

  const onDecrease = () => {
    setNumber(prevNumber => prevNumber - 1);
  };

  // state 사용되는 부분에 사용을 한다.

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );

}

// https://velog.io/@dianestar/JavaScript-React-React%EC%97%90%EC%84%9C-setInterval%EC%9D%98-%ED%99%9C%EC%9A%A9
// https://velog.io/@760kry/React%EC%97%90%EC%84%9C-setInterval-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0
// https://velog.io/@choco1drink/React-%EA%B0%90%EC%86%8C%ED%95%98%EB%8A%94-%EC%B4%88-%EC%B9%B4%EC%9A%B4%ED%8A%B8-%ED%83%80%EC%9D%B4%EB%A8%B8-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0
// https://velog.io/@jaewoneee/%EB%A6%AC%EC%95%A1%ED%8A%B8-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%97%90%EC%84%9C-setTimeout-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0


export default Counter; // 한파일에 여러개 컴포넌트 생성시 export를 할 때 이렇게 하면 된다.



