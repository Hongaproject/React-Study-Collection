import React, { useState } from 'react';

// CustomHook이란? -> 리액트에서는 훅을 사용해서 상태관리를 합니다. 보통 코드에서 반복되는 로직을 많이 보실 수 있습니다.
// 반복되는 로직을 분리하고 재사용할 때 사용하는 것을 CustomHook이라고 합니다.

export default function CustomHook () {
    return(
        <div>
            
        </div>
    );
}

// InputComponent과 SomethingComponent은 useState와 onChange부분이 같습니다.

function InputComponent() {
    const [value, setValue] = useState('');
    function onChange(e) {
        setValue(e.target.value);
    }
    return (
        <>
            <input type="text" onChange={onChange}/>
            <div>
                {value}
            </div>
        </>
    )
}

function SomethingComponent() {
    const [value, setValue] = useState('');
    function onChange(e) {
        setValue(e.target.value);
    }
    return (
        <>
            <input type="text" onChange={onChange}/>
            <div>
                {value}가 강해졌다 돌격해!
            </div>
        </>
    )
}

// Custom Hook제작
export function useInput(initState) {
    const [value, setValue] = useState(initState);
    function onChange(e) {
        setValue(e.target.value);
    }
    return [value, onChange];
}

// import useInput from '../Hook/useInput'; // 파일이 분리되어 있다면, import가 생성이 되고
// InputComponent과 SomethingComponent의 코드는 밑에처럼 변경이 됩니다.

function InputComponent2() {
    const [value, onChange] = useInput("");
    return (
        <>
            <input type="text" onChange={onChange}/>
            <div>
                {value}
            </div>
        </>
    )
}

function SomethingComponent2() {
    const [value, onChange] = useInput("");
    return (
        <>
	        <input type="text" onChange={onChange}/>
	        <div>
		        {value}가 강해졌다 돌격해!
	        </div>
        </>
    )
}