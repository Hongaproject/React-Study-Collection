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
// https://ttaerrim.tistory.com/48




// 객체일때는 useMemo를 사용해주면 된다.
// https://victory-ju.tistory.com/entry/React-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EB%A0%8C%EB%8D%94%EB%A7%81-%EC%B5%9C%EC%A0%81%ED%99%94%EC%97%90%EB%8C%80%ED%95%B4-%EC%95%8C%EC%95%84%EB%B3%B4%EC%9E%90-with-useMemo-useCallback-Reactmamo

