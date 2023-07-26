import { useEffect, useState } from "react";

const UseEffect = () => {
    //useEffect는 컴포넌트가 렌더링을 할 때 특정 작업을 실행하는 리액트 훅이다.
    //useEffect는 클래스 컴포넌트서 사용하던 라이프사이클 메소드를 사용할 수 있게 해준다. 

    const [name, setName] = useState("변경 전 이름"); // 초기값으로 변경전 이름을 적어줬다. 

    useEffect(() => {
        console.log("컴포넌트 나타남"); //마운트 부분 생애 첫 실행이됨. })이사이에 []를 넣으면 해당 컴포넌트가 렌더링시 실행됨. 빈 배열은 한 번 만 실행.
        console.log(name);
        return ()=> {
            console.log("컴포넌트 사라짐");
        };
    }, [name]);

    useEffect(()=>{
        //함수 A
        return() => {
            //함수 B
        }
    }, []) //배열에 값이 없을 때
    
    const onChange = () => {
        setName("변경 후 이름")
    }


    return(
        <div>
            <h1>useEffect 사용법</h1>
            {name} <button onClick={onChange}>변경</button>
        </div>
    );
}

export default UseEffect;