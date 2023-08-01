import { useState } from "react";

const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const onChange = (e) => {
        console.log(e.target)
    }
    return {value, onChange}; // useInput의 기본값을 value와 return 해준다.
}

function UseInput () { 

    const name = useInput("H's ") 
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