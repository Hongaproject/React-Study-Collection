import { useEffect, useState } from "react";

function UseEffect () {
    // useEffect는 마운트 업데이트 언마운트도 나뉘어 진다.
    // ComponentDidMount, ComponentWillUnMount, ComponentDidUpdate

    const sayHello = () => {
        console.log("Hello");
    }

    const [number, setNumber] = useState(0);
    const [aNumber, setAnumber] = useState(0);

    useEffect(() => { 
        // useEffect는 2개의 인자 값을 받음 첫 번쨰는 function의 effect값 
        // 두 번째는 dependency => deps   deps값이 있다면 deps값이 변하면 실행을 시킨다. 
        sayHello(); 
        // componentDidmount의 역할을 하여 새로고침하여 sayHello를 실행함

    }, [number]); // number값이 들어있는 버튼을 누르면 console로 Hello가 찍힘
    // []로 놔둔다면 한 번 만 실행이 된다. 
    // []없이 사용한다면 언제든지 실행이 된다. 

    return(
        <div>
            <div>Hello!</div>
            <button onClick={()=> setNumber(number+1)}>{number}</button>
            <button onClick={()=> setAnumber(number+1)}>{aNumber}</button>
        </div>
    );
}

export default UseEffect;