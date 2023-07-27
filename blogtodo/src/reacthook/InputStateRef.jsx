import { useState } from "react";

function InputStateRef() {

    const [text, setText] = useState({
        name: '',
        nickname: ''
    }); //input태그의 초기값 설정

    const {name, nickname} = text; //input의 value값을 유지하기 위해 설정

    const onChange = (e) => {
        const {value, name} = e.target; //이벤트타켓을 통해 value와 name값을 조회한다.
        setText({
            ...text, //spread문법 사용 기존 객체 복사하여 새로운 객체 만듬
            [name]: value //key-value로 name부분에 name과 nickname이 둘 다 들어올 수 있다.
        });
    };

    const onReset = () => {
        setText({
            name:'',
            nickname:'' //초기화 
        });
    };

    return(
        <div>
            <input name="name" placeholder="이름" onChange={onChange} value={name}/>
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값:</b>
                {name} ({nickname})
            </div>
        </div>
    );
}

export default InputStateRef;