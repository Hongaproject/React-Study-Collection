
// useEffect란? -> 리액트 훅에 있는 기능이며 16.8에 도입되었습니다.
// 클래스 컴포넌트서 사용되던 라이프 사이클 기능을 함수형 컴포넌트에서도 사용할 수 있도록 도와주는 역할을 합니다.

import { useEffect, useState } from "react";

export default function UseEffect () {

    const [count, setCount] = useState(0);
    const [showTimer, setShowTimer] = useState(true);

    useEffect(() => {
        if(count % 2){
            alert("홀수입니다.");
        } else {
            alert("짝수입니다.");
        }
    }, [count]);

    // 컴포넌트가 업데이트 될 때마다 매번 실행
        useEffect(()=>{
            console.log('hello world');
        })

        // 처음에만 실행
        useEffect(()=>{
            console.log('hello world');
        }, [])

        // 변수들의 변화가 일어날 때마다 실행
        useEffect(()=>{
            console.log('hello world');
        }, []) // [변수1, 변수2, 등등] 추가하면 변화가 일어날 때마다 실행됨.

    return(
        <div>
            <h2>{count}</h2>
            <button onClick={()=> setCount(count + 1)}>Up!!</button>        
            <button onClick={()=> setCount(0)}>Reset</button>     

            <div>
                <button onClick={() => setShowTimer(!showTimer)}>
                    {showTimer ? "Hide Timer" : "Show Timer"}
                </button>
                {showTimer && <Time />}
            </div>

        </div>
    );
}

function Time(props) {
    const [today, setToday] = useState(new Date());
    const hour = today.getHours();
    const min = today.getMinutes();
    const sec = today.getSeconds();
  
    console.log("렌더링이 됩니다..?");
  
    // clean-up 예제
    useEffect(() => {
      const intervalId = setInterval(() => {
        const t = new Date();
        setToday(t);
      }, 1000);
      return () => {
        console.log("Cleanup! Interval cleared.");
        // clearInterval : setInterval 함수의 작동을 중단합니다.
        clearInterval(intervalId);
      }
    }, []);
  
    return (
      <div>
        <h1>
          시간 : {hour}시 {min}분 {sec}초
        </h1>
      </div>
    );
  }