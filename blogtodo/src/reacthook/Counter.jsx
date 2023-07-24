import { useState } from "react";

function Counter(){

    // 16.8부터 Hooks가 도입되면서 부터 함수형 컴포넌트서 상태관리가 가능해짐.
    const [number, setNumber] = useState(0); // 초기값 설정 

    const onIncrease = () => {
        setNumber(number+1);
    }

    return(
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+</button>
            <button onClick={()=> setNumber(number-1)}>-</button>
            {/* 사용자가 버튼 클릭시 setNumber 함수 호출 state변수 갱신 후 리렌더링 하여 보여짐  */}
        </div>
    );
}

export default Counter;