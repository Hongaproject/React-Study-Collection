import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserlistData from "./UserlistData";
import { useRef, useState } from "react";
import CreateUser from "./CreateUser";

//초기작업 파일 형태

// function User({user}) {
//     return(
//         <div>{user.name} ({user.email})</div>
//     );
// }

function Userlist () {

    const navigate = useNavigate();

    const goHome = () => {
        navigate('/');
    }

    const users = [ //배열 생성
        {
            id: 1,
            name: "a",
            email: "a@.com"
        },
        {
            id: 2,
            name: "b",
            email: "b@.com"
        },
        {
            id: 3,
            name: "c",
            email: "c@.com"
        }
    ];

    const [input, setInput] = useState({ // CreateUser부분에 props를 넘겨주기 위해 생성 
        // InputStateRef부분 input2개 이상 사용 시에 대한 내용과 유사하게 진행이 됨.
        name: '',
        email: ''
    })

    const { name, email } = input; // input의 value값 유지하기 위해 사용 

    const onChange = (e) => {
        const { name, value} = e.target // 원래 한 개의 input시 e.target.value로 사용
        //이벤트 타켓으로 name, value값을 조회한다.
        setInput({
            ...input, // spread문법을 사용해서 객체를 복사하여 사용한다.
            [name]: value // key-value로 name부분에 name과 email값이 들어올 수 있게 사용. 
        });
    };

    
    

    const nextId = useRef(4); //함수가 호출시 마다 4이며 Ref는 React가 만든 전역 저장소에 저장
    // 함수를 재 호출시 마지막으로 업데이트된 current값이 유지가 된다.
    const onCreate = () => {
        

        setInput({
            name: '',
            email: ''
        });
        nextId.current += 1;
    };

    const Body = styled.div`
        padding: 20px;
    `

    return(
        <Body>
            <button onClick={goHome}><h1>Home</h1></button>
            {/* <div><h3>{users[0].name} ({users[0].email})</h3></div> */}
            {/* 초반 배열 생성법 */}
            {/* <User user={users[0]}/>
            <User user={users[1]}/>
            <User user={users[2]}/>
            <br/>
            {users.map((user)=>(
                <User user={user} key={user.id}/>
                //<Uset안에 user= 는 User컴포넌트에 들어가는 user의 인자를 의미
                // user={} 안에 내용은 users 배열의 각 원소값을 의미합니다.
            ))} */}

            <UserlistData users={users}/>
            {/* 임의로 만든 배열내용 users를 UserlistData에 props로 보낸다. */}
            <CreateUser name={name} email={email} onChange={onChange} onCreate={onCreate} />

        </Body>
    );
}

export default Userlist;