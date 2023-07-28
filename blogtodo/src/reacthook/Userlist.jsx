import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function User({user}) {
    return(
        <div>{user.name} ({user.email})</div>
    );
}

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

    const Body = styled.div`
        padding: 20px;
    `

    return(
        <Body>
            <button onClick={goHome}><h1>Home</h1></button>
            <div><h3>{users[0].name} ({users[0].email})</h3></div>  
            {/* 초반 배열 생성법 */}
            <User user={users[0]}/>
            <User user={users[1]}/>
            <User user={users[2]}/>
            <br/>
            {users.map((user)=>(
                <User user={user}/>
                //<Uset안에 user= 는 User컴포넌트에 들어가는 user의 인자를 의미
                // user={} 안에 내용은 users 배열의 각 원소값을 의미합니다.
            ))}
        </Body>
    );
}

export default Userlist;