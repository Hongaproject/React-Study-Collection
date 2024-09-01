import { useState } from 'react';
import './Component.css';

// useState란? -> 리액트 훅에 있는 기능 16.8버전에 도입되었음
// 상태관리를 할 수 있음. -> 컴포넌트 단위에서 상태관리 가능

export default function UseState () {

    // state랑 props 차이 - state는 컴포넌트서 사용되고 관리할 수 있는 상태 값, props는 부모 컴포넌트서 자식 컴포넌트로 전달되는 읽기 전용 데이터

    // state를 사용해서 값을 바꾸면 되나요? -> useState(setState)를 사용해서 값을 변경해야합니다.
    // useState(setState) 사용 이유 -> state는 불변성을 유지해야합니다. state로 값을 변경시 리액트에서 변확 감지를 하지 못해서 render함수를 호출하지 않아 상태값이 변하지 않습니다.
    // useState(setState) 사용하면 state의 주소 값이 변경 되고 이 변화를 알게 되어 렌더링이 진행됩니다. 

    const [count, setCount] = useState(0);

    // 이벤트와 함께 사용하기
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    const onLoginSubmit = (e) => {
        e.preventDefault();
        if(id === ""){
            alert("아이디 입력하지 않으셨습니다.");
        } else if ( pw === ""){
            alert("비밀번호 입력하지 않으셨습니다.");
        } else {
            setId("");
            setPw("");
        }
    }

    const onIdChange = (e) => {
        setId(e.target.value);
    }

    const onPwChange = (e) => {
        setPw(e.target.value);
    }

    // 이벤트와 함께 사용하기 - 코드 줄이기
    const [inputs, setInputs] = useState({
        ids: '',
        pws: ''
    })

    const {ids, pws} = inputs;

    const onChange = (e) => {
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    }

    const onLoginSubmits = (e) => {
        e.preventDefault();
        if(ids === ""){
            alert("아이디 입력하지 않으셨습니다.");
        } else if ( pws === ""){
            alert("비밀번호 입력하지 않으셨습니다.");
        } else {
            setInputs({ids: "", pws: ""});
        }
    }

    return(
        <div>
            <h2>{count}</h2>
            <button onClick={()=> setCount(count + 1)}>Up!!</button>
            <button onClick={()=> setCount(0)}>reset</button> <br />

            <h1>로그인 화면</h1>
            <form onSubmit={onLoginSubmit}>
                <input type="text" placeholder='id' onChange={onIdChange} value={id} />
                <input type="password" placeholder='pw' onChange={onPwChange} value={pw} />
                <button type='submit'>Login</button>
            </form> 
            <br />
            <form onSubmit={onLoginSubmits}>
                <input type="text" placeholder='id' onChange={onChange} name="ids" value={ids} />
                <input type="password" placeholder='pw' onChange={onChange} name="pws" value={pws} />
                <button type='submit'>Login</button>
            </form>
        
            <Component />
        </div>
    );
}

// 설명
// 리액트는 컴포넌트 기반으로 구성되어 있다. -> 컴포넌트 사용 이유 = 독립적인 UI를 제작할 수 있고, 사용시에 유지보수와 코드 재사용성에 좋다.
// JSX란? -> JavaScriptXML의 약자로 리액트서 사용되는 특수 문법, HTML처럼 제작 가능, 사용시에 간편하게 개발을 진행 할 수 있다.

const List = [
    {id : 1, area: "서울", visited: false},
    {id : 2, area: "대전", visited: true},
    {id : 3, area: "부산", visited: false}
]

export function Component () {

    const listItems = List.map((item) => {
        return(
            <li key={item.id} className={item.visited ? "active" : null}>{item.area}</li>
        )
    })

    return(
        <div>
            <ul className="list-area">
                {listItems} <br />
                <li className={List[0].visited ? "active" : null}>{List[0].area}</li>
                <li className={List[1].visited ? "active" : null}>{List[1].area}</li>
                <li className={List[2].visited ? "active" : null}>{List[2].area}</li>
            </ul>
            <ul className='list-area'>
                {
                    // 명시적 변환 {} 사용 시에 return 꼭 사용 - 사용 안할시 undefined
                    List.map((item) => {
                        return(
                            <li key={item.id} className={item.visited ? "active" : null}>{item.area}</li>
                        )
                    })
                }
            </ul>
            <ul className='list-area'>
                {
                    // 암묵적 반환 () 사용 시에 return 사용 안해도 알아서 값 반환해줌
                    List.map((item) => (
                        <li key={item.id} className={item.visited ? "active" : null}>{item.area}</li>
                    ))
                }
            </ul>
        </div>
    );
}
