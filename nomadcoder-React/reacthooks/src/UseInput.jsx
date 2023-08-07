import { useState } from "react";

const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);

    const onChange = (e) => {
        const {
            target: {value}
        } = e;

        let willUpdate = true; // true라 항상 업데이트가 진행된다.

        if(typeof validator === "function"){ 
            // 매번 validator을 값이 변하고 타입이 function이면 willUpdate에 validator의 결과를 업로드
            willUpdate = validator(value); //유효성 검사 maxLen이 validator이다.
        }
        if(willUpdate){
            setValue(value);
        }
    }
    // 특정문자 사용 못하게 하기 위해 검증기능을 사용함.

    return {value, onChange}; // useInput의 기본값을 value와 return 해준다.
}

function UseInput () { 
    const maxLen = (value) => value.length <= 10; //최대 길이 검증하는 함수, true나 false를 return 해줌
 
    const name = useInput("H's ", maxLen) // name을 사용하여 useInput에서 H's와 maxLen을 넣어줌
    // input부분에 value={name.value}, {...name}을 적으면 useInput 값이 나옴.

    return(
        <div> 
            <h1>hello! world~</h1>
            <input type="text" placeholder="Name" {...name} /> 
            {/* 코드가 길어지니 spread문법 사용해서 {...name} 전체 복사 */}
        </div>
    );
}

export default UseInput;