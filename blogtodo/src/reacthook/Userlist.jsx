import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function User({user}) {
    return(
        <div>{user.name} {user.email}</div>
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
        </Body>
    );
}

export default Userlist;