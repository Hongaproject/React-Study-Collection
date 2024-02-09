// 렌더링
// 함수를 호출 할 때 렌더라고 하며 virtual DOM에서 real DOM으로 반환 될 때 커밋이라고 한다.
// App컴포넌트가 호출되어 내부 로직들이 실행이 되고 return문을 통해 리액트 엘리먼트를 반환하는 것을 렌더링이라고 한다.

import React, { useState } from 'react';

// 리렌더링
// 상태값의 변화가 생기면 리렌더링 됨.
// 리렌더링 조건 props, state 변경 시에 된다.

function a () {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [click, setClick] = useState(0);

    // 버튼을 클릭 시 마다 state의 값이 변하기 때문에 리렌더링 된다.
    return(
        <div>
            <h1>{click}</h1>
            <button onClick={()=> setClick(click + 1)}>클릭</button> 
        </div>
    );
}

export default a;

// 리렌더링 최적화 참조 값이 안변하게 만들면 불필요한 렌더링을 방지 할 수 있음.
// React.memo, useCallback을 사용하면 최적화를 할 수 있음 (객체 말고)
// 객체일때는 useMemo를 사용해주면 된다.

// 리렌더링 최적화 부분 작업 

function First ({number}) {
    console.log("number rendering...");
    return(
      <div>
        <h1>First CP {number}</h1>
      </div>
    );
  }
  
  function Second ({onClick}) {
    console.log("second rendering...");
  
    return(
      <div>
        <h1>Second CP</h1>
        <button onClick={onClick}>Second click</button>
      </div>
    );
  }
  
  export default React.memo(Second);
  
  
  function App() {
  
    const [number, setNumber] = useState(0); // 버튼 클릭시 state값이 변경되면서 리렌더링 발생
  
    const onClick = useCallback(() => { // 콜백을 사용하여 참조값을 가지게 함.
      console.log("click");
    }, []);
    // 하지만 useCallback을 사용했다고 해서 리렌더링이 안일어나지 않는다.
  
    // 이유는 렌더링 프로세스르 알아야한다.
    // 1. state와 props 값이 변경되었을 때
    // 2. Render Phase 변경이 필요한 부분
    // 3. Commit Phase 변경을 직접 한다.
  
  
    const profileObj = {
      nane: "홍가",
      age: 27
    }
  
    const memoProfileObj = useMemo(()=> profileObj, []);
    // useCallback과 다르게 useMemo는 호출 결과값을 기억하기 때문에 리렌더링이 되징 않는다.
  
    return (  
      <>
        <h1>안녕하세요.</h1>
        <button onClick={()=> setNumber(number + 1)}>APP 클릭</button> 
        <First number={number}/>
        <Second onClick={onClick} memoProfileObj={memoProfileObj}/>
      </>
    );
  }
  
  export default App;
