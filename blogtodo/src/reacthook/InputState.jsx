import { useState } from "react";

function InputState(){

    const [text, setText] = useState(""); //변경되는 값은 useState로 관리

    const onChange = (e) => {
        setText(e.target.value); //e.target을 사용시 input DOM을 가르킨다. input value를 조회하여 input 입력값을 알 수 있다.
        //DOM이란 HTML문서를 구조화 하여 나타낸 것이며 프로그래밍 언어가 DOM구조에 접근 가능하게 해주고 문서구조, 스타일, 내용등을 변경 할 수 있게 해준다.
    }
    
    const onReset = () => {
        setText("");
    }
    
    return(
        <div>
            <input onChange={onChange} type="text" value={text}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <span>값: {text}</span>
            </div>
        </div>
    );
}

export default InputState;