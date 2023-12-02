import { useEffect, useReducer, useRef, useState } from "react";

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

    useEffect(() => {
        setInterval(() => {
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
        return () => clearInterval(timer); // clean up 코드
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
    }, [time3]);

    return(
        <div>
            {/* <h1>{time1.getHours()}:{time1.getMinutes()}:{time1.getSeconds()}</h1>
            <h1>{time2.getHours()}:{time2.getMinutes()}:{time2.getSeconds()}</h1>
            <h1>{time3.getHours()}:{time3.getMinutes()}:{time3.getSeconds()}</h1> */}
            <Interval />
        </div>
    );
}

function Interval(){
    // 카운터제작 증가카운터 제작 useReducer사용 할 것
    // 컴포넌트의 state와 props는 계속해서 변화할 수 있는 값이며, 값이 변경시 새로운 값으로 재렌더링이 발생됨
    // setInterval 함수는 clearInterval로 중지를 시킬 수 있다.
    const [count1, setCount1] = useState(0);
    useEffect(() => {
        const counter = setInterval(() => {
            setCount1(count1 + 1);
        })
        return () => clearInterval(counter);
    }, [])
    // deps값을 []로 주게된다면 한 번 만 실행이 되기에 1에서 멈춘다.
    // []를 하지 않는다면 계속해서 숫자는 증가 될 것 이다.

    // 해결방법
    // 내부 콜백 사용 
    const [count2, setCount2] = useState(0);
    useEffect(() => {
        const counter = setInterval(() => {
            setCount2(count2 => count2 + 1); // setState를 사용해서 업데이트 방식
        }, 1000);
        return () => clearInterval(counter);
    }, []); 

    // useRef 사용하기
    const [count3, setCount3] = useState(0);
    const counterRef = useRef();

    useEffect(() => {
        counterRef.current = setInterval(() => {
            setCount3(count3 + 1); 
            // setCount3(count3 => count3 + 1) 
        }, 1000)
        return () => clearInterval(counterRef.current);
    }, [count3])

    return(
        <div>
            <h1>{count1}</h1>
            <h1>{count2}</h1>
            <h1>{count3}</h1>
        </div>
    );
} 

function Reducer() {

    const [t, setT] = useState(0);
    const tRef = useRef();

    useEffect(() => {
        const test = setInterval(() => {
            setT(t => t + 1)
        })
        tRef.current = setInterval(() => {
            setT(t => t + 1)
        })
        return () => clearInterval(test);
        return () => clearInterval(tRef.current);
    }, []) // Ref사용시 deps값에 값 넣어야함

    // 증가카운터로 응용하기
    const [count, dispatch] = useReducer((state, action) => {
        if(action === "increase"){
            return state + 1;
        }
    }, 0);

    useEffect(() => {
        const timer = setInterval(() => {
            dispatch("increase");
        }, 1000);
        return () => clearInterval(timer);
    }, [])

    return(
        <div>{count}</div>
    );
}

export default Effect;