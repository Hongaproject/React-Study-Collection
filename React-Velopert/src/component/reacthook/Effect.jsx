import { useEffect, useRef, useState } from "react";

function Effect() {
    // Effect사용법 및 setInterval, Timeout사용하기.
    // 보통 Interval은 1초마다 실행을 하게 싶을 때 사용해 주고 Timeout은 1초 후에 한 번 사용을 하고 싶을 때 사용합니다.
    // 주로 interval은 타이머, Timeout은 쇼핑몰서 매진임박 아님 재고 수량등을 알려줄 때 사용합니다.

    // setInterval과 Timeout으로 타이머를 간단하게 제작한다.
    // Timeout
    const [time1, setTime1] = useState(new Date()); // 현재 시간을 받아오기 위해 작성함. 
    
    useEffect(() => {
        setTimeout(() => {
            setTime1(new Date());
        }, 1000); 
    })

    // Interval
    // useRef 사용하는 이유 리액트는 상태값이 변하면 재렌더링을 함
    // 지금 아래 코드도 작동은 하지만 리액트에서 상태값이 변경 할 떄 마다 재렌더링이 되고 있다.
    // 재렌더링이 되면 코드를 작동시키면 에러가 나타나게 된다. 숫자 바뀌는 속도가 빨라진다던가 등
    // setInterval부분이 여러 번 실행되어서 중첩된 현상이다.
    // deps값을 넣지 않아 실행 최초 마운트시에만 setInterval이 등록되지만 이것도 완벽한 방법이 아님. 
    const [time2, setTime2] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime2(new Date());
        }, 1000)
        return () => clearInterval(timer);
    }, []);

    // useRef사용
    // current부분에 참조 값을 저장하여 사용함 
    // useEffect의 return 값으로 clearInterval을 호출하면 컴포넌트가 언마운트 될 때 실행
    const [time3, setTime3] = useState(new Date());
    const timeRef = useRef();

    useEffect(() => {
        timeRef.current = setInterval(() => {
            setTime3(new Date());
        }, 1000)
        return () => clearInterval(timeRef.current);
    })

    return(
        <div>
            <h1>{time1.getHours()}:{time1.getMinutes()}:{time1.getSeconds()}</h1>
            <h1>{time2.getHours()}:{time2.getMinutes()}:{time2.getSeconds()}</h1>
            <h1>{time3.getHours()}:{time3.getMinutes()}:{time3.getSeconds()}</h1>
        </div>
    );
}

function Interval(){
    // 카운터제작 감소카운터 증가카운터 제작 useReducer사용 할 것

    return(
        <div></div>
    );
} 

function Timeout(){
    // 알림창 제작 
    return(
        <div></div>
    );
} 

export default Effect;