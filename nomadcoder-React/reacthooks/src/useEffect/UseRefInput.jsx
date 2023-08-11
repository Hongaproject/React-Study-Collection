import { useRef } from "react";

function UseRefInput () {
    /** input이 참조하고 있는 tomato는 const tomato이다. */
    const tomato = useRef(); // 컴포넌트의 어떤 부분을 선택할 수 있는 방법
    // document.getElementByID()와 사용하는 것과 같다. 

    return(
        <div>
            <div>Hello</div>
            <input ref={tomato} type="text" placeholder="Hi" /> 
        </div>
        
    )
}

export default UseRefInput;