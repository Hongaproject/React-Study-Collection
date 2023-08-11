import { useEffect, useRef } from "react";

/** useClick으로 ref를 만들어주고 title과 useClick을 연결 시켜주고 title로 h1에 참조할 수 있다. */
const useClick = onClick => {
    const element = useRef();
    /** useEffect는 ref안에 element.current가 있는지 확인. */
    useEffect(() => {
        // sayHello를 가진 useClick이 mount 되었을 때 click 이벤트 추가
        if(element.current){
            element.current.addEventListener("click", onClick);
        } // Mount단계
        return () => {
            // unMount 
            if(element.current){
                element.current.removeEventListener("click", onClick);
            } 
        }
    },[]); // deps는 업데이트 값이 없으면 1번 만 실행
    // deps에 값이 있다면 Mount일 때만 호출이 됨. 
    return element;
}


function UseEffectRefClick() {
    const sayHello = () => console.log("say hello");

    /** title로 useClick을 받아와 h1을 참조할 수 있다. */
    const title = useClick(sayHello);

    return(
        <div>
            <h1 ref={title}>Hello~</h1>
        </div>
    );
}

export default UseEffectRefClick;