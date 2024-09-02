import React, { useState, useRef, useEffect } from "react";

// useRef란 -> 리액트 훅에 있는 기능이며 16.8에 도입되었습니다.
// DOM에 접근을 할 때 사용되는 훅 입니다.
// ex) JS -> document.getElementById("#first"), React -> useRef사용으로 접근

// 2가지로 사용이 됩니다.
// 컴포넌트가 다시 렌더링 되어도 초기화 되지 않아야 하는 값을 저장할 때 사용됩니다. useRef를 통해 저장된 값은 재 렌더링되어도 변하지 않습니다.
// 특정 요소에 접근하고 싶을때 사용됩니다. 

function Counter () {
    const [count, setCount] = useState(0)
    const [countTwo, setCountTwo] = useState(0)
    let countThree = useRef(0)
    let countFour = 0
    console.log(countThree)
  
    // 랜더링 됨
    const handleCountUp = (e) => {
      setCount(count + 1)
      console.log(count) // 비동기 -> useEffect로 추적하면 동기 가능
    }
    // 랜더링 됨
    const handleCountUpTwo = (e) => {
      setCountTwo(countTwo + 1)
      console.log(countTwo) // 비동기 -> useEffect로 추적하면 동기 가능
    }
    // 클릭하면 변수의 값은 증가하지만 랜더링은 되지 않음
    const handleCountUpThree = (e) => {
      countThree.current = countThree.current + 1
      console.log(countThree.current)
    }
    // 랜더링 안되고 다른 state가 변해서 재렌더링 되어도 0으로 초기화
    const handleCountUpFour = (e) => {
      countFour = countFour + 1
      console.log(countFour)
    }
  
    useEffect(() => {
      console.log('count가 감시되고 있습니다.')
      console.log(`감시된 변수 : ${count}`)
    }, [count]) // count가 변경되는 것을 감시
    
    
    return(
      <>
        <div>{count}</div>
        <button onClick={handleCountUp}>up!</button>
        <div>{countTwo}</div>
        <button onClick={handleCountUpTwo}>up!</button>
        <div>{countThree.current}</div>
        <button onClick={handleCountUpThree}>up!</button>
        <div>{countFour}</div>
        <button onClick={handleCountUpFour}>up!</button>
      </>
    )
}

export default function UseRef() {

    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        // JS에서 DOM에게 접근할 때 사용되는 방식
        console.log(document.querySelectorAll('input'));
        setEmail(document.querySelectorAll('input')[0].value);
        setPw(document.querySelectorAll('input')[1].value);
    }

    return(
        <div>
            <Counter />
            <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column" }}>
                <label>
                    이메일 : <input type="email" />
                </label>
                <label>
                    비밀번호 : <input type="password" />
                </label>

                <button type="submit" style={{ width: "100px" }}>
                    로그인
                </button>
                <span>입력한 이메일 : {email}</span>
                <span>입력한 비밀번호 : {pw}</span>
            </form>
        </div>
    );
}