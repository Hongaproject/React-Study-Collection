import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserlistData from "./UserlistData";
import { useRef } from "react";

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

    const users = [
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

    const nextId = useRef(4); //함수가 호출시 마다 4이며 Ref는 React가 만든 전역 저장소에 저장
    // 함수를 재 호출시 마지막으로 업데이트된 current값이 유지가 된다.
    const onCreate = () => {

        nextId.current += 1;
    }

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

        </Body>
    );
}

export default Userlist;