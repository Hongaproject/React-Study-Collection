import styled from "styled-components";

function User({user}) { //User이라는 컴포넌트 생성 
    return(
        <div>{user.name} ({user.email})</div>
    );
}

function UserlistData({users}) {

    const Body = styled.div`
        padding: 20px;
    `

    return(
        <Body>
            <div><h3>{users[0].name} ({users[0].email})</h3></div>  
            {/* 초반 배열 생성법 */}
            <User user={users[0]}/>
            <User user={users[1]}/>
            <User user={users[2]}/>
            <br/>
            {users.map((user)=>(
                <User user={user} key={user.id}/>
                //<Uset안에 user= 는 User컴포넌트에 들어가는 user의 인자를 의미
                // user={} 안에 내용은 users 배열의 각 원소값을 의미합니다.
            ))}
        </Body>
    );
}

export default UserlistData;