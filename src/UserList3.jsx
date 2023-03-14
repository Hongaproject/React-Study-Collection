import React from "react";

function User({user}) {
    return(
        <div>
            <span>{user.username}</span><span>({user.email})</span>
        </div>
    );
}

function UserList3({marginLeft}) {
    const users = [
        {
            id: 11,
            username: 'a',
            email: 'a@gmail.com'
        },
        {
            id: 12,
            username: 'b',
            email: 'b@gmail.com'
        },
        {
            id: 13,
            username: 'c',
            email: 'c@gmail.com'
        },
    ];

    return(
        <div style={{marginLeft}}>
            {users.map(user => (<User user={user} key={user.id}/>))}
        </div> 
        //동적인 배열을 렌더링 할 시 map을 사용한다 
        //배열안에 있는 원소를 변환하여 새로운 배열을 만들어준다. 
    );
}

export default UserList3;