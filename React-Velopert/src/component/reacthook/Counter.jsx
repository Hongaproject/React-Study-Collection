import React, { useState } from 'react';

function HookApp() {
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

export default HookApp;
