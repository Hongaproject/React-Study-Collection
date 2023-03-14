import React from "react";

function User({user}) {
    return(
        <div>
            <span>{user.username}</span><span>({user.email})</span>
        </div>
    );
}

function UserList2({marginLeft}) {
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
            <User user={users[0]} />
            <User user={users[1]} />
            <User user={users[2]} />
        </div>
        //배열이 고정적이면 상관없지만 인덱스를 하나하나 조회하면서 렌더링을 한다면
        //동적은 배열은 렌더링 되지 못한다. 
    );
}

export default UserList2;